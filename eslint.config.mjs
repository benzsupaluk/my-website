import { defineConfig, globalIgnores } from "eslint/config";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
  coreWebVitals,
  typescript,
  // Last: switches off the stylistic rules Prettier owns.
  prettier,
]);
