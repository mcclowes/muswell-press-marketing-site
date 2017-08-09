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
import * as v from "../style/vars";
import * as m from "../style/mixins";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

const spiel = `
	Muswell Press is a proudly independent publisher of great books, both fiction and non-fiction. Sarah and Kate Beal acquired Muswell in 2016. With over 50 years publishing experience between them, at Bloomsbury, Faber, Walker Books, HarperCollins and Ottakar’s Bookshops amongst others, they bring a fresh approach and a wealth of knowledge and enthusiasm to the company.

	We are committed to editorial excellence, high-quality production and marketing our books with flair. We are currently in the process of refreshing and reinvigorating Muswell and our first new title will appear in Autumn 2017 with a fuller list in Spring ’18.
`;

const Pic = styled.div`
	background-image: url(https://ak3.picdn.net/shutterstock/videos/13702646/thumb/1.jpg);
	background-size: cover;
	background-position: top center;
	width: 100%;
	padding-top: 33%;
`;

const Title = styled.h1`
	line-height: 1;
	margin: 0;
`;

const About = props =>
	<Container maxWidth = { 800 }>
		<GridCell>
			<Title>Who we are</Title>
			<Para>
				{spiel}
			</Para>
			<PSpacing />
			<Pic />
		</GridCell>
	</Container>;

export default About;
