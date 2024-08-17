import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      tailwindcss(),
      cssInjectedByJsPlugin(),
      dts({ rollupTypes: true })
    ],
    define: {
      "process.env": {},
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    build: {
      watch: false,
      minify: true,
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, "./src/index.ts"),
        name: "jabronioutfit",
        fileName: (format) => `jabroni-outfit.${format}.js`,
      }
    }
  });
};