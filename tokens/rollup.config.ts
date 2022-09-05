import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser()],
  // https://github.com/wessberg/rollup-plugin-ts/issues/78#issuecomment-583476953
  external: ['style-dictionary', 'path', 'json-to-ts'],
};
