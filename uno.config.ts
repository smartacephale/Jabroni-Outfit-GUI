import fs from 'node:fs';
import presetRemToPx from '@unocss/preset-rem-to-px';
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

function getCSS() {
  const compatCss = fs.readFileSync(
    'node_modules/@unocss/reset/tailwind-compat.css',
  );

  return [compatCss].join('\n');
}

export default defineConfig({
  presets: [
    presetWind3({
      important: true,
      preflight: true,
      dark: {
        dark: '[data-theme="dark"]',
        light: '[data-theme="light"]',
      },
    }),
    presetAttributify(),
    //@ts-expect-error
    presetRemToPx({ baseFontSize: 16 }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass({ trigger: ':uno:' }),
  ],
  preflights: [{ getCSS }],
  safelist: ['right-0', 'bottom-0', 'fixed', 'top-0', 'left-0'],
});
