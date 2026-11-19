import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    setupFiles: ['./tests/setup.js'],
    testTimeout: 30000,
    hookTimeout: 120000,
    // Los archivos de test se ejecutan de uno en uno: comparten la base de datos en memoria.
    fileParallelism: false,
  },
});
