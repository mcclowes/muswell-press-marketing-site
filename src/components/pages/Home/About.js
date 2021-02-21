import styled from "styled-components";

import { Container, TextCell, Button, PSpacing } from "../../common";

import * as mixins from "../../style/mixins";

import siteData from "src/data";

import Head from "src/components/common/Head";

const CenterCell = styled(TextCell)`
  text-align: center;
  ${mixins.xs`text-align: left;`};
`;

const BigText = styled.p`
  font-size: 1.5em;
`;

const NotAsBigText = styled.p`
  ${mixins.bp.sm.min`font-size: 1.2em;`};
`;

const About = () => (
  <Container maxWidth={800}>
    <Head pageTitle="Our Collection" />

    <CenterCell>
      <BigText>{siteData.homePage.aboutText1}</BigText>

      <NotAsBigText>{siteData.homePage.aboutText2}</NotAsBigText>

      <PSpacing />

      <Button
        to="/who-we-are"
        text={siteData.homePage.aboutLink}
        icon="users"
      />

      <PSpacing />
    </CenterCell>
  </Container>
);

export default About;
