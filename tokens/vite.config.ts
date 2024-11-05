/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['node:path', 'node:url'],
    },
  },
  plugins: [
    dts({
      entryRoot: './src/',
      exclude: ['./src/**/*.test.ts?(x)', './src/**/*.stories.tsx'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/tokens',
          dest: '.',
        },
      ],
    }),
  ],
  test: {
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
    },
  },
});
