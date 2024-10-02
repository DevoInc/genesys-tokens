import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    copy({
      targets: [
        {
          src: 'src/tokens',
          dest: 'dist',
        },
      ],
    }),
  ],
  external: ['style-dictionary', 'path', 'quicktype-core'],
};
