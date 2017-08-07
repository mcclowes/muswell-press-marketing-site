import React from "react";
import styled from "styled-components";

import * as m from "../style/mixins";
import * as v from "../style/vars";

// --------------------------------------------------

export default (props) => <Footer/>

// --------------------------------------------------

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	${m.bpEither("height", v.dim.footer.height)}
	overflow: hidden;
	background-color: white;
	border-top: 1px solid ${m.tr(0.2)}
`;