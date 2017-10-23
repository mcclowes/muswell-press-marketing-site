import Press from "../Press";
import Summary from "./Summary";
import NotFound from "../NotFound";

import siteData from "src/data";

// --------------------------------------------------

const Author = ({ authorSlug, }) => {
	const author = siteData.author.find(({ slug, }) => slug === authorSlug);

	if (author) {
		return (
			<div>
				<Summary { ...author } />

				<Press { ...author } />
			</div>
		);
	} else {
		return <NotFound />;
	}
};

export default Author;
