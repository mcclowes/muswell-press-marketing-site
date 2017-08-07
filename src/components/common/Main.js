import React from "react";
import styled from "styled-components";

import * as m from "../style/mixins";
import * as v from "../style/vars";

// --------------------------------------------------

export default styled.div`
	${m.bpEither("margin-top", v.dim.nav.height)}
`;