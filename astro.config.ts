import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
		sitemap(),
	],
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	site: "https://jackenglund.com/",
	vite: {
		plugins: [tailwindcss()],
	},
});
