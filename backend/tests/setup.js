import { MongoMemoryReplSet } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { afterAll, afterEach, beforeAll } from 'vitest';

// Variables de entorno para los tests. Se definen antes de importar la app, así no
// dependen del .env de cada uno (dotenv no sobrescribe las que ya existen).
process.env.NODE_ENV = 'test';
process.env.MONGODB_URI ??= 'mongodb://127.0.0.1:27017/vecinhub-test';
process.env.JWT_SECRET = 'secreto-de-pruebas-con-al-menos-32-caracteres';
process.env.BCRYPT_ROUNDS = '4'; // rápido en tests; en producción se usa 12
process.env.CLIENT_ORIGIN = 'http://localhost:5173';
process.env.COOKIE_SAMESITE = 'lax';
process.env.COOKIE_SECURE = 'false';

let replSet;

beforeAll(async () => {
  // Replica set en memoria: admite transacciones, igual que Atlas.
  replSet = await MongoMemoryReplSet.create({ replSet: { count: 1 } });
  await mongoose.connect(replSet.getUri());
});

afterEach(async () => {
  const collections = await mongoose.connection.db.collections();
  await Promise.all(collections.map((c) => c.deleteMany({})));
});

afterAll(async () => {
  await mongoose.disconnect();
  await replSet?.stop();
});