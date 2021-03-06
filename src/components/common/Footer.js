import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import * as mixins from "src/utils/styles/mixins";
import * as vars from "src/utils/styles/vars";

import siteData from "src/data";

const Wrapper = styled.footer`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme: { footer } }) => `
		background-color: ${vars.colors.footer};
		color: white;	
	`} & a:hover {
    text-decoration: underline;
  }

  ${mixins.xs} {
		padding: 2em;
	};
`;

const MaybeLink = (props) =>
  props.to ? <Link {...props} /> : <span {...props} />;

const LinkStyling = `
	padding: 0 0.8em;
	margin: 0.33em 0;
  
  ${({hidden}) => hidden ? "display: none !important;" : ""}

	${mixins.bp.sm.min} {
		&:not(:last-child) {
			border-right: 1px rgba(255,255,255,0.2) solid;
		}		
	}

	${mixins.xs} {
		display: block;
		padding-left: 0;
	}
`;

const FooterLink = styled(MaybeLink)`
  ${LinkStyling};
`;

const FooterSocialLink = styled.a`
  ${LinkStyling};
`;

const Mobile = styled.div`
  ${mixins.bp.sm.min} {display: none;};
`;

const Desktop = styled.div`
  padding: 1.5em;

  ${mixins.xs} {display: none;};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:last-child {
    color: #999;
    font-size: 0.9em;
  }
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;

  ${mixins.bp.sm.max} {
		width: 100%;
		margin-bottom: 0.75em;
    flex-direction: column;
	};
`;

const BottomRow = styled.div`
  margin-top: 1em;
`;

export default () => (
  <Wrapper>
    <Desktop>
      <Row>
        {siteData.aboutPage.map(({ slug, title }) => {
          return (
            <FooterLink to={"/" + slug} key={slug}>
              {title}
            </FooterLink>
          );
        })}

        <FooterSocialLink href={siteData.generalSettings.facebookUrl}>
          Facebook
        </FooterSocialLink>

        <FooterSocialLink href={siteData.generalSettings.twitterUrl}>
          Twitter
        </FooterSocialLink>
      </Row>

      <Row>
        <FooterLink>{siteData.generalSettings.footerText}</FooterLink>

        <FooterLink>Registered in England and Wales 06626047</FooterLink>

        <FooterSocialLink href="https://consulting.codogo.io">
          Site by Codogo
        </FooterSocialLink>
      </Row>
    </Desktop>

    <Mobile>
      <Columns>
        <Column>
          {siteData.aboutPage.map(({ slug, title }) => {
            return (
              <FooterLink to={"/" + slug} key={slug}>
                {title}
              </FooterLink>
            );
          })}
        </Column>

        <Column>
          <FooterSocialLink href={siteData.generalSettings.facebookUrl}>
            Facebook
          </FooterSocialLink>

          <FooterSocialLink href={siteData.generalSettings.twitterUrl}>
            Twitter
          </FooterSocialLink>

          <FooterLink>{siteData.generalSettings.footerText}</FooterLink>

          <FooterSocialLink href="https://consulting.codogo.io">
            Site by Codogo
          </FooterSocialLink>
        </Column>
      </Columns>

      <BottomRow>
        <FooterLink>Registered in England and Wales 06626047</FooterLink>
      </BottomRow>
    </Mobile>
  </Wrapper>
);
