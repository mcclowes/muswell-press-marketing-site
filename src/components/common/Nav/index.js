import React from "react";
import styled, { css, } from "styled-components";
import { Link, } from 'react-router-dom';

import * as m from "../../style/mixins";
import * as v from "../../style/vars";
import { objMap, } from "../../../lib/util";
import routesConfig from "../../../routesConfig";

import Links from "./Links";
import Burger from "./Burger";
import Fade from "../Fade";

// --------------------------------------------------

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		return (
			
			<Wrapper>
				<Inner>
					<MobileStuff>
						<Fade visible = { this.state.open }>
							<Dark onClick = { () => this.setState({
								open: false,
							})}/>
						</Fade>
					</MobileStuff>
					
					<Links
						links = { routesConfig }
						close = { () => this.setState({
							open: false,
						})}
						{ ...this.state }
					/>

					<MobileStuff>
						<Overlay/>
						<BurgerWrapper onClick = { () => this.setState({
							open: !this.state.open,
						})}>
							<Burger
								{ ...this.state }
								padding = { m.num(v.dim.nav.margin.xs) }
								color = { v.colors.text }
							/>
						</BurgerWrapper>
					</MobileStuff>

					<Logo/>
				</Inner>
			</Wrapper>
			
		)
	}
}

// --------------------------------------------------

const Wrapper = styled.nav`
	${m.bp.sm.min`${m.shadow(1)}`}
	${m.bpEither("height", v.dim.nav.height)}
	background: ${v.colors.nav};
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;

	${m.bp.sm.min`
		.noScroll & {
			right: ${v.dim.scrollbar};
		}
	`}	
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
`;

const MobileStuff = styled.div`
	${m.bp.sm.min`display: none;`}
	${m.contained()}
`;

const Dark = styled.div`
	${m.contained()}
	position: fixed;
	background: ${m.tr(0.5)}
`;

const Overlay = styled.div`
	${m.contained()}
	${m.shadow(1)}
	background: ${v.colors.nav};
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -20px;
`;

const Logo = (props) => (
	<LogoWrapper to = "/">
		{
			true
			? <LogoText>Muswell Press</LogoText>
			: <LogoImg src = { props.src } />
		}		
	</LogoWrapper>
);

const IndexLink = (props) => <Link to = "/" { ...props } />;

// should be IndexLink
const LogoWrapper = styled(IndexLink)`
	position: absolute;
	top: 0;
	bottom: 0;
	${m.bpEither("left", v.dim.nav.margin)}
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LogoImg = styled.div`
	${m.bpEither("height", objMap(v.dim.nav.height, (key, val) => (
		m.px(m.num(val) - (2 * m.num(v.dim.nav.margin[key])))
	)))}
	background: red;
	width: 100px;
`;

const LogoText = styled.div`
	font-size: 1.5em;
	text-transform: uppercase;
	font-weight: bold;
`;