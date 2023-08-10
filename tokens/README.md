# Genesys tokens

Tokens' definition and generation tools.

This project provides the tools to generate _Devo_'s brand design tokens and its customizations.
It includes the agnostic source for the generation of the tokens, as described in _Genesys Design System_. It uses [style-dictionary](https://amzn.github.io/style-dictionary/) under the hood. The generated tokens are W3CDTCG-compliant©™. See [W3C Design Tokens Format Module](https://tr.designtokens.org/format/) for more information.

## Tokens generation tools

### Generator

Given an input schema, we can generate the corresponding tokens. Tokens are generated in the following formats: `css`, `figma tokens plugin`, `js`, `json` and `scss`. An extra `html` format provides an interactive visualization of the output.

```typescript
import { generate, Scheme } from '@devoinc/genesys-tokens';

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

### Typescript

The type definitions for the brands generated using `@devoinc/genesys-tokens` are available in [@devoinc/genesys-tokens-types](https://www.npmjs.com/package/@devoinc/genesys-tokens-types).
