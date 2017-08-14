import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, } from "../../../lib/util";

// --------------------------------------------------

const LeftCol = styled.div`
	flex: 1;
	max-width: 400px;
	margin-right: 1.5em;
`;

const RightCol = styled(GridCell)`
	flex: 1;
	margin-left: 1.5em;
	max-width: 500px;
`;

const Background1 = styled.div`
	${ props =>
		props.colors && props.colors.bg
		? `background-color: ${ props.colors.bg };`
		: ""
	};
`;

const containerHeights = objMap(
	vars.dim.nav.height,
	(key, value) => "calc(100vh - " + value + ")",
);

const Container1 = styled(Container)`
	${ mixins.bpEither("height", containerHeights) }
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const ContainerInner = styled(GridCell)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100%;
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
	color: #666;
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
	height: auto;
	width: 100%;
	${ mixins.shadow(1) }
`;

// --------------------------------------------------

const Hero = props =>
	<Background1 { ...props }>
		<Container1>
			<ContainerInner>
				<LeftCol>
					<Cover src = { vars.bookUrl } />
				</LeftCol>

				<RightCol>
					<TextCell>
						<TitleText colors = { props.colors } > Classic.</TitleText>

						<TitleText colors = { props.colors } > Cult.</TitleText>

						<TitleText colors = { props.colors } > Evergreen.</TitleText>

						<TitleText colors = { props.colors } > Blacklist.</TitleText>
					</TextCell>
					
					<TextCell> 
						<p>Aenean eu leo quam. Pellentesque <b>The Rainbow Conspiracy</b> ornare sem lacinia quam venenatis vestibulum. <b>Stuart Hopps</b> fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

						<p><a href = { `/book/${ props.title }` }>Find out more -></a></p>
					</TextCell>
				</RightCol>
			</ContainerInner>
		</Container1>
	</Background1>;

export default Hero;
