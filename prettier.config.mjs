/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // v4 keeps the theme in CSS, so the sorter needs the stylesheet rather than
  // the tailwind.config.ts that used to exist.
  tailwindStylesheet: "./src/app/globals.css",
  tailwindFunctions: ["clsx"],
};

export default config;
