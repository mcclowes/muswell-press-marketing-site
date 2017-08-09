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
import * as v from "../../style/vars";
import * as m from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const spiel2 = `
 	We are committed to editorial excellence, high-quality production and marketing our books with flair. We are currently in the process of refreshing and reinvigorating Muswell and our first new title will appear in Autumn 2017 with a fuller list in Spring ’18.
`;

const spiel1 = `
	Muswell Press is a proudly independent publisher of great books, both fiction and non-fiction.
`;

const Bigly = styled(TextCell)`
	font-size: 1.5em;
	text-align: center;
`;

const BigText = styled.p`font-size: 1.5em;`;

const NotAsBigText = styled.p`font-size: 1.2em;`;

const About = () =>
	<Container maxWidth = { 800 }>
		<TextCell align = "center">
			<BigText>
				{spiel1}
			</BigText>
			<NotAsBigText>
				{spiel2}
			</NotAsBigText>
			<PSpacing />
			<Button to = "/about" text = "Find out more about us" />
			<PSpacing />
		</TextCell>
	</Container>;

export default About;
