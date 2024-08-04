import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "@eslint-plugin-node";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginNode.configs.flat.recommended,
];
