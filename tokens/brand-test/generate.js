#!/usr/bin/env ts-node

import { generate, Scheme } from '../dist/index.js';

await generate({
  source: 'light/',
  scheme: Scheme.Light,
  menuScheme: Scheme.Light,
  output: 'brand-test/dist/light/',
});

await generate({
  source: 'dark/',
  scheme: Scheme.Dark,
  menuScheme: Scheme.Dark,
  output: 'brand-test/dist/dark/',
});
