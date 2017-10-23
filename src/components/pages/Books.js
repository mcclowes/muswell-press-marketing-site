import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import { Button, Container, GridCell, Only, } from "../common";
import * as mixins from "../style/mixins";
import { objMap, } from "../../lib/util";

import siteData from "src/data";

// --------------------------------------------------

const booksList = siteData.book;
booksList.sort(
	(x, y) => (x.releaseDate || x.createdAt) + (y.releaseDate || y.createdDate),
);

const colsMap = {
	xs: 2,
	sm: 3,
	md: 5,
	lg: 5,
};

const colWidths = objMap(colsMap, (k, v) => 100 / v + "%");

const OtherBookWrapper = styled(GridCell)`
	${mixins.bpEach("width", colWidths)};
`;

const OtherBookTitle = styled.h3`
	line-height: 1.1;
	margin-bottom: 0.2em;
`;

const OtherBookCover = styled.div`
	width: 100%;
	padding-top: 150%;
	background-image: url(${R.prop("src")});
	background-position: top right;
	background-size: cover;
	background-repeat: no-repeat;
`;

const OtherBook = props => (
	<OtherBookWrapper>
		<Link to = { `/book/${props.slug}` }>
			<OtherBookCover src = { props.cover && props.cover.url } />

			<OtherBookTitle>{props.title}</OtherBookTitle>

			{props.author ? (
				<div>
					{props.author.map(
						(x, i) => `${i > 0 ? ", " : ""}${x.name}`,
					)}
				</div>
			) : null}
		</Link>
	</OtherBookWrapper>
);

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Rows = ({ rows, cols, }) => {
	const rowsArr = [];

	for (let i = 0; i < rows; i++) {
		rowsArr.push(
			booksList
				.slice(i * cols, (i + 1) * cols)
				.map((o, i) => <OtherBook { ...o } key = { o.title + i } />),
		);
	}

	return <div>{rowsArr.map((row, r) => <Row key = { r }>{row}</Row>)}</div>;
};

const CenterCell = styled(GridCell)`
	text-align: center;
	flex: 1;
`;

const enhanceGrid = compose(
	withState("rows", "setRows", 2),
	withHandlers({
		loadMore: ({ setRows, rows, }) => () => {
			setRows(rows + 1);
		},
	}),
);

const Title = styled.h1`
	line-height: 1;
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat;
	margin-bottom: 1em;
`;

// --------------------------------------------------

const _Grid = props => {
	return (
		<div>
			{Object.keys(colsMap).map(bp => {
				const OnlyBp = Only[bp];

				return (
					<OnlyBp key = { bp }>
						<Rows rows = { props.rows } cols = { colsMap[bp] } />

						{booksList.length > props.rows * colsMap[bp] ? (
							<CenterCell>
								<Button
									onClick = { props.loadMore }
									text = "Load More"
								/>
							</CenterCell>
						) : null}
					</OnlyBp>
				);
			})}
		</div>
	);
};

const Grid = enhanceGrid(_Grid);

// --------------------------------------------------

const Books = () => (
	<Container>
		<Title>Our Collection</Title>

		<Grid />
	</Container>
);

export default Books;
