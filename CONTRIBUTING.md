# Contributing

Please ensure you have read the [Code of Conduct](./CODE_OF_CONDUCT.md) before making any contribution.

## How to contribute

Contributions are made by opening pull requests from a forked copy of the repo. See detailed instructions below.

- Create a fork from the project on [Github](https://github.com/devoinc/genesys-tokens).
- Clone the fork on your local machine.
- Add the original repository as remote `upstream`.
- Create a new `feat/` branch from `master`.
- Commit messages should follow the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
- Write or update tests if needed. `npm run stryker` can help you reach a better test coverage ([stryker-mutator](https://stryker-mutator.io/)).
- Write or update documentation if needed.
- Make sure `npm run test` and `npm run lint` pass.
- Push your branch to your fork (`origin`).
- Open a pull request from your fork targeting the project's `master` branch.
- Wait for the pull request to be approved and merged and pull the changes from the `upstream` remote.
