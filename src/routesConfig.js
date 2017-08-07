// import Home from "./components/pages/Home";
import { Container, } from "./components/common";
import Home from "./components/pages/Home";

const Books = props => <Container>Books</Container>;
const About = props => <Container>About</Container>;

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
];
