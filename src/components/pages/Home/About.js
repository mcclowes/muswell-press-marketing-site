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

const spiel2 = `
	Sarah and Kate Beal acquired Muswell in 2016. With over 50 years publishing experience between them, at Bloomsbury, Faber, Walker Books, HarperCollins and Ottakar’s Bookshops amongst others, they bring a fresh approach and a wealth of knowledge and enthusiasm to the company.
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
				{ spiel1 }
			</BigText>

			<NotAsBigText>
				{ spiel2 }
			</NotAsBigText>

			<PSpacing />

			<Button to = "/about" text = "Find out more about us" />
			
			<PSpacing />
		</TextCell>
	</Container>;

export default About;
