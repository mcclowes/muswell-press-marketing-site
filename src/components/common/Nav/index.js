import React from "react";
import styled from "styled-components";
import { Link, } from "react-router-dom";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";
import { objMap, } from "../../../lib/util";
import routesConfig from "../../../routesConfig";

import Links from "./Links";
import Burger from "./Burger";
import Fade from "../Fade";
import _Logo from "../Logo";

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
							<Dark
								onClick = { () =>
									this.setState({
										open: false,
									}) }
							/>
						</Fade>
					</MobileStuff>

					<Links
						links = { routesConfig }
						close = { () =>
							this.setState({
								open: false,
							}) }
						{ ...this.state }
					/>

					<MobileStuff>
						<Overlay { ...this.state } />

						<BurgerWrapper
							onClick = { () =>
								this.setState({
									open: !this.state.open,
								}) }
						>
							<Burger
								{ ...this.state }
								padding = { mixins.num(vars.dim.nav.margin.xs) }
								color = { vars.colors.text }
							/>
						</BurgerWrapper>
					</MobileStuff>

					<Logo />
				</Inner>
			</Wrapper>
		);
	}
}

// --------------------------------------------------

const Wrapper = styled.nav`
	${ mixins.bp.sm.min`${ mixins.shadow(0) }` } ${ mixins.bpEither(
	"height",
	vars.dim.nav.height,
) } background-color: ${ R.path([ "theme", "nav", ]) };
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 2;

	${ mixins.sm`
		padding: 0 1em;
	` };
	${ mixins.bp.md.min`
		padding: 0 3em;
	` };
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const MobileStuff = styled.div`
	${ mixins.bp.sm.min`display: none;` } ${ mixins.contained() };
`;

const Dark = styled.div`
	${ mixins.contained() } position: fixed;
	background: ${ mixins.tr(0.5) };
`;

const Overlay = styled.div`
	${ mixins.contained() } ${ ({ open, }) =>
	open ? mixins.shadow(1) : "" } transition: 0.3s all ease-out;
	background-color: ${ R.path([ "theme", "nav", ]) };
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -20px;
`;

const Logo = props => (
	<LogoWrapper to = "/">
		{
			// true
			// ? <LogoText>Muswell Press</LogoText>
			// : <LogoImg src = { props.src } />
		}

		<_Logo />
	</LogoWrapper>
);

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	// should be IndexLink
	position: absolute;
	top: 0;
	bottom: 0;
	${ mixins.bpEither("left", vars.dim.nav.margin) } display: flex;
	flex-direction: row;
	align-items: center;
`;
