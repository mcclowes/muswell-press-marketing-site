import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
	Only,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const dummyContent = {
	title: "The Rainbow Conspiracy",
	author: "Stuart Hopps",
	blurb: `
		It is the mid eighties and successful theatrical agent Clive Spoke embarks on a quest to find the truth about his ex-lover’s early death.
	`,
	isbn: "978-09954822-2-7",
};

const dummyBooks = R.repeat(dummyContent, 3);

// --------------------------------------------------

const Background1 = styled.div`
	// background: #ddd;
`;

const Container1 = styled(Container)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const FeaturedBookWrapper = styled(GridCell)`
	${ mixins.bpEither("width", {
		xs: "100%",
		other: "33.333333%",
	})}
`;

const BookTile = styled(GridCell)`
	background: white;
	${ mixins.shadow(1) };
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const BookTileLeftCol = styled(GridCell)`
	width: 33%;
`;

const BookTileRightCol = styled(GridCell)`
	width: 67%;
`;

const BookTileTitle = styled.h2`
	line-height: 1;
	margin-top: 0;
	margin-bottom: 0.25em;
`;

const BookTileAuthor = styled.h3`
	line-height: 1;
	margin-top: 0;
`;

const FeaturedBookInner = styled(GridCell)`
	position: relative;
	${mixins.xs`
		padding-left: 0;
		padding-right: 0;
	`}
`;

const FeaturedBookCover = styled.div`
	${mixins.xs`
		width: 40%;		
		position: relative;
		z-index: 1;
	`}

	${ mixins.shadow(1) };
	&:hover {
		${ mixins.shadow(2) };
	}
`;

const FeaturedBookDetails = styled(TextCell)`
	${mixins.xs`
		width: 60%;
		position: absolute;
		top: 0em;
		right: 0;
	`}
	${mixins.bp.sm.min`
		padding: 0;
		margin-top: 3em;
	`}	
`;

const FeaturedBookDetailsInner = styled.div`
	${mixins.xs`padding-left: 1em;`}
`;

const FeaturedBookTitle = styled.h3`
	margin-bottom: 0.2em;
	line-height: 1.1;
`;

const FeaturedBookAuthor = styled.div`
	font-weight: bold;
`;

const CenterCell = styled(GridCell)`
	text-align: center;
	flex: 1;
	margin-top: 3em;
`;

const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2em;
	text-transform: uppercase;
	flex-basis: 100%;
`;

const FeaturedBook = props =>
	<FeaturedBookWrapper>
		<Link to = { `/book/${ props.title }` }>
			{
				false
				? <BookTile>
					<BookTileLeftCol>
						<FullWidthImg src = { vars.bookUrl } />
					</BookTileLeftCol>

					<BookTileRightCol>
						<BookTileTitle>
							{ props.title }
						</BookTileTitle>

						<BookTileAuthor>
							{ props.author }
						</BookTileAuthor>

						<Para>
							{ props.blurb }
						</Para>
					</BookTileRightCol>
				</BookTile>
				: <FeaturedBookInner>
					<FeaturedBookCover>
						<FullWidthImg src = { vars.bookUrl } />
					</FeaturedBookCover>

					<FeaturedBookDetails>
						<FeaturedBookDetailsInner>
							<FeaturedBookTitle>
								{ props.title }
							</FeaturedBookTitle>

							<FeaturedBookAuthor>
								{ props.author }
							</FeaturedBookAuthor>

							<Para>
								{ props.blurb }
							</Para>
						</FeaturedBookDetailsInner>
					</FeaturedBookDetails>
				</FeaturedBookInner>
			}
		</Link>
	</FeaturedBookWrapper>;

export default () =>
	<Container1 border maxWidth = { 1000 }>
		<SectionTitle>New and Noteworthy</SectionTitle>

		{ dummyBooks.map((o, i) => <FeaturedBook { ...o } key = { i } />) }

		<CenterCell>
			<Button to = "/books" text = "See our full collection" />
		</CenterCell>
	</Container1>;
