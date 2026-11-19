import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { env } from './config/env.js';
import { csrfProtection } from './middlewares/csrf.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.disable('x-powered-by');
// Render está detrás de un proxy: necesario para que Express sepa que la conexión es HTTPS.
app.set('trust proxy', 1);

app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());
app.use(csrfProtection);

// Comprobación rápida de que la API está viva y de si la base de datos está conectada.
app.get('/api/health', (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  res.status(dbConnected ? 200 : 503).json({
    status: dbConnected ? 'ok' : 'degraded',
    db: dbConnected ? 'connected' : 'disconnected',
  });
});

app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;