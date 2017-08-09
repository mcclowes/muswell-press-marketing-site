import styled from "styled-components";

import { Container, GridCell, TextCell, FullWidthImg, Para, Button, PSpacing, } from "../common";
import * as v from "../style/vars";
import * as m from "../style/mixins";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

const dummyContent = {
	title: "The Rainbow Conspiracy",
	author: "Stuart Hopps",
	blurb: `
		It is the mid eighties and successful theatrical agent Clive Spoke embarks on a quest to find the truth about his ex-lover’s early death. Travelling to the US he uncovers a devastating and destructive conspiracy aimed at the burgeoning gay community. Could the government really be involved?

		Stuart Hopps is an eminent award-winning choreographer who has worked on major feature films with directors such as Kenneth Branagh, Derek Jarman and Ang Lee. He has also produced work for the Royal Opera House and the Welsh National Opera.
	`,
	isbn: "978-09954822-2-7",
};

// --------------------------------------------------

const leftColWidth = {
	xs: "0px",
	sm: "280px",
	md: "300px",
	lg: "320px",
};

const colMinHeight = objMap(leftColWidth, (k, v) => m.px(m.num(v) * (424 / 290)));

const LeftCol = styled.div`
	${m.bp.sm.min`
		${m.bpEach("width", leftColWidth)};
		position: fixed;
		float: left;
	`}
	${m.xs`
		border-bottom: 1px solid ${v.colors.lines};
		padding-bottom: ${v.dim.gutter.full.xs};
		margin-bottom: ${v.dim.gutter.full.xs};


		& > div {
			width: 200px;
			margin: 0 auto;
		}
	`}
	
`;

const RightCol = styled.div`
	${m.bp.sm.min`
		${m.bpEach("margin-left", leftColWidth)};
		${m.bpEach("min-height", colMinHeight)};
	`}
	${m.xs`
		text-align: justify;
	`}
`;

const Container1 = styled(Container)`
	${m.clearfix};
`;

const Title = styled.h2`
	margin: 0;
	line-height: 1.1;
	margin-bottom: 0.2em;
`;

const Author = styled.h3`
	margin-top: 0;
`;

const BookPage = props => (console.log(props),
	<div>
		<Container1>
			<LeftCol>
				<GridCell>
					<FullWidthImg src = { v.bookUrl }/>
				</GridCell>
			</LeftCol>
			<RightCol>
				<GridCell>
					<Title>{ dummyContent.title }</Title>
					<Author>{ dummyContent.author }</Author>
					<Para>{ dummyContent.blurb }</Para>
					<Para>{ dummyContent.blurb }</Para>
					<PSpacing/>
					<Button
						href = "https://amazon.co.uk"
						color = "#146eb4"
						text = "Buy on Amazon"
						icon = "shopping_cart"
					/>
				</GridCell>
			</RightCol>
		</Container1>
	</div>
);

export default BookPage;