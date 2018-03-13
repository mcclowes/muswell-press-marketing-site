import styled from "styled-components";
import { Link, } from "react-router-dom";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

import siteData from "src/data";

// --------------------------------------------------

const Background1 = styled.div`
	background-color: ${ R.path([ "theme", "bg", ]) };
`;

const coverHeights = objMap(
	vars.dim.gutter.fullNum,
	(key, value) => `
		calc(70vh - ${ vars.dim.nav.height[
		key === "xs" ? "xs" : "other"
	] } - ${ mixins.px(value * 2) })
	`,
);

const flexDir = {
	xs: "column",
	other: "row",
};

const Container1 = styled(Container)`
	display: flex;
	justify-content: center;
	${ mixins.bpEither("flex-direction", flexDir) } @media (min-width: ${ vars.bps
	.sm.min }px) and (orientation: landscape) {
		min-height: calc(70vh - ${ vars.dim.nav.height.other });
	}
`;

const Cover = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${ R.prop("src") });
	background-position: center right;
	background-size: contain;
	background-repeat: no-repeat;
`;

const LeftCol = styled(GridCell)`
	// background-color: blue;
	max-width: 500px;
	flex: 1;
	display: flex;
	${ mixins.bpEach("max-height", coverHeights) } ${ mixins.xs`display: none;` };
`;

const RightCol = styled(GridCell)`
	// background-color: red;
	max-width: 500px;
	flex: 1;
	margin-left: 1em;
	${ mixins.xs`
		margin: 0;
		padding-left: 0;
		padding-right: 0;
	` };
`;

const TitleText = styled.p`
	color: ${ R.path([ "theme", "logo1", ]) };
	font-family: ${ vars.font.title.family };
	font-size: 2.9em;
	font-weight: bold;
	line-height: 1.1em;
	text-transform: uppercase;
	letter-spacing: 0.1em;
`;

const SubtitleText = styled.p`
	font-size: 1.4em;
	font-family: ${ vars.font.title.family };
	opacity: 0.67;
`;

const BookLink = styled.a`
	font-weight: bold;
	display: block;

	&:hover {
		text-decoration: underline;
	}
`;

const MobileCover = styled.div`
	${ mixins.bp.sm.min`
		display: none;
	` } ${ mixins.xs`
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

const Summary = props => (
	<Background1>
		<Container1>
			<LeftCol>
				<Cover
					src = {
						props.image &&
						`http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ props
							.image.url }`
					}
				/>
			</LeftCol>

			<MobileCover>
				<GridCell>
					<FullWidthImg
						src = {
							props.image &&
							`http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ props
								.image.url }`
						}
					/>
				</GridCell>
			</MobileCover>

			<RightCol>
				<TextCell>
					<TitleText>{props.name}</TitleText>
				</TextCell>

				{props.html && (
					<TextCell>
						<div
							dangerouslySetInnerHTML = { {
								__html: props.html,
							} }
						/>
					</TextCell>
				)}

				<TextCell>
					<SubtitleText>Books</SubtitleText>

					{siteData.book
						.filter(({ author, }) =>
							author.some(({ slug, }) => props.slug === slug),
						)
						.map(book => (
							<BookLink>
								<Link to = { "/book/" + book.slug }>
									{book.title}
								</Link>
							</BookLink>
						))}
				</TextCell>
			</RightCol>
		</Container1>
	</Background1>
);

export default Summary;
