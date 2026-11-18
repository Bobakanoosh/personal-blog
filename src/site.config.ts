import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as a meta property in src/components/BaseHead.astro
	author: "Jack Englund",
	description:
		"Product engineer embracing agentic development. Portfolio of products I've built in gaming and fintech, including Allocate, stats.cc, Overlayed, and u.gg.",
	lang: "en-US",
	ogLocale: "en_US",
	title: "Jack Englund",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/#work",
		title: "Work",
	},
	{
		path: "/#technologies",
		title: "Technologies",
	},
];
