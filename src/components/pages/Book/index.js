import Main from "./Main";
import Hero from "./Hero";

// --------------------------------------------------

const Book = props =>
	<div>
		<Hero { ...props } />

		<Main />
	</div>;

export default Book;
