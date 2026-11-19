import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const AUTH_COOKIE = 'vecinhub_token';

const SESSION_MS = env.JWT_EXPIRES_IN_HOURS * 60 * 60 * 1000;

export function hashPassword(password) {
  return bcrypt.hash(password, env.BCRYPT_ROUNDS);
}

export function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

// El token solo guarda el id del usuario (sub). El rol y la comunidad se leen
// siempre de la base de datos, así un cambio de rol se aplica al momento.
export function signToken(userId) {
  return jwt.sign({ sub: String(userId) }, env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: env.JWT_EXPIRES_IN_HOURS * 60 * 60,
  });
}

export function verifyToken(token) {
  return jwt.verify(token, env.JWT_SECRET, { algorithms: ['HS256'] });
}

// Opciones comunes de las cookies de sesión.
export function cookieOptions({ withMaxAge = true } = {}) {
  return {
    httpOnly: true,
    secure: env.COOKIE_SECURE,
    sameSite: env.COOKIE_SAMESITE,
    path: '/',
    ...(withMaxAge && { maxAge: SESSION_MS }),
  };
}

export function setAuthCookie(res, userId) {
  res.cookie(AUTH_COOKIE, signToken(userId), cookieOptions());
}

export function clearAuthCookie(res) {
  res.clearCookie(AUTH_COOKIE, cookieOptions({ withMaxAge: false }));
}