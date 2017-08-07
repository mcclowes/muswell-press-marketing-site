import { Container, GridCell, TextCell, FullWidthImg, } from "../common";
import styled from "styled-components";

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

const Home = props => (
	<div>
		<Background1>
			<Container1>
				<LeftCol>
					<GridCell>
						<FullWidthImg
							src = "https://thebookworm1305.files.wordpress.com/2013/05/classic_red_book_cover.jpg"
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
	</div>
);

export default Home;