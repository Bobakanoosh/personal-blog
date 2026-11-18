import type { ImageMetadata } from "astro";

import allocateAdvisorFeed from "@/assets/portfolio/allocate-advisor-feed.webp";
import allocateDashboard from "@/assets/portfolio/allocate-dashboard.webp";
import allocateInsights from "@/assets/portfolio/allocate-insights.webp";
import allocateOpportunity from "@/assets/portfolio/allocate-opportunity.webp";
import allocatePortfolioHealth from "@/assets/portfolio/allocate-portfolio-health.webp";
import allocatePortfolio from "@/assets/portfolio/allocate-portfolio.webp";
import allocatePoster from "@/assets/portfolio/allocate-poster.webp";
import allocateSubscriptions from "@/assets/portfolio/allocate-subscriptions.webp";
import overlayedDashboard from "@/assets/portfolio/overlayed-dashboard.webp";
import overlayedReleases from "@/assets/portfolio/overlayed-releases.webp";
import overlayedRevenue from "@/assets/portfolio/overlayed-revenue.webp";
import statsccAppHome from "@/assets/portfolio/statscc-app-home.webp";
import statsccBans from "@/assets/portfolio/statscc-bans.webp";
import statsccLeaderboard from "@/assets/portfolio/statscc-leaderboard.webp";
import statsccMatch from "@/assets/portfolio/statscc-match.webp";
import statsccOverlayDamage from "@/assets/portfolio/statscc-overlay-damage.webp";
import statsccOverlayScoreboard from "@/assets/portfolio/statscc-overlay-scoreboard.webp";
import statsccProfile from "@/assets/portfolio/statscc-profile.webp";
import tabstats from "@/assets/portfolio/tabstats.webp";
import ugg from "@/assets/portfolio/ugg.webp";

export interface PortfolioImage {
	alt: string;
	src: ImageMetadata;
}

export interface PortfolioItem {
	demo?: string;
	description: string;
	/** Images shown for the item. The first is shown large, the rest as thumbnails. */
	images?: PortfolioImage[];
	name: string;
	url?: string;
	/** Video served from /public. */
	video?: {
		poster: ImageMetadata;
		src: string;
		title: string;
	};
	years?: string;
}

/** Newest first. */
export const portfolio: PortfolioItem[] = [
	{
		description:
			"Connects wealth advisors with asset managers in private markets. Advisors find vetted investment opportunities, handle subscriptions in one place, and track how their clients' portfolios perform after investing.",
		images: [
			{ alt: "Allocate client portfolio dashboard with NAV breakdown, latest cash flow, and investments table", src: allocateDashboard },
			{ alt: "Allocate fund page for Atlas Growth IV with key terms and target returns", src: allocateOpportunity },
			{ alt: "Allocate advisor feed with an agentic insight matching a fund to clients", src: allocateAdvisorFeed },
			{ alt: "Allocate subscription progress showing workflow steps and status by client", src: allocateSubscriptions },
			{ alt: "Allocate client portfolio overview with current value and performance chart", src: allocatePortfolio },
			{ alt: "Allocate portfolio health chart of total value, current value, and capital called", src: allocatePortfolioHealth },
			{ alt: "Allocate insights answering a client exposure question with a treemap", src: allocateInsights },
		],
		name: "Allocate",
		video: {
			poster: allocatePoster,
			src: "/portfolio/allocate.mp4",
			title: "Allocate product video",
		},
		years: "2023 – Present",
	},
	{
		demo: "https://statscc.jackenglund.com",
		description:
			"Rainbow Six Siege stats, on the web and in an Electron desktop overlay. The site has global leaderboards, player profiles with ranked session history, detailed match breakdowns, and ban tracking. The desktop app tracks your season stats and shows a live scoreboard and per-round damage report in-game while you play.",
		images: [
			{ alt: "stats.cc player profile with ranked sessions chart and match history", src: statsccProfile },
			{ alt: "stats.cc ranked leaderboard with rank distribution chart", src: statsccLeaderboard },
			{ alt: "stats.cc recent bans chart and bans by month table", src: statsccBans },
			{ alt: "stats.cc match summary with rank distribution and match players", src: statsccMatch },
			{ alt: "stats.cc desktop app home with season stats, KD trend, and most played operators", src: statsccAppHome },
			{ alt: "stats.cc in-game overlay scoreboard showing both teams' stats", src: statsccOverlayScoreboard },
			{ alt: "stats.cc in-game overlay damage report for a round", src: statsccOverlayDamage },
		],
		name: "stats.cc",
		url: "https://stats.cc",
	},
	{
		demo: "https://demo.overlay.dev",
		description:
			"Helps game developers build and ship in-game overlay apps. Its developer dashboard covers analytics, staged releases and rollouts, feature flags, bug reports, and monthly revenue share statements.",
		images: [
			{ alt: "Overlayed dashboard home with revenue, user, and bug report charts", src: overlayedDashboard },
			{ alt: "Overlayed releases table with channels, rollout percentages, and statuses", src: overlayedReleases },
			{ alt: "Overlayed revenue report statement for October 2026", src: overlayedRevenue },
		],
		name: "Overlayed",
	},
	{
		description:
			"Stats, builds, and tier lists for League of Legends and other competitive games, including summoner profiles, champion stats, and match history.",
		images: [{ alt: "u.gg League of Legends summoner profile with match history", src: ugg }],
		name: "u.gg",
		url: "https://u.gg",
		years: "2022 – 2023",
	},
	{
		description:
			"Tracked player stats for Rainbow Six Siege and other competitive games, with player search, leaderboards, ban tracking, and an in-game overlay.",
		images: [{ alt: "TabStats Rainbow Six Siege home page with player search and news", src: tabstats }],
		name: "TabStats",
		years: "2021 – 2023",
	},
];
