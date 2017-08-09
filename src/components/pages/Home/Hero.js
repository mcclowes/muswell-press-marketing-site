import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

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
import * as v from "../../style/vars";
import * as m from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const LeftCol = styled.div`width: 50%;`;

const RightCol = styled(GridCell)`
	flex: 1;
`;

const Background1 = styled.div`
	${props =>
		props.colors && props.colors.bg
			? `background-color: ${props.colors.bg};`
			: ""};
`;

const containerHeights = objMap(
	v.dim.nav.height,
	(k, v) => "calc(100vh - " + v + ")",
);

const Container1 = styled(Container)`
	${m.bpEither("height", containerHeights)}
`;

const ContainerInner = styled(GridCell)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
`;

const TitleText = styled.p`
	font-family: Arvo, serif;
	font-size: 3em;
	font-style: italic;
`;

const FlexCell = styled(GridCell)`
	flex: 1;
`;

const ImageCell = styled(GridCell)`
	height: 100%;
`;

const ContainedImg = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${R.prop("src")});
	background-position: center right;
	background-size: contain;
	background-repeat: no-repeat;
`;

const Cover = styled.img`
	height: 100%;
	width: auto;
`;

// --------------------------------------------------

const Hero = props =>
	<Background1 { ...props }>
		<Container1>
			<ContainerInner>
				<Cover src = { v.bookUrl } />
				<RightCol>
					<TextCell>
						<TitleText>A nice book</TitleText>
					</TextCell>
					<TextCell>
						<p>Something about the book</p>
					</TextCell>
				</RightCol>
			</ContainerInner>
		</Container1>
	</Background1>;

export default Hero;
