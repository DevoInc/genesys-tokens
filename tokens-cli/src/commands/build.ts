import path from 'path';
import type { Arguments, CommandBuilder } from 'yargs';
import { generate, Scheme } from '@devoinc/dali-tokens';

interface Options {
  input?: string;
  output?: string;
  scheme?: string;
}

export const command = 'build';
export const desc = 'Generate brands';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.options({
    input: {
      type: 'string',
      alias: 'i',
      desc: 'Path to schema',
      requiresArg: true,
    },
    output: {
      type: 'string',
      alias: 'o',
      desc: 'Output dir of the generated files',
      requiresArg: true,
    },
    scheme: {
      type: 'string',
      alias: 's',
      desc: 'light or dark',
      default: 'light',
    },
  });

// dit build -i "schemes/light/*.json" -o dist/light/
export const handler = (argv: Arguments<Options>): void => {
  const { scheme, output, input } = argv;

  generate({
    source: input as string,
    scheme: scheme as Scheme,
    output: `${path.normalize(path.format(path.parse(output as string)))}/`,
  });

  process.exit(0);
};
