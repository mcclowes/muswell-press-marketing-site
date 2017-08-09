import React from "react";
import styled, { css, } from "styled-components";

import * as m from "../style/mixins";
import * as v from "../style/vars";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

const blockHeights = objMap(v.dim.nav.height, (key, val) => (
	m.px(m.num(val) - (1.5 * m.num(v.dim.nav.margin[key])))
));

const blockWidths = objMap(blockHeights, (key, val) => (
	m.px(m.num(val) * 0.45)
));

const Wrapper = styled.div`
	${m.bpEither("height", objMap(v.dim.nav.height, (key, val) => (
		m.px(m.num(val) - (2 * m.num(v.dim.nav.margin[key])))
	)))}
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Block = styled.div`
	${m.bpEither("height", blockHeights)}
	${m.bpEither("width", blockWidths)}
`;

const Block1 = styled(Block)`
	transform: skewY(-45deg);
	background: ${({ theme: { logo1, }}) => logo1};
`;

const Block2 = styled(Block)`
	transform: skewY(45deg);
	background: ${({ theme: { logo2, }}) => logo2};
`;

const Text = styled.div`
	color: ${({ theme: { logo1, }}) => logo1};
	font-size: 1.5em;
	text-transform: uppercase;
	font-weight: bold;
	font-family: TradeGothic;
	${m.bpEither("padding-left", blockWidths)}
`;

export default () => (
	<Wrapper>
		<Block1/>
		<Block2/>
		<Block1/>
		<Block2/>
		<Text>Muswell Press</Text>
	</Wrapper>
);
