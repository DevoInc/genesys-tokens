# Genesys Brand Devo

_Devo_'s main brand schemes of design tokens defined by _Dalí Design System_.

This package contains the brand schemes as `json` files, required to generate Devo's **light** and **dark** brands.

A preview of the generated tokens can be found in [devoinc/genesys-tokens](https://devoinc.github.io/genesys-tokens/).

## Usage

To access the generated brands one just needs to import the package and access the `Brands` object.

```typescript
import * as brands from "@devoinc/genesys-brand-devo";

console.log(brands.light.cmp.appBar);
```

## Quick start

To generate the brands from the available schemas, this project uses the `gyt` CLI from [@devoinc/genesys-tokens-cli](https://github.com/DevoInc/genesys-tokens/tree/master/tokens-cli). Please refer to the `gyt` package [documentation](https://github.com/DevoInc/genesys-tokens/blob/master/tokens-cli/README.md) for further information.

```sh
## Go to package directory
cd brand-devo
## Generate tokens for Devo's brand
npm run dist
```

The brands are now available in the `dist/` folder.
