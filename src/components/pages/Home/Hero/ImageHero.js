import styled from "styled-components";
import { Link } from "react-router-dom";

import { Only } from "src/components/common";

import * as vars from "src/components/style/vars";
import * as mixins from "src/components/style/mixins";

import siteData from "src/data";

const HeroWrapper = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : R.path(["theme", "bg"])};
`;

const ImageWrapper = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : R.path(["theme", "bg"])};
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  object-fit: contain;

  ${mixins.bp.sm.min`
		max-height: calc(70vh - ${vars.dim.nav.height.other});
	`};
  ${mixins.bp.sm.max`
		max-height: calc(35vh - ${vars.dim.nav.height.other});
	`};
`;

const MobileImage = styled.img`
  width: 100%;
  height: auto;
`;

const LR = styled.div`
	flex: 1;
	background-image: linear-gradient(
		to ${(props) => (props.left ? "left" : "right")},
		transparent,
		${(x) => x.color || "#000"} 2em,
		${(x) => x.color || "#000"}
	);
	margin-${(props) => (props.right ? "left" : "right")}: -2em;
	position: relative;
	z-index: 1;
`;

const HeroImage = ({ image, edgesColor }) => (
  <HeroWrapper background={edgesColor}>
    <Only.xs>
      <MobileImage src={image && image.url} />
    </Only.xs>

    <Only.sm>
      <MobileImage src={image && image.url} />
    </Only.sm>

    <Only.md>
      <ImageWrapper background={edgesColor}>
        <LR left color={edgesColor} />

        <Image src={image && image.url} background={edgesColor} />

        <LR right color={edgesColor} />
      </ImageWrapper>
    </Only.md>

    <Only.lg>
      <ImageWrapper background={edgesColor}>
        <LR left color={edgesColor} />

        <Image src={image && image.url} background={edgesColor} />

        <LR right color={edgesColor} />
      </ImageWrapper>
    </Only.lg>
  </HeroWrapper>
);

const ImageHero = () => (
  <Link to={`book/${siteData.homePage.hero.heroLink.slug}`}>
    <HeroImage
      image={siteData.homePage.hero.heroImage}
      edgesColor={siteData.homePage.hero.heroImageEdgesColour}
    />
  </Link>
);

export default ImageHero;
