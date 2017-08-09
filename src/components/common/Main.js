import styled from "styled-components";

import * as m from "../style/mixins";
import * as v from "../style/vars";
import { objMap, } from "src/lib/util";

// --------------------------------------------------

const minHeights = objMap(
	v.dim.nav.height,
	(k, val) =>
		`calc(100vh - ${val})`,
);

export default styled.div`
	${m.bpEither("margin-top", v.dim.nav.height)} ${m.bpEither(
	"min-height",
	minHeights,
)} ${({ colors, }) =>
	colors && colors.body ? `background-color: ${colors.body};` : ""};
`;
