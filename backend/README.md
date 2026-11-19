# VecinHub — Backend

API REST de VecinHub con Node.js, Express 5 y MongoDB (Mongoose 8).

## Requisitos

- Node.js 22 o superior (recomendado 24 LTS)
- Acceso al clúster de MongoDB Atlas del proyecto, con un usuario de base de datos y tu IP permitida en **Database & Network Access**

## Puesta en marcha

```bash
cd backend
npm install
cp .env.example .env   # en PowerShell: copy .env.example .env
```

Rellena en `.env` al menos `MONGODB_URI` (cadena de conexión de Atlas) y `JWT_SECRET`. Para generar un secreto:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Después:

```bash
npm run db:check       # comprueba la conexión con Atlas
npm run dev            # arranca la API con recarga automática
```

La API queda en `http://localhost:4000`. `GET /api/health` devuelve `200` si la base de datos está conectada y `503` si no lo está.

## Variables de entorno

| Variable | Por defecto | Descripción |
|---|---|---|
| `NODE_ENV` | `development` | `development`, `test` o `production`. |
| `PORT` | `4000` | Puerto de la API. |
| `MONGODB_URI` | — | Cadena de conexión de MongoDB Atlas (obligatoria). |
| `JWT_SECRET` | — | Secreto para firmar los JWT, mínimo 32 caracteres (obligatoria). |
| `JWT_EXPIRES_IN_HOURS` | `24` | Duración de la sesión. |
| `BCRYPT_ROUNDS` | `12` | Coste del cifrado de contraseñas. |
| `CLIENT_ORIGIN` | `http://localhost:5173` | URL del frontend autorizada por CORS. |
| `COOKIE_SAMESITE` | `lax` | `lax` en local; `none` si frontend y API están en dominios distintos. |
| `COOKIE_SECURE` | `true` en producción | Cookies solo por HTTPS. Obligatorio con `COOKIE_SAMESITE=none`. |

## Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Arranca la API y la reinicia al guardar cambios en los `.js`. |
| `npm start` | Arranca la API (producción). |
| `npm run db:check` | Crea un usuario y una comunidad de prueba en Atlas, los lee y los borra. |
| `npm test` | Ejecuta los tests con una MongoDB en memoria (no toca Atlas). |

## Autenticación

La sesión es un **JWT guardado en una cookie `HttpOnly`** (`vecinhub_token`): el JavaScript del navegador no puede leerla. Las peticiones que modifican datos (`POST`, `PUT`, `PATCH`, `DELETE`) requieren además un **token CSRF** en la cabecera `X-CSRF-Token`.

| Método | Ruta | Sesión | Descripción |
|---|---|---|---|
| `GET` | `/api/auth/csrf` | No | Devuelve `{ csrfToken }` y deja la cookie CSRF. |
| `POST` | `/api/auth/register` | No | Crea la cuenta (`name`, `email`, `password`) e inicia sesión. `201`, `400`, `409`. |
| `POST` | `/api/auth/login` | No | Inicia sesión (`email`, `password`). `200`, `400`, `401`. |
| `GET` | `/api/auth/me` | Sí | Devuelve el usuario conectado. `200`, `401`. |
| `POST` | `/api/auth/logout` | No | Borra la cookie de sesión. `204`. |

Flujo desde el frontend (con `fetch` o Axios, siempre con `credentials: 'include'` / `withCredentials: true`):

1. Al cargar la app: `GET /api/auth/csrf` y guardar `csrfToken` en memoria.
2. En cada `POST`/`PUT`/`PATCH`/`DELETE`: enviar la cabecera `X-CSRF-Token: <csrfToken>`.
3. Para saber si hay sesión: `GET /api/auth/me` (`401` = no hay sesión).

Los errores siempre tienen la forma `{ "error": "mensaje", "details": [{ "field", "message" }] }` (`details` solo en errores de validación).

## Estructura

```
backend/
├── scripts/db-check.js        # comprobación de la conexión con Atlas
├── src/
│   ├── app.js                 # aplicación Express (middlewares y rutas)
│   ├── server.js              # conexión a la base de datos y arranque
│   ├── config/                # variables de entorno y conexión a MongoDB
│   ├── controllers/           # lógica de cada endpoint
│   ├── middlewares/           # validación, errores, sesión y CSRF
│   ├── models/                # esquemas de Mongoose (User, Community)
│   ├── routes/                # definición de rutas
│   ├── utils/                 # contraseñas, JWT, cookies y AppError
│   └── validators/            # esquemas de Zod para validar peticiones
└── tests/                     # tests con Vitest, Supertest y mongodb-memory-server
```

## Modelos

- **User:** `name`, `email` (único y en minúsculas), `passwordHash` (no se devuelve nunca), `role` (`president` | `resident`), `communityId` y `dwellingId` (null hasta unirse a una comunidad), `membershipStatus` (`none` | `pending` | `validated`).
- **Community:** `name`, `address`, `presidentId`.