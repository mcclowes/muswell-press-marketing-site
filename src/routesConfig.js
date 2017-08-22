import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import About from "./components/pages/About";
import Books from "./components/pages/Books";
import Data from "./components/pages/Data";
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
		// colors: {
		// 	bg: "#EFD8B5",
		// 	/*logo1: "#588D92",*/
		// 	logo1: "#362c5a",
		// 	logo2: "#FFFDF1",
		// 	nav: "#EFD8B5",
		// },
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
	{
		path: "/data",
		title: "Data",
		component: Data(data),
		show: true,
	},
	...(
		data.booksList
		.map(o => ({
			path: "/book/" + o.slug,
			component: Book,
			colors: o.colors,
			data: {
				bookSlug: o.slug,
			},
		}))
	),
	{
		component: NotFound,
	},
];
