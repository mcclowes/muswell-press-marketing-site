import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";

export default (props) => (
  <Wrapper open={props.open}>
    <div>
      {props.links
        .filter((route) => route.show)
        .map((route, i) => (
          <Button
            key={route.title}
            to={route.link || route.path}
            activeClassName="active"
            onClick={props.close}
          >
            {route.title}
          </Button>
        ))}
    </div>
  </Wrapper>
);

const wrapperStyle = [
  css`
    transform: translateY(${(props) => (props.open ? 0 : -110)}%);
    transition: 0.3s all ease-out;
    ${mixins.shadow(2)} position: absolute;
    left: 0;
    right: 0;
    top: ${vars.dim.nav.height.xs};
    background: ${({ theme: { bg } }) => bg || vars.colors.nav};
    align-items: center;
  `,

  `
		position: absolute;
		right: ${0};
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
	`,
];

const Wrapper = styled.div`
  ${mixins.xs`${wrapperStyle[0]}`} ${mixins.bp.sm.min`${wrapperStyle[1]}`};
`;

const buttonStyle = [
  `
		display: block;
		padding: ${vars.dim.nav.margin.xs};
		border-bottom: 1px solid ${mixins.tr(0.1)};
	`,

  `
		line-height: ${vars.dim.nav.height.other};
		padding: 0 ${vars.dim.nav.margin.other};
		letter-spacing: 0.1em;

		&:hover {
			text-decoration: underline;
		}
	`,
];

// should be Link
const Button = styled(NavLink)`
  color: ${R.path(["theme", "logo1"])};
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 1.1em;

  &.active {
    font-weight: bold;
    opacity: 0.7;
  }

  ${mixins.xs`${buttonStyle[0]}`} ${mixins.bp.sm.min`${buttonStyle[1]}`};
`;
