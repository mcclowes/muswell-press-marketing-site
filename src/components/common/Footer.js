import React from "react";
import styled from "styled-components";

import * as m from "../style/mixins";
import * as v from "../style/vars";

// --------------------------------------------------

const Wrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	${m.bpEither("height", v.dim.footer.height)}
	overflow: hidden;
	
	${({ theme: { footer, }}) => `
		background-color: ${footer};
		${footer && footer !== v.colors.footer ? "" : `border-top: 1px solid ${m.tr(0.2)};`}		
	`};

	display: flex;
	justify-content: space-between;
	align-items: center;
	${m.bpEither("padding", v.dim.nav.margin)}
`;

const Left = styled.div`
	font-weight: bold;
	opacity: 0.67;
`;

const Right = styled.div`
	opacity: 0.67;
	
	& > a:hover,
	& > a:active {
		text-decoration: underline;
	}
`;

const Divider = styled.span`
	margin: 0 0.5em;
`;

const Footer = () => (
	<Wrapper>
		<Left>			
			© Muswell Press 2017
		</Left>
		<Right>
			<a href = "/">Submissions</a>
			<Divider>|</Divider> 
			<a href = "https://www.facebook.com/MuswellPress?fref=ts">Facebook</a>
			<Divider>|</Divider> 
			<a href = "https://twitter.com/MuswellPress">Twitter</a>
		</Right>
	</Wrapper>
)

export default Footer;