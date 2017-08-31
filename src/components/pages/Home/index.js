import NewBooks from "./NewBooks";
import About from "./About";
import Hero from "./Hero";

// --------------------------------------------------

const Home = props => (
	<div>
		<Hero {...props} />

		<NewBooks />

		<About />
	</div>
);

export default Home;
