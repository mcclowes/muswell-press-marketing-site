import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import Page from "./components/pages/Page";
import Books from "./components/pages/Books";
import NotFound from "./components/pages/NotFound";

import siteData from "src/data";

// --------------------------------------------------

export default [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
		colors: {
			bg: siteData.homePage.hero.heroColours.bg,
			logo1: siteData.homePage.hero.heroColours.logo1,
			logo2: siteData.homePage.hero.heroColours.logo2,
			nav: siteData.homePage.hero.heroColours.nav,
		},
	},
	{
		path: "/books",
		title: siteData.generalSettings.booksLinkText,
		component: Books,
		exact: true,
		show: true,
	},
	...siteData.aboutPage.map(o => ({
		path: "/" + o.slug,
		title: o.title,
		component: Page,
		exact: true,
		show: o.nav,
		data: {
			pageSlug: o.slug,
		},
	})),
	...siteData.book.map(o => ({
		path: "/book/" + o.slug,
		component: Book,
		colors: o.colors,
		data: {
			bookSlug: o.slug,
		},
	})),
	{
		component: NotFound,
	},
];
