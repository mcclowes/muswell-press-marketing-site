import styled from "styled-components";
import { Link, } from "react-router-dom";

import { Container, GridCell, TextCell, FullWidthImg, } from "../../common";
import * as v from "../../style/vars";

import NewBooks from "./NewBooks";
import About from "./About";

// --------------------------------------------------

const books = [
	{ foo: "great book" },
	{ foo: "lovely book" },
	{ foo: "smashing book" },
];

// --------------------------------------------------

const LeftCol = styled.div`
	width: 40%;
`;

const RightCol = styled.div`
	width: 60%;
`;

const Background1 = styled.div`
	background: #ddd;
`;

const Container1 = styled(Container)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const TitleText = styled.p`
	font-family: Arvo, serif;
	font-size: 3em;
	font-style: italic;
`;

const Container2 = Container1;

const FlexCell = styled(GridCell)`
	flex: 1;
`;

const Book = props => (
	<FlexCell>
		<Link to = { `/book/${props.foo}` }>
			<FullWidthImg
				src = { v.bookUrl }	
			/>
		</Link>
	</FlexCell>
);

const Home = props => (
	<div>
		<Background1>
			<Container1>
				<LeftCol>
					<GridCell>
						<FullWidthImg
							src = { v.bookUrl }
						/>
					</GridCell>
				</LeftCol>
				<RightCol>
					<TextCell>
						<TitleText>A nice book</TitleText>
					</TextCell>
					<TextCell>
						<p>Something about the book</p>
					</TextCell>
				</RightCol>
			</Container1>
		</Background1>

		<NewBooks/>
		<About/>
	</div>
);

export default Home;