import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
	Button,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const Background1 = styled.div`
	background-color: ${R.path([ "theme", "bg", ])};
`;

const coverHeights = objMap(
	vars.dim.gutter.fullNum,
	(key, value) => `
		calc(100vh - ${vars.dim.nav.height[key === "xs" ? "xs" : "other"]} - ${mixins.px(value * 2)})
	`
);

const containerHeights = objMap(
	vars.dim.nav.height,
	(key, value) => "calc(100vh - " + value + ")",
);

const Container1 = styled(Container)`
	display: flex;
	justify-content: center;
	flex-direction: row;
	${mixins.xs`align-items: center;`}
	@media (min-width: ${vars.bps.sm.min}px) and (orientation: landscape) {
		min-height: calc(100vh - ${vars.dim.nav.height.other});
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 100%;

	background-image: url(${R.prop("src")});
	background-position: top right;
	background-size: contain;
	background-repeat: no-repeat;

	${mixins.xs`
		padding-top: 150%;
		background-position: top left;
	`}
`;

const LeftCol = styled(GridCell)`
	// background-color: blue;
	max-width: 500px;
	min-width: 100px;
	flex: 1;
	display: flex;
	${mixins.bpEach("max-height", coverHeights)}
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
	`}
`;

const TitleText = styled.p`
	color: ${R.path([ "theme", "logo1", ])};
	font-family: ${vars.font.title.family};
	font-size: 2.9em;
	${mixins.xs`font-size: 1.5em;`}
	font-weight: bold;
	line-height: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const MobileText = styled(Container)`
	padding-top: 0;
	margin-top: -1em;
	${mixins.bp.sm.min`display: none;`}
`;

const DesktopText = styled.div`
	${mixins.xs`display: none;`}
`;

// --------------------------------------------------

const Text = () => (
	<TextCell> 
		<p>Aenean eu leo quam. Pellentesque <b>The Rainbow Conspiracy</b> ornare sem lacinia quam venenatis vestibulum. <b>Stuart Hopps</b> fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

		<p><Button to = "/book/lol" text = "Find out more"/></p>
	</TextCell>
);

const Hero = props =>
	<Background1>
		<Container1>
			<LeftCol>
				<Cover src = { vars.bookUrl } />
			</LeftCol>

			<RightCol>
				<TextCell>
					<TitleText> Classic.</TitleText>

					<TitleText> Cult.</TitleText>

					<TitleText> Evergreen.</TitleText>

					<TitleText> Blacklist.</TitleText>
				</TextCell>
				
				<DesktopText>
					<Text/>
				</DesktopText>
			</RightCol>			
		</Container1>
		<MobileText>
			<Text/>
		</MobileText>
	</Background1>;



export default Hero;
