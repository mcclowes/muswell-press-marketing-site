// import Home from "./components/pages/Home";
import { Container, } from "./components/common";
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
			bg: "#f8ddbb",
			logo1: "#4C9AA3",
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
			bg: "pink",
			logo1: "hotpink",
			logo2: "white",
			body: "pink",
			footer: "pink",
		}
	},
	{
		path: "/test",
		title: "Test",
		component: () => <div>tets</div>,
		show: false,
		colors: {
			body: "#abdfbd",
		},
	}
];
