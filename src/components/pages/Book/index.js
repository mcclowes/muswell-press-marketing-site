import Main from "./Main";
import Summary from "./Summary";

// --------------------------------------------------

const Book = props =>
	<div>
		<Summary { ...props } />

		<Main />
	</div>;

export default Book;
