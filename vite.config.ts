import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import { cjsInterop } from 'vite-plugin-cjs-interop';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    // Add CJS interop plugin for Fluent UI packages, as they are CommonJS modules
    cjsInterop({
      dependencies: ['@fluentui/react-components'],
    }),
  ],
}));
