import crypto from 'node:crypto';
import { AppError } from '../utils/AppError.js';
import { cookieOptions } from '../utils/auth.js';

export const CSRF_COOKIE = 'vecinhub_csrf';
export const CSRF_HEADER = 'x-csrf-token';

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

// GET /api/auth/csrf: genera un token, lo guarda en una cookie HttpOnly y lo devuelve
// en el cuerpo. El frontend lo guarda en memoria y lo envía en la cabecera X-CSRF-Token.
export function issueCsrfToken(req, res) {
  const token = crypto.randomBytes(32).toString('hex');
  res.cookie(CSRF_COOKIE, token, cookieOptions());
  res.json({ csrfToken: token });
}

// Patrón "double submit": en las peticiones que modifican datos, la cabecera tiene que
// coincidir con la cookie. Una web maliciosa puede hacer que el navegador envíe la
// cookie, pero no puede leer el token para ponerlo en la cabecera.
export function csrfProtection(req, res, next) {
  if (SAFE_METHODS.has(req.method)) {
    return next();
  }

  const cookieToken = req.cookies?.[CSRF_COOKIE];
  const headerToken = req.get(CSRF_HEADER);

  if (!cookieToken || !headerToken || !safeEqual(cookieToken, headerToken)) {
    return next(new AppError(403, 'Token CSRF ausente o no válido'));
  }

  next();
}

function safeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
}