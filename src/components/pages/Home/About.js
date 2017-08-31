import styled from "styled-components";
import { Link } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";

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
import { objMap } from "../../../lib/util";

import { homePage } from "src/data";

// --------------------------------------------------

const spiel2 = `
	Sarah and Kate Beal acquired Muswell in 2016. With over 50 years publishing experience between them, at Bloomsbury, Faber, Walker Books, HarperCollins and Ottakar’s Bookshops amongst others, they bring a fresh approach and a wealth of knowledge and enthusiasm to the company.
`;

const spiel1 = `
	Muswell Press is a proudly independent publisher of great books, both fiction and non-fiction.
`;

const CenterCell = styled(TextCell)`
	text-align: center;
	${mixins.xs`text-align: left;`};
`;

const BigText = styled.p`font-size: 1.5em;`;

const NotAsBigText = styled.p`${mixins.bp.sm.min`font-size: 1.2em;`};`;

const About = () => (
	<Container maxWidth={800}>
		<CenterCell>
			<BigText>{homePage.aboutText1}</BigText>

			<NotAsBigText>{homePage.aboutText2}</NotAsBigText>

			<PSpacing />

			<Button to="/about" text={homePage.aboutLink} icon="users" />

			<PSpacing />
		</CenterCell>
	</Container>
);

export default About;
