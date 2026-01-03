import path from 'node:path';
import tailwindcss from '@tailwindcss/postcss';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

const APP_VERSION = process.env.npm_package_version;

export default () => {
  return defineConfig({
    plugins: [
      vue(),
      tailwindcss(),
      cssInjectedByJsPlugin(),
      dts({ rollupTypes: true }),
    ],
    define: {
      'process.env': {},
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
    build: {
      watch: false,
      minify: true,
      lib: {
        entry: path.resolve(__dirname, './src/index.ts'),
        name: 'jabronioutfit',
        fileName: (format) => `jabroni-outfit.${format}.js`,
      },
      sourcemap: true,
      rollupOptions: {
        output: {
          sourcemapBaseUrl: `https://cdn.jsdelivr.net/npm/jabroni-outfit@${APP_VERSION}/dist/`,
        },
      },
    },
  });
};
