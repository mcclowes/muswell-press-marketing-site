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
} from "../common";
import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

const dummyContent = {
	title: "The Rainbow Conspiracy",
	author: "Stuart Hopps",
	blurb: `
		It is the mid eighties and successful theatrical agent Clive Spoke embarks on a quest to find the truth about his ex-lover’s early death.
	`,
	isbn: "978-09954822-2-7",
};

const dummyBooks = R.repeat(dummyContent, 17);

// --------------------------------------------------

const colsMap = {
	xs: 3,
	sm: 4,
	md: 5,
	lg: 5,
};

const colWidths = objMap(colsMap, (k, v) => 100 / v + "%");

const OtherBookWrapper = styled(GridCell)`
	${ mixins.bpEach("width", colWidths) }
`;

const OtherBookTitle = styled.h3`
	line-height: 1.1;
	margin-bottom: 0.2em;
`;

const OtherBookCover = styled(FullWidthImg)`
	${ mixins.shadow(1) };
	transition-duration: .3s;

	&:hover {
		${ mixins.shadow(2) };
	}
`;

const OtherBook = props =>
	<OtherBookWrapper>
		<Link to = { `/book/${props.title}` }>
			<OtherBookCover src = { vars.bookUrl } />

			<OtherBookTitle>
				{ props.title }
			</OtherBookTitle>

			<div>
				{ props.author }
			</div>
		</Link>
	</OtherBookWrapper>;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Rows = ({ rows, cols, }) => {
	const rowsArr = [];
	for (let i = 0; i < rows; i++) {
		rowsArr.push(
			dummyBooks
			.slice(i * cols, (i + 1) * cols)
			.map((o, i) => <OtherBook { ...o } key = { o.title + i } />),
		);
	}

	return (
		<div>
			{ rowsArr.map((row, r) =>
				<Row key = { r }>
					{ row }
				</Row>,
			) }
		</div>
	);
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

const _Grid = props => {
	return (
		<div>
			{ 
				Object.keys(colsMap).map(bp => {
					const OnlyBp = Only[bp];

					return (
						<OnlyBp key = { bp }>
							<Rows rows = { props.rows } cols = { colsMap[bp] } />

							{ dummyBooks.length > props.rows * colsMap[bp]
								? <CenterCell>
									<Button
										onClick = { props.loadMore }
										text = "Load More"
									/>
								</CenterCell>
								: null
							}
						</OnlyBp>
					);
				})
			}
		</div>
	);
};

const Grid = enhanceGrid(_Grid);

const Books = () =>
	<Container>
		<Grid />
	</Container>;

export default Books;
