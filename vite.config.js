import path from 'node:path';
import UnoCSS from 'unocss/vite';
import Vue from 'unplugin-vue/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const APP_VERSION = process.env.npm_package_version;

export default defineConfig({
  plugins: [
    Vue({
      customElement: true,
    }),
    UnoCSS({
      mode: 'shadow-dom',
    }),
    dts({ rollupTypes: true }),
  ],
  define: {
    'process.env': {},
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  build: {
    // watch: false,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'jabronioutfit',
      fileName: (format) => `jabroni-outfit.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        sourcemapBaseUrl: `https://cdn.jsdelivr.net/npm/jabroni-outfit@${APP_VERSION}/dist/`,
      },
    },
  },
});
