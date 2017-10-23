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

import siteData from "src/data";

// --------------------------------------------------

const CenterCell = styled(TextCell)`
	text-align: center;
	${mixins.xs`text-align: left;`};
`;

const BigText = styled.p`font-size: 1.5em;`;

const NotAsBigText = styled.p`${mixins.bp.sm.min`font-size: 1.2em;`};`;

const About = () => (
	<Container maxWidth={800}>
		<CenterCell>
			<BigText>{siteData.homePage.aboutText1}</BigText>

			<NotAsBigText>{siteData.homePage.aboutText2}</NotAsBigText>

			<PSpacing />

			<Button
				to="/about"
				text={siteData.homePage.aboutLink}
				icon="users"
			/>

			<PSpacing />
		</CenterCell>
	</Container>
);

export default About;
