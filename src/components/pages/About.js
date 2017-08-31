import styled from "styled-components";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
} from "../common";
import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap } from "../../lib/util";

import { aboutPage } from "src/data";

// --------------------------------------------------

const Pic = styled.div`
	background-image: url(${aboutPage.picture && aboutPage.picture.url});
	background-size: cover;
	background-position: top center;
	width: 100%;
	padding-top: 33%;
`;

const Title = styled.h1`
	line-height: 1;
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat;
	margin-bottom: 1em;
	margin-top: 0;
`;

const About = props => (
	<Container maxWidth={800}>
		<GridCell>
			<Title>{aboutPage.title}</Title>

			<Para>{aboutPage.text}</Para>

			<PSpacing />

			<Pic />
		</GridCell>
	</Container>
);

export default About;
