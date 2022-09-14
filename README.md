# Dali Tokens

[![npm version](https://img.shields.io/npm/v/@devoinc/dali-tokens)](https://www.npmjs.com/search?q=devoinc/dali-tokens)
![license](https://img.shields.io/github/license/devoinc/dali-tokens)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/devoinc/dali-tokens/ci)](https://github.com/devoinc/dali-tokens/actions/workflows/ci.yml)

Monorepo containing a set of packages devoted to the generation of design tokens associated to Devo's **Dali** design system.

The project is built using `npm workspaces` and contains the following packages:

- **brand-devo:** Base design system schemes (light and dark).
- **tokens:** Token's definitions and generation tools.
- **tokens-cli:** Command-line interface for the token generation tools.

The packages have the following interdependencies:

```
├─┬ @devoinc/dali-brand-devo
│ └── @devoinc/dali-tokens-cli
├─┬ @devoinc/dali-tokens-cli
│ ├── @devoinc/dali-tokens
├─┬ @devoinc/dali-tokens
```

## Quick start

\* Ensure you are using `npm` version 7 or higher.

```sh
## Clone the repository
git clone https://github.com/devoinc/dali-tokens
## Go to folder
cd dali-tokens
## Install dependencies
npm ci
## Generate tokens for Devo's brand
npm run dist
```

Once these commands are run, the generated brands are available inside [brand-devo/dist](./brand-devo/dist/).

## Documentation

For detailed documentation please refer to the READMEs of the internal packages:

- [brand-devo/README.md](./brand-devo/README.md)
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
