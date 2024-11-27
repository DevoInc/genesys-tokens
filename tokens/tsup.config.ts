import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: {
    compilerOptions: {
      moduleResolution: 'bundler',
    },
    resolve: true,
  },
  format: ['esm', 'cjs'],
  shims: true,
  publicDir: true,
});
