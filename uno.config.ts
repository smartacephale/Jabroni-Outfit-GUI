import fs from "node:fs";
import {
	defineConfig,
	presetAttributify,
	presetWind3,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import { bakeStaticRules } from "./unocss-utils/bake-static-rules.ts";

// import { transformerPrefix } from "./unocss-utils/transformer-prefix.ts";

const staticRules = await bakeStaticRules();

const compatCss = fs.readFileSync(
	"node_modules/@unocss/reset/tailwind-compat.css",
);
const resetCss = [compatCss].join("\n");

export default defineConfig({
	presets: [
		presetWind3({
			important: true,
			preflight: true,
			// variablePrefix: "tutu-",
			// prefix: "tutu-",
			dark: {
				dark: '[data-theme="dark"]',
				light: '[data-theme="dark"]',
			},
		}),
		presetAttributify(),
	],
	transformers: [
		transformerVariantGroup(),
		// transformerPrefix("tutu-"),
		transformerDirectives(),
		transformerCompileClass({ trigger: ":uno:" }),
	],
	preflights: [
		{
			getCSS: () => resetCss,
		},
	],
	rules: [
		...staticRules,
		[
			"tutu-shadow-brutal",
			{ "box-shadow": "4px 4px 0px 0px rgba(0,0,0,1) !important" },
		],
	],
	safelist: ["right-0", "bottom-0", "fixed", "top-0", "left-0"],
});
