import Press from "./Press";
import Summary from "./Summary";
import NotFound from "../NotFound";

import { booksMap } from "src/data";

// --------------------------------------------------

const Book = ({ bookSlug }) => {
	const book = booksMap[bookSlug];

	if (book) {
		return (
			<div>
				<Summary {...book} />
				
				<Press {...book} />
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default Book;
