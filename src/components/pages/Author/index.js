import Press from "../Press";
import Summary from "./Summary";
import NotFound from "../NotFound";

import siteData from "src/data";

import Head from "src/components/common/Head";

// --------------------------------------------------

const Author = ({ authorSlug, }) => {
	const author = siteData.author.find(({ slug, }) => slug === authorSlug);

	if (author) {
		return (
			<div>
				<Head
					pageTitle = { author.name }
					pageDescription = { author.biography }
					pageImage = { author.image }
				/>

				<Summary { ...author } />

				<Press { ...author } />
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default Author;
