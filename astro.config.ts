import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		sitemap(),
	],
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	site: "https://jackenglund.com/",
});
