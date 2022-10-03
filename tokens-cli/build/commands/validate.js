"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const genesys_tokens_1 = require("@devoinc/genesys-tokens");
exports.command = 'validate [dir]';
exports.desc = 'Validate brand dir';
const validate = async (brandPath) => {
    const jsonPath = path_1.default.resolve(brandPath, 'json', 'tokens.json.all.json');
    const { default: jsonTokens } = await Promise.resolve().then(() => __importStar(require(jsonPath)));
    const errors = (0, genesys_tokens_1.validateJson)(jsonTokens);
    if (errors.length) {
        console.error(chalk_1.default.red(`❌ Wrong tokens values in "${jsonPath}":\n${errors.join('\n')}`));
        process.exit(1);
    }
    else {
        console.log(chalk_1.default.green('✔️ Everything is ok!'));
    }
};
const builder = (yargs) => yargs.options({});
exports.builder = builder;
// gyt validate ./dist/light
const handler = async (argv) => {
    const { dir } = argv;
    await validate(dir);
    process.exit(0);
};
exports.handler = handler;
