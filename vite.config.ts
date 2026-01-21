import path from 'node:path';
import UnoCSS from 'unocss/vite';
import Vue from 'unplugin-vue/vite';
import { defineConfig, type UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import monkey from 'vite-plugin-monkey';

const APP_VERSION = process.env.npm_package_version;

const devConfig: UserConfig = {
  plugins: [
    Vue({
      customElement: true,
    }),
    UnoCSS({
      mode: 'shadow-dom',
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        namespace: 'npm/vite-plugin-monkey',
        match: ['*://*/*'],
        'run-at': 'document-idle',
      },
    }),
  ],
};

const buildConfig: UserConfig = {
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
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return devConfig;
  }
  return buildConfig;
});
