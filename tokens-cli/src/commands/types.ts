import path from 'path';
import type { Arguments, CommandBuilder } from 'yargs';
import { generateTypes } from '@devoinc/genesys-tokens';

interface Options {
  output?: string;
}

export const command = 'types';
export const desc = 'Generate type definitions';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.options({
    output: {
      type: 'string',
      alias: 'o',
      desc: 'Output dir of the generated files',
      requiresArg: true,
    },
  });

// gyt types -o dist/
export const handler = (argv: Arguments<Options>): void => {
  const { output } = argv;

  generateTypes({
    output: `${path.normalize(path.format(path.parse(output as string)))}/`,
  });

  process.exit(0);
};
