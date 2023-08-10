# Genesys Tokens CLI

genesys-tokens-cli or `gyt`, is a command-line interface that handles generation of style tokens from a set of schemas. `gyt` provides a CLI to the scripts available in [@devoinc/genesys-tokens](https://github.com/DevoInc/genesys-tokens/tree/master/tokens).

## Installation

### npm

You can install `gyt` via npm by running:

- using published version:
  ```bash
  npm install @devoinc/genesys-tokens-cli -g
  ```
- usin the local codebase:
  ```bash
  cd tokens-cli && npm link
  ```

## Basic Usage

Once installed, it can be used on any repository by running:

```bash
gyt
```

## Available commands

### `gyt build`

Generates a brand from a given schema.

```bash
gyt build [flags]
```

#### **Options**

- `-i`, `--input <path>` [REQUIRED] Select schema path
- `-o`, `--output <path>` [REQUIRED] Select brand's output dir
- `-s`, `--scheme <string>` [optional] Schema type (`'light'` or `'dark'`). Default value is `'light'`.
- `-m`, `--menuScheme <string>` [optional] `mainMenu` Schema type (`'light'` or `'dark'`). Default value is `'light'`.

#### **Example**

```bash
gyt build -i schemes/light -o dist/light
#=> Build a brand from the schemas localed in `schemes/light` and stores the generated files under `dist/light`.
```

### `gyt validate`

Validates generated brand. It requires the `path` to the target folder containing the brand's files.

```bash
gyt validate <path>
```

**Example**

```bash
gyt validate ./dist/
#=> Validates generated brands stored in `./dist` folder.
```

### Typescript

The type definitions for the brands generated using `@devoinc/genesys-tokens-cli` are available in [@devoinc/genesys-tokens-types](https://www.npmjs.com/package/@devoinc/genesys-tokens-types).
