import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig(
  // Files that should never be linted
  globalIgnores(['dist/**', '.astro/**', 'node_modules/**']),
  // TypeScript-aware linting (also powers the parser for .astro frontmatter)
  tseslint.configs.recommended,
  // Astro-flavored rules for .astro files
  eslintPluginAstro.configs.recommended,
  {
    // The standard Astro env reference uses triple-slash by design.
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  // Language options shared with the project tsconfig
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);
