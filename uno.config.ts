import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: {
      mono: 'monospace',
    },
  },
  presets: [
    presetWind3({
      important: true,
      preflight: false,
      dark: {
        dark: '[data-theme="dark"]',
        light: '[data-theme="dark"]',
      },
    }),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass({ trigger: ':uno:' }),
  ],
  preflights: [
    {
      getCSS: () => `
        :host {
          --un-bg-opacity: 1;
          --un-text-opacity: 1;
          --un-border-opacity: 1;
          display: block;
         }
             *, ::before, ::after {
          border-width: 0;
          border-style: solid;
          border-color: #e5e7eb;
          box-sizing: border-box;
        }
      `,
    },
  ],
  rules: [
    [
      'shadow-brutal',
      { 'box-shadow': '4px 4px 0px 0px rgba(0,0,0,1) !important' },
    ],
  ],
  safelist: ['right-0', 'bottom-0', 'fixed', 'top-0', 'left-0'],
});

// https://github.com/tailwindlabs/tailwindcss/discussions/16772#discussion-8006765
// problem in color-mix and @property of tailwind4
// rules: [
//   ['bg-zinc-800', { 'background-color': '#27272a !important' }],
//   ['bg-zinc-700', { 'background-color': '#3f3f46 !important' }],
//   ['border-zinc-800', { 'border-color': '#27272a !important' }],
//   ['border-zinc-700', { 'border-color': '#3f3f46 !important' }],
//   ['text-zinc-300', { 'color': '#d4d4d8 !important' }],

//   ['bg-gray-700', { 'background-color': '#374151 !important' }],
//   ['bg-gray-600', { 'background-color': '#4b5563 !important' }],
//   ['bg-gray-500', { 'background-color': '#6b7280 !important' }],
//   ['bg-gray-200', { 'background-color': '#e5e7eb !important' }],
//   ['bg-gray-100', { 'background-color': '#f3f4f6 !important' }],
//   ['border-gray-700', { 'border-color': '#374151 !important' }],

//   ['bg-white', { 'background-color': '#ffffff !important' }],
//   ['bg-black', { 'background-color': '#000000 !important' }],
//   ['text-white', { 'color': '#ffffff !important' }],
//   ['text-black', { 'color': '#000000 !important' }],
// ],
