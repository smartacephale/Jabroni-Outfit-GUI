import path from "node:path";
import { defineConfig } from "vite";

export default ({ mode }) => {
  return defineConfig({
    define: {
      "process.env": {},
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    run: {
      entry: path.resolve(__dirname, "./src/index.html")
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      }
    },
    build: {
      watch: false,
      lib: {
        minify: true,
        entry: path.resolve(__dirname, "./src/index.ts"),
        name: "jabronioutfit",
        fileName: (format) => `jabroni-outfit.${format}.js`,
      }
    },
  });
};