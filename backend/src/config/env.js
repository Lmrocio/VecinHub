import 'dotenv/config';
import { z } from 'zod';

// "true"/"false" del .env a booleano (z.coerce.boolean convertiría "false" en true).
const booleanString = z.enum(['true', 'false']).transform((value) => value === 'true');

const envSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().positive().default(4000),
    MONGODB_URI: z
      .string({ error: 'MONGODB_URI es obligatoria' })
      .regex(/^mongodb(\+srv)?:\/\//, 'MONGODB_URI debe empezar por mongodb:// o mongodb+srv://'),

    // Autenticación
    JWT_SECRET: z
      .string({ error: 'JWT_SECRET es obligatoria' })
      .min(32, 'JWT_SECRET debe tener al menos 32 caracteres'),
    JWT_EXPIRES_IN_HOURS: z.coerce.number().int().positive().default(24),
    BCRYPT_ROUNDS: z.coerce.number().int().min(4).max(15).default(12),

    // Frontend que puede llamar a la API (CORS)
    CLIENT_ORIGIN: z.url('CLIENT_ORIGIN debe ser una URL').default('http://localhost:5173'),

    // Cookies: en local lax + sin secure; en producción con dominios distintos, none + secure
    COOKIE_SAMESITE: z.enum(['lax', 'strict', 'none']).default('lax'),
    COOKIE_SECURE: booleanString.optional(),
  })
  .transform((data) => ({
    ...data,
    COOKIE_SECURE: data.COOKIE_SECURE ?? data.NODE_ENV === 'production',
  }))
  .refine((data) => data.COOKIE_SAMESITE !== 'none' || data.COOKIE_SECURE, {
    message: 'COOKIE_SAMESITE=none exige COOKIE_SECURE=true',
    path: ['COOKIE_SECURE'],
  });

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Variables de entorno no válidas:');
  for (const issue of parsed.error.issues) {
    console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
  }
  process.exit(1);
}

export const env = parsed.data;