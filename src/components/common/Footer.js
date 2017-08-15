import React from "react";
import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";

import { Icon, } from "./misc";

// --------------------------------------------------

const Wrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	${ mixins.bpEither("height", vars.dim.footer.height) } overflow: hidden;

	${ ({ theme: { footer, }, }) => `
		background-color: ${footer};
		${ footer && footer !== vars.colors.footer
			? ""
			: `border-top: 1px solid ${ mixins.tr(0.2) };`
		}		
	`};

	display: flex;
	justify-content: space-between;
	align-items: center;
	${ mixins.bpEither("padding", vars.dim.nav.margin) };
`;

const Left = styled.div`
	font-weight: bold;
	opacity: 0.67;
`;

const Right = styled.div`
	opacity: 0.67;
	display: flex;
	flex-direction: row;
	font-size: 1.5em;

	a {
		margin-left: 0.5em;
	}

	& > a:hover,
	& > a:active {
		text-decoration: underline;
	}
`;

const Divider = styled.span`margin: 0 0.5em;`;

const Footer = () =>
	<Wrapper>
		<Left>© Muswell Press 2017</Left>

		<Right>

			<a href = "https://www.facebook.com/MuswellPress?fref=ts"><Icon type = "facebook-square"/></a>

			<a href = "https://twitter.com/MuswellPress"><Icon type = "twitter"/></a>



		</Right>
	</Wrapper>;

export default Footer;
