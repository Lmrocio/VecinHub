import { User } from '../models/User.js';
import { AppError } from '../utils/AppError.js';
import { clearAuthCookie, hashPassword, setAuthCookie, verifyPassword } from '../utils/auth.js';

// Hash de relleno: si el correo no existe se compara igualmente contra él, para que
// la respuesta tarde lo mismo y no se pueda averiguar qué correos están registrados.
const DUMMY_HASH = await hashPassword('contraseña-de-relleno');

export async function register(req, res) {
  const { name, email, password } = req.body;

  if (await User.exists({ email })) {
    throw new AppError(409, 'Ya existe una cuenta con ese correo');
  }

  const user = await User.create({ name, email, passwordHash: await hashPassword(password) });

  setAuthCookie(res, user._id);
  res.status(201).json({ user });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+passwordHash');
  const valid = await verifyPassword(password, user?.passwordHash ?? DUMMY_HASH);

  if (!user || !valid) {
    throw new AppError(401, 'Correo o contraseña incorrectos');
  }

  setAuthCookie(res, user._id);
  res.json({ user });
}

export function me(req, res) {
  res.json({ user: req.user });
}

export function logout(req, res) {
  clearAuthCookie(res);
  res.status(204).end();
}