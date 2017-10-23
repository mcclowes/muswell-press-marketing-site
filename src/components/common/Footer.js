import React from "react";
import styled from "styled-components";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";

import { Icon, Container, } from "./misc";

import siteData from "src/data";

// --------------------------------------------------

const Wrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;

	${({ theme: { footer } }) => `
		background-color: ${footer};
		${footer && footer !== vars.colors.footer
			? ""
			: `border-top: 1px solid ${mixins.tr(0.2)};`}		
	`};

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const Left = styled.div`
	font-weight: bold;
	opacity: 0.67;
	font-size: 0.8em;

	a {
		display: block;
	}

	& > a {
		&:hover,
		&:active {
			text-decoration: underline;
		}
	}
`;

const Right = styled.div`
	opacity: 0.67;
	display: flex;
	flex-direction: row;
	font-size: 1.5em;

	a {
		margin-left: 0.5em;
	}

	& > a {
		&:hover,
		&:active {
			text-decoration: underline;
		}
	}
`;

const Divider = styled.span`margin: 0 0.5em;`;

// --------------------------------------------------

const Footer = () => (
	<Wrapper>
		<Container maxWidth = { 800 }>
			<Left>
				{
					siteData.aboutPage.map( page => {
						return <a href = { "/" + page.slug }>
							{ page.title }
						</a>
					})
				}

				{ siteData.generalSettings.footerText }
			</Left>

			<Right>
				<a href = { siteData.generalSettings.facebookUrl }>
					<Icon type = "facebook-square" />
				</a>

				<a href = { siteData.generalSettings.twitterUrl }>
					<Icon type = "twitter" />
				</a>
			</Right>
		</Container>
	</Wrapper>
);

export default Footer;
