import styled from "styled-components";

import * as mixins from "src/utils/styles/mixins";
import * as vars from "src/utils/styles/vars";
import { objMap } from "src/utils/util";

const minHeights = objMap(
  vars.dim.nav.height,
  (k, val) => `calc(100vh - ${val})`
);

export default styled.div`
  ${mixins.bpEither("margin-top", vars.dim.nav.height)};

  background-color: ${R.path(["theme", "body"])};
`;
