# Genesys Tokens

![license](https://img.shields.io/github/license/devoinc/genesys-tokens)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/devoinc/genesys-tokens/ci.yml)

Monorepo containing a set of packages devoted to the generation of design tokens defined by Devo's _Genesys Design System_.
The generated tokens are W3CDTCG-compliant©™. See [W3C Design Tokens Format Module](https://tr.designtokens.org/format/) for more information.

The project is built using `npm workspaces` and contains the following packages:

[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-tokens?label=%40devoinc%2Fgenesys-tokens)](https://www.npmjs.com/package/@devoinc/genesys-tokens)
[![npm version](https://img.shields.io/npm/v/@devoinc/genesys-tokens-cli?label=%40devoinc%2Fgenesys-tokens-cli)](https://www.npmjs.com/package/@devoinc/genesys-tokens-cli)

- **tokens:** Tokens definition and generation tools.
- **tokens-cli:** Command-line interface for the token generation tools.

The packages have the following interdependencies:

```
├─┬ @devoinc/genesys-tokens-cli
│ ├── @devoinc/genesys-tokens
├─┬ @devoinc/genesys-tokens
```

## Quick start

\* Ensure you are using `npm` version 8 or higher and `Node.js` version 18 or higher

```sh
## Clone the repository
git clone https://github.com/devoinc/genesys-tokens
## Go to folder
cd genesys-tokens
## Install dependencies
npm ci
## Generate the lib and the cli
npm run dist
```
## Tests

- `npm t` for main testing framework
- `npm run test:tokens` for test the process of tokens generation
- `npm run lint` for linter

All tests run in the main pipeline.

## Documentation

For detailed documentation please refer to the READMEs of the internal packages:

- [tokens/README.md](./tokens/README.md)
- [tokens-cli/README.md](./tokens-cli/README.md)

## Changelog

The changelog is available [here](./CHANGELOG.md).

## Contributing

Instructions on how to contribute are detailed [here](./CONTRIBUTING.md).

## Code of conduct

The code of conduct is detailed [here](CODE_OF_CONDUCT.md).

## License

Find the full license content [here](LICENSE).

## Team

The team in charge of this codebase is [DevoInc/Quvis](https://github.com/orgs/DevoInc/teams/quvis).
