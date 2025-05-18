/**
 * @type {import('prettier').Config}
 */
export default {
  arrowParens: "avoid",
  endOfLine: "lf",
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
