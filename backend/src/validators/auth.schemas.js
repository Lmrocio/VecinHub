import { z } from 'zod';

// bcrypt solo tiene en cuenta los primeros 72 bytes de la contraseña e ignora el resto.
// Letras como "ñ" o "á" ocupan 2 bytes y los emojis 4, así que se limita por bytes
// (UTF-8) y no por caracteres.
export const PASSWORD_MAX_BYTES = 72;

const fitsInBcrypt = (value) => Buffer.byteLength(value, 'utf8') <= PASSWORD_MAX_BYTES;
const tooLongMessage = `La contraseña es demasiado larga (máximo ${PASSWORD_MAX_BYTES} bytes; las tildes, la ñ y los emojis ocupan más de uno)`;

const email = z
  .string({ error: 'El correo es obligatorio' })
  .trim()
  .toLowerCase()
  .pipe(z.email('Correo no válido').max(254));

export const registerSchema = z.object({
  name: z
    .string({ error: 'El nombre es obligatorio' })
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'El nombre no puede superar los 80 caracteres'),
  email,
  password: z
    .string({ error: 'La contraseña es obligatoria' })
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .refine(fitsInBcrypt, { error: tooLongMessage }),
});

// En el login también se limita: si no, una contraseña guardada de 72 bytes aceptaría
// cualquier texto añadido al final, porque bcrypt lo ignoraría al comparar.
export const loginSchema = z.object({
  email,
  password: z
    .string({ error: 'La contraseña es obligatoria' })
    .min(1, 'La contraseña es obligatoria')
    .refine(fitsInBcrypt, { error: tooLongMessage }),
});