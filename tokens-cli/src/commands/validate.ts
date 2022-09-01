import chalk from 'chalk';
import path from 'path';
import type { Arguments, CommandBuilder } from 'yargs';
import { validateJson } from '@devoinc/dali-tokens';

export const command = 'validate [dir]';
export const desc = 'Validate brand dir';

const validate = async (brandPath: string) => {
  const jsonPath = path.resolve(brandPath, 'json', 'tokens.json.all.json');
  const { default: jsonTokens } = await import(jsonPath);
  const errors = validateJson(jsonTokens);
  if (errors.length) {
    console.error(
      chalk.red(
        `❌ Wrong tokens values in "${jsonPath}":\n${errors.join('\n')}`
      )
    );
    process.exit(1);
  } else {
    console.log(chalk.green('✔️ Everything is ok!'));
  }
};

export const builder: CommandBuilder = (yargs) => yargs.options({});

// dit validate ./dist/light
export const handler = async (argv: Arguments) => {
  const { dir } = argv;

  await validate(dir as string);

  process.exit(0);
};
