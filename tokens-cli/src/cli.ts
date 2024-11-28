#!/usr/bin/env node

import chalk from 'chalk';
import { parseArgs } from 'node:util';
import path from 'node:path';
import {
  generate,
  generateTypes,
  Scheme,
  validateJson,
} from '@devoinc/genesys-tokens';

const { positionals, values } = parseArgs({
  options: {
    output: {
      type: 'string',
      short: 'o',
    },
    input: {
      type: 'string',
      short: 'i',
    },
    // light or dark
    scheme: {
      type: 'string',
      short: 's',
      default: 'light',
    },
    // light or dark
    menuScheme: {
      type: 'string',
      short: 'm',
      default: 'light',
    },
  },
  allowPositionals: true,
});

const validate = async (brandPath: string) => {
  const jsonPath = path.resolve(brandPath, 'json', 'tokens.json.all.json');
  const { default: jsonTokens } = await import(jsonPath, {
    with: { type: 'json' },
  });
  const errors = validateJson(jsonTokens);
  if (errors.length) {
    // eslint-disable-next-line no-console
    console.error(
      chalk.red(
        `❌ Wrong tokens values in "${jsonPath}":\n${errors.join('\n')}`,
      ),
    );
    process.exit(1);
  } else {
    // eslint-disable-next-line no-console
    console.log(chalk.green('✔️ Everything is ok!'));
  }
};

const output = `${path.normalize(path.format(path.parse(values?.output ?? 'dist/')))}/`;

if (positionals[0] === 'build') {
  await generate({
    source: String(values.input),
    scheme: values.scheme === 'light' ? Scheme.Light : Scheme.Dark,
    menuScheme: values.menuScheme === 'light' ? Scheme.Light : Scheme.Dark,
    output,
  });
} else if (positionals[0] === 'types') {
  await generateTypes({
    output,
  });
} else if (positionals[0] === 'validate') {
  // validate dir WIP
  await validate(positionals[1]);
}

process.exit(0);
