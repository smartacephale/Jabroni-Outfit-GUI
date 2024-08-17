import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.taper-class'),
    }),
  ],
  important: '.taper-class',
}