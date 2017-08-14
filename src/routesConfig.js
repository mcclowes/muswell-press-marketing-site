import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import About from "./components/pages/About";
import Books from "./components/pages/Books";

// --------------------------------------------------

export default [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
		colors: {
			bg: "#EFD8B5",
			/*logo1: "#588D92",*/
			logo1: "#362c5a",
			logo2: "#FFFDF1",
		},
	},
	{
		path: "/books",
		title: "Books",
		component: Books,
		exact: true,
		show: true,
	},
	{
		path: "/about",
		title: "About",
		component: About,
		exact: true,
		show: true,
	},
	{
		path: "/book/:bookId",
		title: "Book",
		component: Book,
		colors: {
			bg: "#EFD8B5",
			logo1: "#362c5a",
			logo2: "#FFFDF1",
			body: "#EFD8B5",
			footer: "#EFD8B5",
		},
	},
	{
		path: "/test",
		title: "Test",
		component: () => <div>test</div>,
		show: false,
		colors: {
			body: "#abdfbd",
		},
	},
];
