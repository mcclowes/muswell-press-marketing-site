import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
	Only,
} from "../common";
import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

export default () => (
	<Container>
		<GridCell>
			<h1>404 Page Not Found</h1>
		</GridCell>
	</Container>
);
