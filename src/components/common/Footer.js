import React from "react";
import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";

import { Icon } from "./misc";

import siteData from "src/data";

// --------------------------------------------------

const Wrapper = styled.footer`
	align-items: center;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	left: 0;
	margin: 0;
	overflow: hidden;
	position: absolute;
	right: 0;

	${mixins.bpEither("height", vars.dim.footer.height)};
	${mixins.bpEither("max-height", vars.dim.footer.height)};

	${({ theme: { footer } }) => `
		background-color: ${footer};
		${footer && footer !== vars.colors.footer
			? ""
			: `border-top: 1px solid ${mixins.tr(0.2)};`}		
	`};
`;

const Links = styled.div`
	display: flex;
	justify-content: space-around;

	margin: 0 1em;

	${mixins.bpEither("flex-direction", {
		xs: "column",
		other: "row",
	})};

	${mixins.bpEither("align-items", {
		xs: "flex-start",
		other: "center",
	})};

	${mixins.bpEither("align-self", {
		xs: "flex-start",
		other: "center",
	})};

	a {
		margin: 0.2em 0.5em;
	}
`;

const Social = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-around;

	a {
		font-size: 24px;
		margin: 0 0.3em;
	}
`;

const FooterText = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-around;
`;

// --------------------------------------------------

const Footer = () => (
	<Wrapper>
		<Links>
			{siteData.aboutPage.map(({ slug, title }) => {
				return (
					<a href={"/" + slug} key={slug}>
						{title}
					</a>
				);
			})}
		</Links>

		<Social>
			<a href={siteData.generalSettings.facebookUrl}>
				<Icon type="facebook-square" />
			</a>

			<a href={siteData.generalSettings.twitterUrl}>
				<Icon type="twitter" />
			</a>

			<a href={siteData.generalSettings.instagramUrl}>
				<Icon type="instagram" />
			</a>

			<a href={siteData.generalSettings.linkedinUrl}>
				<Icon type="linkedin" />
			</a>
		</Social>

		<FooterText>
			<a href="/">{siteData.generalSettings.footerText}</a>
		</FooterText>
	</Wrapper>
);

export default Footer;
