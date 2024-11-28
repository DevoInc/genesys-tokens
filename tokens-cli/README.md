# Genesys tokens CLI

`genesys-tokens-cli`, is a command-line interface that handles generation of
style tokens from a set of schemas. `genesys-tokens-cli` provides a CLI to the
scripts available in
[@devoinc/genesys-tokens](https://github.com/DevoInc/genesys-tokens/tree/master/tokens).

## Installation

### npm

You can install `genesys-tokens-cli` via npm by running:

```bash
npm i -D @devoinc/genesys-tokens-cli
```

## Basic Usage

Once installed, it can be used on any repository by running:

```bash
npx @devoinc/genesys-tokens-cli
```

Or using `npm run-script`.

## Available commands

### `genesys-tokens-cli build`

Generates a brand from a given schema.

```bash
genesys-tokens-cli build [flags]
```

#### **Options**

- `-i`, `--input <path>` [REQUIRED] Select schema path
- `-o`, `--output <path>` [REQUIRED] Select brand's output directory
- `-s`, `--scheme <string>` [optional] Schema type (`'light'` or `'dark'`).
  Default value is `'light'`.
- `-m`, `--menuScheme <string>` [optional] `mainMenu` Schema type
  (`'light'` or `'dark'`). Default value is `'light'`.

#### **Example**

```bash
genesys-tokens-cli build -i schemes/light -o dist/light
# Build a brand from the schemes located in `schemes/light` and stores the
# generated files under `dist/light`.
```

### `genesys-tokens-cli validate`

Validates generated brand. It requires the `path` to the target folder
containing the brand's files.

```bash
genesys-tokens-cli validate <path>
```

**Example**

```bash
genesys-tokens-cli validate ./dist/
# Validates generated brands stored in `./dist` folder.
```

### Typescript

The type definitions for the brands generated using `@devoinc/genesys-tokens-cli` are available in [@devoinc/genesys-tokens-types](https://www.npmjs.com/package/@devoinc/genesys-tokens-types).
