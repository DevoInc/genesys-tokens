# Dali tokens

Token's definitions and generation tools.

This project includes both Devo's tokens definition for Dali's design system and tools to generate design brands from a given schema. It uses [style-dictionary](https://amzn.github.io/style-dictionary/) under the hood.

## Tokens generation tools

### Generator

Given an input schema, we can generate the corresponding tokens. Tokens are generated in the following formats: `css`, `figma`, `js`, `json` and `scss`.

```typescript
import { generate, Scheme } from '@devoinc/dali-tokens';

generate({
  source: './schemes/light/*.json',
  scheme: Scheme.light,
  output: `dist/light/`,
});
```

### Validator

Once a set of tokens has been generated, the output can be validated using:

```js
validate(pathToFolder);
```

## Quick start

Follow the steps in [dali-icons/README.md](../README.md) for a quick overview of the resulting output.
