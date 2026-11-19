import { AppError } from '../utils/AppError.js';

// Valida req.body con un esquema de Zod. Si es válido, lo sustituye por los datos
// ya limpios (sin campos extra y con las transformaciones aplicadas).
export const validateBody = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body ?? {});

  if (!result.success) {
    const details = result.error.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));
    return next(new AppError(400, 'Datos no válidos', details));
  }

  req.body = result.data;
  next();
};