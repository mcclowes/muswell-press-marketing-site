import Press from "./Press";
import Summary from "./Summary";
import NotFound from "../NotFound";

import siteData from "src/data";

// --------------------------------------------------

const Book = ({ bookSlug, }) => {
	const book = siteData.book.find( ({ slug, }) => slug === bookSlug );

	if (book) {
		return (
			<div>
				<Summary { ...book } />

				<Press { ...book } />
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default Book;
