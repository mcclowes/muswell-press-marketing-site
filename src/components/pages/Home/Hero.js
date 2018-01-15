import styled from "styled-components";
import { Link, } from "react-router-dom";

import { Container, GridCell, TextCell, Button, Para, } from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

import siteData from "src/data";

// --------------------------------------------------

const Background = styled.div`
	background-color: ${R.path(["theme", "bg",])};
	${mixins.bp.sm.min`
		min-height: calc(70vh - ${vars.dim.nav.height.other});
	`};
	${mixins.bp.sm.max`
		min-height: calc(35vh - ${vars.dim.nav.height.other});
	`};
	${R.when(
		R.path([ "heroImage", "file", "url", ]),
		({ heroImage: { file: { url, }, }, }) => `
			background: url("http://res.cloudinary.com/codogo/image/fetch/h_1000,c_fill,g_face,f_auto/https:${url}");
			background-size: cover;
			background-position: center center;
		`,
	)}
`;

const coverHeights = objMap(
	vars.dim.gutter.fullNum,
	(key, value) => `
		calc(70vh - ${vars.dim.nav.height[
			key === "xs" ? "xs" : "other"
		]} - ${mixins.px(value * 2)})
	`,
);

const containerHeights = objMap(
	vars.dim.nav.height,
	(key, value) => "calc(100vh - " + value + ")",
);

const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
	flex-direction: row;
	${mixins.xs`align-items: center;`} @media (min-width: ${vars.bps.sm
	.min}px) and (orientation: landscape) {
		min-height: calc(70vh - ${vars.dim.nav.height.other});
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 100%;

	background-image: url(${R.prop("src")});
	background-position: center right;
	background-size: contain;
	background-repeat: no-repeat;

	${mixins.xs`
		padding-top: 100%;
		background-position: center center;
	`};
`;

const LeftCol = styled(GridCell)`
	max-width: 50vh;
	min-width: 100px;
	flex: 1;
	display: flex;
	${mixins.bpEach("max-height", coverHeights)};
`;

const RightCol = styled(GridCell)`
	// background-color: red;
	max-width: 500px;
	flex: 1;
	margin-left: 1em;
	${mixins.xs`
		margin: 0;
		padding-left: 0;
		padding-right: 0;
	`};
	${mixins.xs`display: none;`};
`;

const TitleCell = styled(TextCell)`
	padding-top: 0;
`;

const TitleText = styled.h2`
	color: ${R.path(["theme", "logo1",])};
	font-family: ${vars.font.title.family};
	font-size: 2.9em;
	${mixins.xs`font-size: 1.5em;`} font-weight: bold;
	line-height: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const MobileText = styled(Container)`
	padding-top: 0;
	${mixins.bp.sm.min`display: none;`};
`;

const HeroLink =
	"/book/" +
	siteData.homePage.hero.heroLink.title
	.toLowerCase()
	.split(" ")
	.join("-");

// --------------------------------------------------

const Header = () => (
	<TitleCell>
		<TitleText>
			<Link to = { HeroLink }>{siteData.homePage.hero.heroHeader}</Link>
		</TitleText>
	</TitleCell>
);

const Text = () => (
	<TextCell>
		<Para>{siteData.homePage.hero.heroDescription}</Para>

		<div>
			<Button to = { HeroLink } text = "Find out more" />
		</div>
	</TextCell>
);

const Hero = props => (
	R.path([ "homePage", "hero", "heroImage", "file", "url", ])
	? <Background heroImage = { siteData.homePage.hero.heroImage } />
	:
	<Background>
		<StyledContainer>
			<LeftCol>
				<Cover src = { siteData.homePage.hero && `http://res.cloudinary.com/codogo/image/fetch/h_1000,c_fill,g_face,f_auto/https:${ siteData.homePage.hero.heroLink.cover.url}` } />
			</LeftCol>

			<RightCol>
				<Header />

				<Text />
			</RightCol>
		</StyledContainer>

		<MobileText>
			<Header />

			<Text />
		</MobileText>
	</Background>
);

export default Hero;
