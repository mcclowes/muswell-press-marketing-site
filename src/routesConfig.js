import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import About from "./components/pages/About";
import Books from "./components/pages/Books";
import NotFound from "./components/pages/NotFound";

import * as data from "./data";

// --------------------------------------------------

export default [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
		colors: {
			bg: data.homePage.hero.fields.heroColours.fields.bg,
			logo1: data.homePage.hero.fields.heroColours.fields.logo1,
			logo2: data.homePage.hero.fields.heroColours.fields.logo2,
			nav: data.homePage.hero.fields.heroColours.fields.nav,
		},
	},
	{
		path: "/books",
		title: data.siteSettings.booksLinkText,
		component: Books,
		exact: true,
		show: true,
	},
	{
		path: "/about",
		title: data.siteSettings.aboutLinkText,
		component: About,
		exact: true,
		show: true,
	},
	...data.booksList.map(o => ({
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
