import path from 'node:path';
import UnoCSS from 'unocss/vite';
import Vue from 'unplugin-vue/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    Vue({
      // This tells Vue to compile .ce.vue files as Custom Elements
      // content is inlined as strings rather than extracted to a global CSS file
      customElement: true,
    }),
    UnoCSS({
      // CRITICAL: This mode tells UnoCSS to prepare CSS for Shadow DOM injection
      mode: 'shadow-dom',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`,
      formats: ['es', 'umd'], // UMD is often better for simple script tags
    },
    // Ensure Vue is bundled if you want a standalone widget (no external dependencies)
    rollupOptions: {
      external: [], // Keep empty to bundle Vue inside the widget
    },
  },
});

// import path from 'node:path';
// import vue from '@vitejs/plugin-vue';
// import UnoCSS from 'unocss/vite';
// import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

// const APP_VERSION = process.env.npm_package_version;

// export default () => {
//   return defineConfig({
//     plugins: [vue(), UnoCSS(), dts({ rollupTypes: true })],
//     define: {
//       'process.env': {},
//       __VUE_OPTIONS_API__: false,
//       __VUE_PROD_DEVTOOLS__: false,
//       __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
//     },
//     build: {
//       watch: false,
//       minify: true,
//       lib: {
//         entry: path.resolve(__dirname, './src/index.ts'),
//         name: 'jabronioutfit',
//         fileName: (format) => `jabroni-outfit.${format}.js`,
//       },
//       sourcemap: true,
//       rollupOptions: {
//       external: ['uno.css'],
//         output: {
//           sourcemapBaseUrl: `https://cdn.jsdelivr.net/npm/jabroni-outfit@${APP_VERSION}/dist/`,
//         },
//       },
//     },
//   });
// };
