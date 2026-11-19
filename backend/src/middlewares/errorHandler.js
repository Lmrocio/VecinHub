import { AppError } from '../utils/AppError.js';

export function notFound(req, res, next) {
  next(new AppError(404, 'Ruta no encontrada'));
}

// Último middleware: convierte cualquier error en una respuesta JSON coherente.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  let status = 500;
  let message = 'Error interno del servidor';
  let details;

  if (err instanceof AppError) {
    ({ status, message, details } = err);
  } else if (err.type === 'entity.parse.failed') {
    status = 400;
    message = 'El cuerpo de la petición no es un JSON válido';
  } else if (err.code === 11000) {
    status = 409;
    message = 'Ya existe un registro con esos datos';
  } else if (err.name === 'ValidationError') {
    status = 400;
    message = 'Datos no válidos';
    details = Object.values(err.errors).map((e) => ({ field: e.path, message: e.message }));
  }

  if (status === 500) {
    console.error(err);
  }

  res.status(status).json({ error: message, ...(details && { details }) });
}