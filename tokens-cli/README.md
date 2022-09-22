# Dali Tokens CLI

dali-tokens-cli or `dit`, is a command-line interface that handles generation of style tokens from a set of schemas. `dit` provides a CLI to the scripts available in [@devoinc/dali-tokens](https://github.com/DevoInc/dali-tokens/tree/master/tokens).

## Installation

### npm

You can install `dit` via npm by running:

- using published version:
  ```bash
  npm install @devoinc/dali-tokens-cli -g
  ```
- usin the local codebase:
  ```bash
  cd tokens-cli && npm link
  ```

## Basic Usage

Once installed, it can be used on any repository by running:

```bash
dit
```

## Available commands

### `dit build`

Generates a brand from a given schema.

```bash
dit build [flags]
```

#### **Options**

- `-i`, `--input <path>` [REQUIRED] Select schema path
- `-o`, `--output <path>` [REQUIRED] Select brand's output dir
- `-s`, `--scheme <string>` [optional] Schema type (`'light'` or `'dark'`). Default value is `'light'`.
- `-m`, `--menuScheme <string>` [optional] `mainMenu` Schema type (`'light'` or `'dark'`). Default value is `'light'`.
#### **Example**

```bash
dit build -i schemes/light -o dist/light
#=> Build a brand from the schemas localed in `schemes/light` and stores the generated files under `dist/light`.
```

### `dit validate`

Validates generated brand. It requires the `path` to the target folder containing the brand's files.

```bash
dit validate <path>
```

**Example**

```bash
dit validate ./dist/
#=> Validates generated brands stored in `./dist` folder.
```
