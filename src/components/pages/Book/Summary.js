import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

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
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const Background1 = styled.div`
	background-color: ${R.path(["theme", "bg",])};
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
	(key, value) => "calc(70vh - " + value + ")",
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
		min-height: calc(70vh - ${vars.dim.nav.height.other});
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${R.prop("src")});
	background-position: center center;
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
	color: ${R.path(["theme", "logo1",])};
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

const CheckoutButton = styled(Button)`
	margin-right: 0.5em;
`;

// --------------------------------------------------

const Summary = props => (
	<Background1>
		<Container1>
			<LeftCol>
				<Cover src = { props.cover && props.cover.url } />
			</LeftCol>

			<MobileCover>
				<GridCell>
					<FullWidthImg src = { props.cover && props.cover.url } />
				</GridCell>
			</MobileCover>

			<RightCol>
				<TextCell>
					{
						Moment(props.releaseDate).isAfter(Moment().subtract(40, "days"),)
						&& (
							Moment(props.releaseDate).isAfter(Moment()) ?
							<NewText>Coming Soon</NewText>
							: <NewText>New</NewText>
						)
					}

					<TitleText>{props.title}</TitleText>

					{
						props.author 
						&& (
							<SubtitleText>
								{props.author.map(
									(x, i) => {
										return (
											<span>
												{ i > 0 && ", " }
												<a href = { `/author/${ x.slug }` }>{ x.name }</a>
											</span>
										)
									}
								)}
							</SubtitleText>
						)
					}
				</TextCell>

				{(props.blurb || props.releaseDate) && (
					<TextCell>
						{
							props.html &&
							<div
								dangerouslySetInnerHTML = { {
									__html: props.html,
								} }
							/>
						}

						{props.releaseDate && (
							<div>
								Published{" "}
								{Moment(props.releaseDate).format(
									"Do MMMM YYYY",
								)}
							</div>
						)}
					</TextCell>
				)}

				{props.bookEdition &&
					props.bookEdition.map(x => (
						<TextCell>
							<Metadata>
								{x.format ? <div>{x.format}</div> : null}

								{x.isbn && (
									<div>
										ISBN{" "}
										{x.isbn.length === 10
											? x.isbn.slice(0, 1) +
												"-" +
												x.isbn.slice(1, 3) +
												"-" +
												x.isbn.slice(3, 9) +
												"-" +
												x.isbn.slice(9)
											: x.isbn.slice(0, 3) +
												"-" +
												x.isbn.slice(3, 4) +
												"-" +
												x.isbn.slice(4, 7) +
												"-" +
												x.isbn.slice(7, 12) +
												"-" +
												x.isbn.slice(12)}
									</div>
								)}

								{x.price ? <div>{x.price}</div> : null}

								{x.pageCount ? (
									<div>{x.pageCount}PP</div>
								) : null}

								{x.dimensions ? (
									<div>{x.dimensions}</div>
								) : null}
							</Metadata>
						</TextCell>
					))}

				<TextCell>
					{props.bookEdition &&
						props.bookEdition.map(x => (
							<CheckoutButton
								href = { x.link || x.amazonLink }
								text = { x.format }
								icon = "shopping_cart"
							/>
						))}
				</TextCell>
			</RightCol>
		</Container1>
	</Background1>
);

export default Summary;
