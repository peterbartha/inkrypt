import { includeIgnoreFile } from "@eslint/compat";
import { eslintConfigFactory } from "@inkrypt/tooling/eslint-svelte";
import { fileURLToPath } from "node:url";
import svelteConfig from "./svelte.config.js";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default [...eslintConfigFactory(svelteConfig), includeIgnoreFile(gitignorePath)];
