import {
  defineConfig,
  presetAttributify,
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
      important: '#jabroni-outfit-root', 
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
    transformerCompileClass(),
  ],
  safelist: ['right-0', 'bottom-0', 'fixed', 'top-0', 'left-0'],
});
