import request from 'supertest';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import app from '../src/app.js';
import { User } from '../src/models/User.js';

const carmen = { name: 'Carmen López', email: 'carmen@example.com', password: 'contraseña-segura' };

let agent;
let csrf;

// Cada test usa un "navegador" nuevo (agent) que guarda las cookies entre peticiones.
async function newSession() {
  const session = request.agent(app);
  const res = await session.get('/api/auth/csrf').expect(200);
  return { session, token: res.body.csrfToken };
}

function getCookie(res, name) {
  return (res.headers['set-cookie'] ?? []).find((c) => c.startsWith(`${name}=`));
}

beforeAll(async () => {
  await User.init();
});

beforeEach(async () => {
  ({ session: agent, token: csrf } = await newSession());
});

describe('CSRF', () => {
  it('rechaza peticiones POST sin token CSRF', async () => {
    const res = await request(app).post('/api/auth/login').send(carmen).expect(403);
    expect(res.body.error).toMatch(/CSRF/);
  });

  it('rechaza un token CSRF que no coincide con la cookie', async () => {
    await agent.post('/api/auth/login').set('X-CSRF-Token', 'inventado').send(carmen).expect(403);
  });
});

describe('POST /api/auth/register', () => {
  it('crea la cuenta, inicia sesión y no devuelve la contraseña', async () => {
    const res = await agent.post('/api/auth/register').set('X-CSRF-Token', csrf).send(carmen).expect(201);

    expect(res.body.user).toMatchObject({
      name: 'Carmen López',
      email: 'carmen@example.com',
      role: 'resident',
      membershipStatus: 'none',
    });
    expect(res.body.user).not.toHaveProperty('passwordHash');

    const cookie = getCookie(res, 'vecinhub_token');
    expect(cookie).toMatch(/HttpOnly/);
    expect(cookie).toMatch(/SameSite=Lax/);

    const saved = await User.findOne({ email: carmen.email }).select('+passwordHash');
    expect(saved.passwordHash).not.toBe(carmen.password);
    expect(saved.passwordHash).toMatch(/^\$2[aby]\$/); // formato bcrypt
  });

  it('rechaza un correo ya registrado (409)', async () => {
    await agent.post('/api/auth/register').set('X-CSRF-Token', csrf).send(carmen).expect(201);
    const res = await agent
      .post('/api/auth/register')
      .set('X-CSRF-Token', csrf)
      .send({ ...carmen, email: 'CARMEN@example.com' })
      .expect(409);
    expect(res.body.error).toMatch(/Ya existe/);
  });

  it('valida los datos y explica qué campos fallan (400)', async () => {
    const res = await agent
      .post('/api/auth/register')
      .set('X-CSRF-Token', csrf)
      .send({ name: 'C', email: 'no-es-correo', password: 'corta' })
      .expect(400);
    const fields = res.body.details.map((d) => d.field).sort();
    expect(fields).toEqual(['email', 'name', 'password']);
  });

  it('acepta una contraseña de exactamente 72 bytes', async () => {
    await agent
      .post('/api/auth/register')
      .set('X-CSRF-Token', csrf)
      .send({ ...carmen, password: 'a'.repeat(72) })
      .expect(201);
  });

  it('rechaza contraseñas de más de 72 bytes aunque tengan menos de 72 caracteres', async () => {
    // 37 "ñ" = 37 caracteres pero 74 bytes; 20 emojis = 20 caracteres pero 80 bytes
    for (const password of ['ñ'.repeat(37), '🔒'.repeat(20)]) {
      const res = await agent
        .post('/api/auth/register')
        .set('X-CSRF-Token', csrf)
        .send({ ...carmen, password })
        .expect(400);
      expect(res.body.details[0]).toMatchObject({ field: 'password', message: expect.stringMatching(/72 bytes/) });
    }
  });

  it('ignora campos que no se permiten, como el rol', async () => {
    const res = await agent
      .post('/api/auth/register')
      .set('X-CSRF-Token', csrf)
      .send({ ...carmen, role: 'president' })
      .expect(201);
    expect(res.body.user.role).toBe('resident');
  });
});

describe('POST /api/auth/login', () => {
  beforeEach(async () => {
    const { session, token } = await newSession();
    await session.post('/api/auth/register').set('X-CSRF-Token', token).send(carmen).expect(201);
  });

  it('inicia sesión con credenciales correctas y deja la cookie', async () => {
    const res = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .send({ email: '  Carmen@Example.com ', password: carmen.password })
      .expect(200);
    expect(res.body.user.email).toBe(carmen.email);
    expect(getCookie(res, 'vecinhub_token')).toMatch(/HttpOnly/);
  });

  it('da el mismo error si la contraseña es incorrecta o el correo no existe (401)', async () => {
    const wrongPassword = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .send({ email: carmen.email, password: 'otra-contraseña' })
      .expect(401);
    const unknownEmail = await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .send({ email: 'nadie@example.com', password: carmen.password })
      .expect(401);
    expect(wrongPassword.body.error).toBe(unknownEmail.body.error);
  });

  it('no acepta una contraseña de 72 bytes con texto añadido al final', async () => {
    const password72 = 'a'.repeat(72);
    const { session, token } = await newSession();
    await session
      .post('/api/auth/register')
      .set('X-CSRF-Token', token)
      .send({ ...carmen, email: 'larga@example.com', password: password72 })
      .expect(201);

    await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .send({ email: 'larga@example.com', password: `${password72}EXTRA` })
      .expect(400);
    await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .send({ email: 'larga@example.com', password: password72 })
      .expect(200);
  });
});

describe('GET /api/auth/me y POST /api/auth/logout', () => {
  it('devuelve 401 sin sesión', async () => {
    await request(app).get('/api/auth/me').expect(401);
  });

  it('devuelve 401 con un token manipulado', async () => {
    await request(app).get('/api/auth/me').set('Cookie', 'vecinhub_token=token.falso.123').expect(401);
  });

  it('devuelve el usuario conectado y, tras cerrar sesión, deja de hacerlo', async () => {
    await agent.post('/api/auth/register').set('X-CSRF-Token', csrf).send(carmen).expect(201);

    const me = await agent.get('/api/auth/me').expect(200);
    expect(me.body.user.email).toBe(carmen.email);

    await agent.post('/api/auth/logout').set('X-CSRF-Token', csrf).expect(204);
    await agent.get('/api/auth/me').expect(401);
  });
});

describe('Errores generales', () => {
  it('responde 400 si el JSON está mal formado', async () => {
    await agent
      .post('/api/auth/login')
      .set('X-CSRF-Token', csrf)
      .set('Content-Type', 'application/json')
      .send('{"email": ')
      .expect(400);
  });

  it('responde 404 en JSON para rutas que no existen', async () => {
    const res = await request(app).get('/api/no-existe').expect(404);
    expect(res.body.error).toBe('Ruta no encontrada');
  });
});