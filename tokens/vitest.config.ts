import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
    },
  },
});
