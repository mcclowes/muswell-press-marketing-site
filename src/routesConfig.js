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
	}
];
