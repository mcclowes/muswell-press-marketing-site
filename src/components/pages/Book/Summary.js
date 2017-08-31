import styled from "styled-components";
import { Link } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";

import Moment from "moment";

import {
	Container,
	GridCell,
	TextCell,
	Button,
	PSpacing,
	FullWidthImg,
	Para,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap } from "../../../lib/util";

// --------------------------------------------------

const Background1 = styled.div`background-color: ${R.path(["theme", "bg"])};`;

const coverHeights = objMap(
	vars.dim.gutter.fullNum,
	(key, value) => `
		calc(100vh - ${vars.dim.nav.height[
			key === "xs" ? "xs" : "other"
		]} - ${mixins.px(value * 2)})
	`,
);

const containerHeights = objMap(
	vars.dim.nav.height,
	(key, value) => "calc(100vh - " + value + ")",
);

const flexDir = {
	xs: "column",
	other: "row",
};

const Container1 = styled(Container)`
	display: flex;
	justify-content: center;
	${mixins.bpEither("flex-direction", flexDir)} @media (min-width: ${vars.bps
			.sm.min}px) and (orientation: landscape) {
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
`;

const LeftCol = styled(GridCell)`
	// background-color: blue;
	max-width: 500px;
	flex: 1;
	display: flex;
	${mixins.bpEach("max-height", coverHeights)} ${mixins.xs`display: none;`};
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
`;

const TitleText = styled.p`
	color: ${R.path(["theme", "logo1"])};
	font-family: ${vars.font.title.family};
	font-size: 2.9em;
	font-weight: bold;
	line-height: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const SubtitleText = styled.p`
	font-size: 1.4em;
	font-family: ${vars.font.title.family};
	opacity: 0.67;
`;

const NewText = styled.p`
	opacity: 0.5;
	font-family: ${vars.font.title.family};
	font-size: 1em;
	margin: 0 0 -1em 0;
`;

const Metadata = styled.p`
	border-left: 1px solid ${vars.colors.text};
	opacity: 0.67;
	padding-left: 1em;
`;

const MobileCover = styled.div`
	${mixins.bp.sm.min`
		display: none;
	`} ${mixins.xs`
		border-bottom: 1px solid ${vars.colors.lines};
		padding-bottom: ${vars.dim.gutter.full.xs};
		margin-bottom: ${vars.dim.gutter.full.xs};

		& > div {
			width: 250px;
			margin: 0 auto;
		}
	`};
`;

// --------------------------------------------------

const Summary = props => (
	<Background1>
		<Container1>
			<LeftCol>
				<Cover src={props.cover && props.cover.url} />
			</LeftCol>

			<MobileCover>
				<GridCell>
					<FullWidthImg src={props.cover && props.cover.url} />
				</GridCell>
			</MobileCover>

			<RightCol>
				<TextCell>
					<NewText>New</NewText>

					<TitleText>{props.title}</TitleText>

					<SubtitleText>{props.author}</SubtitleText>
				</TextCell>

				<TextCell>
					<Para>{props.blurb}</Para>
				</TextCell>

				<TextCell>
					<Metadata>
						<div>Published { Moment(props.releaseDate).format('Do MMMM YYYY') }</div>

						{(props.details || [])
						.map((s, i) => <div key={i}>{s}</div>)}
					</Metadata>
				</TextCell>

				<TextCell>
					<PSpacing />

					<Button
						href={props.amazonLink}
						text="Buy Now"
						icon="shopping_cart"
					/>
				</TextCell>
			</RightCol>
		</Container1>
	</Background1>
);

export default Summary;
