import Press from "../Press";
import Summary from "./Summary";
import NotFound from "../NotFound";

import siteData from "src/data";

import Head from "src/components/common/Head";

// --------------------------------------------------

const Book = ({ bookSlug, }) => {
	const book = siteData.book.find(({ slug, }) => slug === bookSlug);

	if (book) {
		return (
			<div>
				<Head 
					pageTitle = { book.title }
					pageDescription = { book.blurb }
					pageImage = { book.cover }
				/>
				
				<Summary { ...book } />

				<Press { ...book } />
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default Book;
