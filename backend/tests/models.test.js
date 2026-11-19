import { beforeAll, describe, expect, it } from 'vitest';
import { User, ROLES, MEMBERSHIP_STATUS } from '../src/models/User.js';
import { Community } from '../src/models/Community.js';

const baseUser = {
  name: 'Carmen López',
  email: 'carmen@example.com',
  passwordHash: 'hash-de-prueba',
};

beforeAll(async () => {
  await Promise.all([User.init(), Community.init()]);
});

describe('User', () => {
  it('aplica los valores por defecto de un usuario recién registrado', async () => {
    const user = await User.create(baseUser);
    expect(user.role).toBe(ROLES.RESIDENT);
    expect(user.membershipStatus).toBe(MEMBERSHIP_STATUS.NONE);
    expect(user.communityId).toBeNull();
    expect(user.dwellingId).toBeNull();
  });

  it('normaliza el correo a minúsculas y sin espacios', async () => {
    const user = await User.create({ ...baseUser, email: '  Carmen@Example.COM ' });
    expect(user.email).toBe('carmen@example.com');
  });

  it('rechaza correos duplicados aunque cambien las mayúsculas', async () => {
    await User.create(baseUser);
    await expect(User.create({ ...baseUser, email: 'CARMEN@example.com' })).rejects.toMatchObject({
      code: 11000,
    });
  });

  it('rechaza un correo con formato no válido', async () => {
    await expect(User.create({ ...baseUser, email: 'no-es-un-correo' })).rejects.toThrow(
      /Correo no válido/,
    );
  });

  it('rechaza un rol que no existe', async () => {
    await expect(User.create({ ...baseUser, role: 'admin' })).rejects.toThrow();
  });

  it('no devuelve passwordHash en las consultas ni en JSON', async () => {
    const created = await User.create(baseUser);
    expect(created.toJSON()).not.toHaveProperty('passwordHash');

    const found = await User.findById(created._id);
    expect(found.passwordHash).toBeUndefined();

    const withHash = await User.findById(created._id).select('+passwordHash');
    expect(withHash.passwordHash).toBe('hash-de-prueba');
  });

  it('expone id en lugar de _id al serializar', async () => {
    const json = (await User.create(baseUser)).toJSON();
    expect(json.id).toBeTypeOf('string');
    expect(json).not.toHaveProperty('_id');
  });
});

describe('Community', () => {
  it('crea una comunidad vinculada a su presidente', async () => {
    const president = await User.create({ ...baseUser, role: ROLES.PRESIDENT });
    const community = await Community.create({
      name: 'Comunidad Los Olivos',
      address: 'Calle Larga 10, Jerez',
      presidentId: president._id,
    });

    const found = await Community.findById(community._id).populate('presidentId', 'name');
    expect(found.presidentId.name).toBe('Carmen López');
    expect(found.createdAt).toBeInstanceOf(Date);
  });

  it('exige nombre, dirección y presidente', async () => {
    const err = await Community.create({}).catch((e) => e);
    expect(Object.keys(err.errors).sort()).toEqual(['address', 'name', 'presidentId']);
  });
});
