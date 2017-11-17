import React from "react";
import styled from "styled-components";

import * as mixins from "src/components/style/mixins";
import * as vars from "src/components/style/vars";

import { Icon, } from "./misc";

import siteData from "src/data";

// --------------------------------------------------

const Wrapper = styled.footer`
	align-items: center;
	bottom: 0;
	display: block;
	text-align: center;
	left: 0;
	margin: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	padding: 1em 0;

	${mixins.bpEither("height", vars.dim.footer.height)};
	${mixins.bpEither("max-height", vars.dim.footer.height)};

	${({ theme: { footer, }, }) => `
		background-color: ${footer};
		${footer && footer !== vars.colors.footer
		? ""
		: `border-top: 1px solid ${mixins.tr(0.2)};`}		
	`};
`;

const Links = styled.div`
	display: flex;
	justify-content: center;
	margin: 0.5em;
	color: #eee;

	${mixins.bpEither("flex-direction", {
		xs: "column",
		other: "row",
	})};

	${mixins.bpEither("align-items", {
		xs: "center",
		other: "center",
	})};
`;

const Social = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 0.5em;
	opacity: 0.67;

	> a {
		font-size: 24px;
		line-height: 1;
		margin: 0 0.3em;
	}
`;

const FooterLink = styled.a`
	display: flex;
	margin: 0 0.5em;
	opacity: 0.67;
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
`;

const FooterText = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 0.5em;
	opacity: 0.67;

	a:hover {
		text-decoration: underline;
	}
`;

// --------------------------------------------------

const Footer = () => (
	<Wrapper>
		<Links>
			{ siteData.aboutPage.map(({ slug, title, }) => {
				return (
					<FooterLink href = { "/" + slug } key = { slug }>
						{ title }
					</FooterLink>
				);
			}) }
		</Links>

		<Social>
			{ 
				siteData.generalSettings.facebookUrl
				&& (
					<a href = { siteData.generalSettings.facebookUrl }>
						<Icon type = "facebook-square" />
					</a>
				)
			}

			{ 
				siteData.generalSettings.twitterUrl
				&& (
					<a href = { siteData.generalSettings.twitterUrl }>
						<Icon type = "twitter" />
					</a>
				)
			}

			{ 
				siteData.generalSettings.instagramUrl
				&& (
					<a href = { siteData.generalSettings.instagramUrl }>
						<Icon type = "instagram" />
					</a>
				)
			}

			{ 
				siteData.generalSettings.linkedinUrl
				&& (
					<a href = { siteData.generalSettings.linkedinUrl }>
						<Icon type = "linkedin" />
					</a>
				)
			}
		</Social>

		<FooterText>
			<a href = "/">{ siteData.generalSettings.footerText }</a>
			
			<span dangerouslySetInnerHTML = { { __html: "&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;" } }/>
			
			<a href = "https://consulting.codogo.io">Site by Codogo</a>
		</FooterText>

		<FooterText>Registered in England and Wales 06626047</FooterText>
	</Wrapper>
);

export default Footer;
