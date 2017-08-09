import React from "react";
import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";

import * as m from "../../style/mixins";
import * as v from "../../style/vars";

// --------------------------------------------------

export default props =>
	<Wrapper open = { props.open }>
		<div>
			{props.links.filter(route => route.show).map((route, i) =>
				<Button
					key = { route.title }
					to = { route.link || route.path }
					activeClassName = "active"
					onClick = { props.close }
				>
					{route.title}
				</Button>,
			)}
		</div>
	</Wrapper>;

// --------------------------------------------------

const wrapperStyle = [
	css`
		transform: translateY(${p => (p.open ? 0 : -110)}%);
		transition: 0.3s all ease-out;
		${m.shadow(2)}
		position: absolute;
		left: 0;
		right: 0;
		top: ${v.dim.nav.height.xs};
		background: ${props =>
		props && props.colors && props.colors.bg
			? props.colors.bg
			: v.colors.nav};
	`,

	`
		position: absolute;
		right: ${v.dim.nav.margin.other};
		top: 0;
		bottom: 0;
		display: flex;
	`,
];

const Wrapper = styled.div`
	${m.xs`${wrapperStyle[0]}`} ${m.bp.sm.min`${wrapperStyle[1]}`};
`;

const buttonStyle = [
	`
		display: block;
		padding: ${v.dim.nav.margin.xs};
		border-bottom: 1px solid ${m.tr(0.1)};

		&.active {
			font-weight: bold;
		}
	`,

	`
		line-height: ${v.dim.nav.height.other};
		padding: 0 ${v.dim.nav.margin.other};

		&:hover {
			text-decoration: underline;
		}

		
		&.active {
			font-weight: bold;
		}	
	`,
];

// should be Link
const Button = styled(NavLink)`
	${m.xs`${buttonStyle[0]}`}
	${m.bp.sm.min`${buttonStyle[1]}`}
`;
