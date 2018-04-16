import React from "react";
import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

const blockHeights = objMap(vars.dim.nav.height, (key, val) =>
	mixins.px(
		mixins.num(val) * 0.75 - 1.5 * mixins.num(vars.dim.nav.margin[key]),
	),
);

const blockWidths = objMap(blockHeights, (key, val) =>
	mixins.px(mixins.num(val) * 0.45),
);

const Wrapper = styled.div`
	${ mixins.bpEither(
		"height",
		objMap(vars.dim.nav.height, (key, val) =>
			mixins.px(
				mixins.num(val) - 2 * mixins.num(vars.dim.nav.margin[key]),
			),
		),
	) };
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Block = styled.div`
	${ mixins.bpEither("height", blockHeights) } ${ mixins.bpEither(
	"width",
	blockWidths,
) };
`;

const Block1 = styled(Block)`
	transform: skewY(-45deg);
	background: ${ R.path([ "theme", "logo1", ]) };

	&:nth-child(3) {
		margin-left: -1px;
	}
`;

const Block2 = styled(Block)`
	transform: skewY(45deg);
	background: ${ R.path([ "theme", "logo2", ]) };
`;

const Text = styled.div`
	color: ${ R.path([ "theme", "logo1", ]) };
	font-size: 1.2em;
	text-transform: uppercase;
	font-weight: bold;
	font-family: Montserrat;
	letter-spacing: 0.4em;
	${ mixins.bpEither("padding-left", blockWidths) };
`;

export default () => (
	<Wrapper>
		<Block1 />

		<Block2 />

		<Block1 />

		<Block2 />

		<Text>Muswell Press</Text>
	</Wrapper>
);
