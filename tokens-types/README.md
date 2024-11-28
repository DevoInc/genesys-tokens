# Genesys Tokens Types

Type declarations for brands generated with
[Genesys Tokens](https://www.npmjs.com/package/@devoinc/genesys-tokens).

## Summary

This package contains type declarations for brands generated with
[Genesys Tokens](https://www.npmjs.com/package/@devoinc/genesys-tokens) or
[Genesys Tokens CLI](https://www.npmjs.com/package/@devoinc/genesys-tokens-cli).

An example of a generated brand is
[Genesys Brand Devo](https://www.npmjs.com/package/@devoinc/genesys-brand-devo)

## Installation

```bash
npm install --save-dev @devoinc/genesys-tokens-types
```

## Usage

```typescript
import { light } from '@devoinc/genesys-brand-devo';
import { Brand } from '@devoinc/genesys-tokens-types';

const tokens: Brand = light;
```
