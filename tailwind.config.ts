import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}",
	],
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		borderOpacity: false,
		fontVariantNumeric: false,
		ringOffsetColor: false,
		ringOffsetWidth: false,
		scrollSnapType: false,
		textOpacity: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".cactus-link": {
					"&:hover": {
						"@apply decoration-link decoration-2": {},
					},
					"@apply underline underline-offset-2": {},
				},
				".title": {
					"@apply text-2xl font-semibold text-accent-2": {},
				},
			});
		}),
	],
	theme: {
		extend: {
			colors: {
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
			},
			fontFamily: {
				// Add any custom fonts here
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif],
			},
			transitionProperty: {
				height: "height",
			},
		},
	},
} satisfies Config;
