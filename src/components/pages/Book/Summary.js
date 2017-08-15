import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
	Button,
	PSpacing,
	FullWidthImg,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const Background1 = styled.div`
	${ props =>
		props.colors && props.colors.bg
		? `background-color: ${ props.colors.bg };`
		: ""
	};
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

const flexDir = {
	xs: "column",
	other: "row",
}

const Container1 = styled(Container)`
	display: flex;
	justify-content: center;
	${mixins.bpEither("flex-direction", flexDir)}
`;

const Cover = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${R.prop("src")});
	background-position: top right;
	background-size: contain;
	background-repeat: no-repeat;
`;

const LeftCol = styled(GridCell)`
	// background-color: blue;
	max-width: 500px;
	flex: 1;
	display: flex;
	${mixins.bpEach("max-height", coverHeights)}
	${mixins.xs`display: none;`}
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
	color: ${ props => props.colors.logo1 };
	font-family: Montserrat;
	font-size: 2.9em;
	font-weight: bold;
	line-height: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const SubtitleText = styled.p`
	font-size: 1.4em;
	font-family: Montserrat;
	opacity: 0.67;
`;

const NewText = styled.p`
	color: #888;
	font-family: Montserrat;
	font-size: 1em;
	margin: 0 0 -1em 0;
`;

const Metadata = styled.p`
	border-left: 1px solid #666;
	color: #666;
	padding-left: 1em;
`;

const MobileCover = styled.div`
	${ mixins.bp.sm.min`
		display: none;
	` }
	${ mixins.xs`
		border-bottom: 1px solid ${ vars.colors.lines };
		padding-bottom: ${ vars.dim.gutter.full.xs };
		margin-bottom: ${ vars.dim.gutter.full.xs };

		& > div {
			width: 250px;
			margin: 0 auto;
		}
	` };
`;



// --------------------------------------------------

const Summary = props => (console.log("coverHeights", coverHeights),
	<Background1>
		<Container1>
			<LeftCol>
				<Cover src = { vars.bookUrl } />
			</LeftCol>
			<MobileCover>
				<GridCell>
					<FullWidthImg src = { vars.bookUrl } />
				</GridCell>
			</MobileCover>
			<RightCol>
				<TextCell>
					<NewText>New</NewText>

					<TitleText
						colors = { props.colors }
					>
						The Rainbow Conspiracy
					</TitleText>

					<SubtitleText>Stuart Hopps</SubtitleText>
				</TextCell>
				
				<TextCell> 
					<p>It is the mid eighties and successful theatrical agent Clive Spoke embarks on a quest to find the truth about his ex-lover’s early death. Travelling to the US he uncovers a devastating and destructive conspiracy aimed at the burgeoning gay community. Could the government really be involved?</p>

					<p>Stuart Hopps is an eminent award-winning choreographer who has worked on major feature films with directors such as Kenneth Branagh, Derek Jarman and Ang Lee. He has also produced work for the Royal Opera House and the Welsh National Opera.</p>
				</TextCell>

				<TextCell>
					<Metadata>
						Paperback<br/>
						160 PP<br/>
						Published 06/11/2017<br/>
						978-09954822-2-7<br/>
					</Metadata>
				</TextCell>

				<TextCell>
					<PSpacing/>

					<Button
						href = "https://amazon.co.uk"
						color = { props.colors.logo1 }
						text = "Buy Now"
						icon = "shopping_cart"
					/>
				</TextCell>
			</RightCol>
		</Container1>
	</Background1>
);

export default Summary;
