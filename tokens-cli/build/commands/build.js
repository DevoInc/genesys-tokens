"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const path_1 = __importDefault(require("path"));
const genesys_tokens_1 = require("@devoinc/genesys-tokens");
exports.command = 'build';
exports.desc = 'Generate brands';
const builder = (yargs) => yargs.options({
    input: {
        type: 'string',
        alias: 'i',
        desc: 'Path to schema',
        requiresArg: true,
    },
    output: {
        type: 'string',
        alias: 'o',
        desc: 'Output dir of the generated files',
        requiresArg: true,
    },
    scheme: {
        type: 'string',
        alias: 's',
        desc: 'light or dark',
        default: 'light',
    },
    menuScheme: {
        type: 'string',
        alias: 'm',
        desc: 'light or dark',
        default: 'light',
    },
});
exports.builder = builder;
// gyt build -i "schemes/light/*.json" -o dist/light/
const handler = (argv) => {
    const { scheme, menuScheme, output, input } = argv;
    (0, genesys_tokens_1.generate)({
        source: input,
        scheme: scheme,
        menuScheme: menuScheme,
        output: `${path_1.default.normalize(path_1.default.format(path_1.default.parse(output)))}/`,
    });
    process.exit(0);
};
exports.handler = handler;
