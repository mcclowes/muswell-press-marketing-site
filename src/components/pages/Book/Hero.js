import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
	Button,
	PSpacing,
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

const NewText = styled.p`
	color: #888;
	font-family: Montserrat;
	font-size: 1em;
	margin: 0 0 -1em 0;
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

const Metadata = styled.p`
	border-left: 1px solid #666;
	color: #666;
	padding-left: 1em;
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
			</ContainerInner>
		</Container1>
	</Background1>;

export default Hero;
