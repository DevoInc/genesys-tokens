# Dali tokens

Tokens' definition and generation tools.

This project provides the tools to generate *Devo*'s brand design tokens and its customizations.
It includes the agnostic source for the generation of the tokens, as described in *Dali Design System*. It uses [style-dictionary](https://amzn.github.io/style-dictionary/) under the hood.

## Tokens generation tools

### Generator

Given an input schema, we can generate the corresponding tokens. Tokens are generated in the following formats: `css`, `figma tokens plugin`, `js`, `json` and `scss`. An extra `html` format provides an interactive visualization of the output.

```typescript
import { generate, Scheme } from '@devoinc/dali-tokens';

generate({
  source: './schemes/light',
  scheme: Scheme.light,
  menuScheme: Scheme.light,
  output: `dist/light/`,
});
```

### Validator

Once a set of tokens has been generated, the output can be validated using:

```js
validate(pathToFolder);
```
