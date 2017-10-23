import styled from "styled-components";
import { Link, } from "react-router-dom";

import { Container, GridCell, TextCell, Para, Button, } from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

import siteData from "src/data";

// --------------------------------------------------

const books = [...siteData.homePage.booksBooks,];
books.sort(
	(x, y) => (x.releaseDate || x.createdAt) + (y.releaseDate || y.createdDate),
);

const extraBooksNeeded = 3 - books.length;

for (let i = 0; i < extraBooksNeeded; i++) {
	books.push({
		title: "<BOOK TITLE>",
		author: "<BOOK AUTHOR>",
		shorterBlurb: "<BOOK SHORT BLURB>",
	});
}

// --------------------------------------------------

const Container1 = styled(Container)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const FeaturedBookWrapper = styled(GridCell)`
	${mixins.bpEither("width", {
		xs: "100%",
		other: "33.333333%",
	})};
`;

const FeaturedBookInner = styled(GridCell)`
	position: relative;
	${mixins.xs`
		padding-left: 0;
		padding-right: 0;
	`};
`;

const FeaturedBookCover = styled.div`
	${mixins.xs`
		width: 40%;		
		position: relative;
		z-index: 1;
	`} ${mixins.shadow(0)};
	&:hover {
		${mixins.shadow(0)};
	}
`;

const FeaturedBookCoverImage = styled.div`
	width: 100%;
	padding-top: 150%;
	background-image: url(${R.prop("src")});
	background-position: top right;
	background-size: cover;
	background-repeat: no-repeat;
	background-color: #eee;
`;

const FeaturedBookDetails = styled(TextCell)`
	${mixins.xs`
		width: 60%;
		position: absolute;
		top: 0em;
		right: 0;
	`} ${mixins.bp.sm.min`
		padding: 0;
		margin-top: 3em;
	`};
`;

const FeaturedBookDetailsInner = styled.div`
	${mixins.xs`padding-left: 1em;`};
`;

const FeaturedBookTitle = styled.h3`
	margin-bottom: 0.2em;
	line-height: 1.1;
`;

const FeaturedBookAuthor = styled.div`
	font-weight: bold;
`;

const CenterCell = styled(GridCell)`
	flex: 1;
	text-align: center;
	margin-top: 3em;
	${mixins.xs`
		text-align: left;
		margin-top: 1em;
	`};
`;

const TitleCell = styled(TextCell)`
	flex-basis: 100%;
`;

const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2em;
	${mixins.xs`
		text-align: left;
		font-size: 1.5em;
	`} font-family: ${vars.font.title.family};
	text-transform: uppercase;
`;

// --------------------------------------------------

const FeaturedBook = props => (
	<FeaturedBookWrapper>
		<Link to = { `/book/${props.slug}` }>
			<FeaturedBookInner>
				<FeaturedBookCover>
					<FeaturedBookCoverImage
						src = { props.cover && props.cover.url }
					/>
				</FeaturedBookCover>

				<FeaturedBookDetails>
					<FeaturedBookDetailsInner>
						<FeaturedBookTitle>{props.title}</FeaturedBookTitle>

						{props.author ? (
							<FeaturedBookAuthor>
								{props.author.map(x => x.name)}
							</FeaturedBookAuthor>
						) : null}

						<Para>{props.shorterBlurb}</Para>
					</FeaturedBookDetailsInner>
				</FeaturedBookDetails>
			</FeaturedBookInner>
		</Link>
	</FeaturedBookWrapper>
);

export default () => (
	<Container1 border maxWidth = { 1000 }>
		<TitleCell>
			<SectionTitle>{siteData.homePage.booksTitle}</SectionTitle>
		</TitleCell>

		{R.pipe(R.map((o, i) => <FeaturedBook { ...o } key = { i } />))(books)}

		<CenterCell>
			<Button
				to = "/books"
				text = { siteData.homePage.booksLink }
				icon = "book"
			/>
		</CenterCell>
	</Container1>
);
