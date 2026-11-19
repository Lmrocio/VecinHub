import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

// Comprobación rápida de que la API está viva y de si la base de datos está conectada.
app.get('/api/health', (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  res.status(dbConnected ? 200 : 503).json({
    status: dbConnected ? 'ok' : 'degraded',
    db: dbConnected ? 'connected' : 'disconnected',
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;
