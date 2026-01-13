import {
  defineConfig,
  presetWind4,
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
    presetWind4({
      important: true,
      preflight: true,
      dark: {
        dark: '[data-theme="dark"]',
        light: '[data-theme="dark"]',
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        :host {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: #e5e7eb;
          --un-default-text-opacity: 1;
          --un-default-bg-opacity: 1;
          --un-default-border-opacity: 1;
        }
        *, ::before, ::after {
          box-sizing: border-box;
        }
      `,
    },
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
  safelist: ['right-0', 'bottom-0', 'fixed', 'top-0', 'left-0'],
});
