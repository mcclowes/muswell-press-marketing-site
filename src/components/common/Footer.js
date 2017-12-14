import React from "react";
import styled from "styled-components";
import { Link, } from "react-router-dom";

import * as mixins from "src/components/style/mixins";
import * as vars from "src/components/style/vars";

import siteData from "src/data";

// --------------------------------------------------


const Wrapper = styled.footer`
	${mixins.bpEither("height", vars.dim.footer.height)};
	${mixins.bpEither("max-height", vars.dim.footer.height)};

	display: block;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1em 0;

	font-size: 0.9em;

	display: flex;
	flex-direction: column;
	justify-content: center;

	${({ theme: { footer, }, }) => `
		background-color: ${vars.colors.footer};
		color: white;	
	`}

	& a:hover {
		text-decoration: underline;
	}

	${mixins.xs`
		padding: 2em;
	`}
`;

const MaybeLink = props => (
	props.to
	? <Link { ...props }/>
	: <span { ...props }/>
);

const FooterLink = styled(MaybeLink)`
	padding: 0 0.8em;
	margin: 0.33em 0;
	${mixins.bp.sm.min`
		&:not(:last-child) {
			border-right: 1px rgba(255,255,255,0.2) solid;
		}		
	`}
	${mixins.xs`
		display: block;
	`}
	${props => props.hidden ? "color: transparent;" : ""}
`;

const Mobile = styled.div`
	${mixins.bp.sm.min`display: none;`}
`;

const Desktop = styled.div`
	${mixins.xs`display: none;`}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	&:last-child {
		color: #999;
		font-size: 0.9em
	}
`;

const Columns = styled.div`
	display: flex;
	flex-direction: row;
`;

const Column = styled.div`
	width: 50%;
`;

const BottomRow = styled.div`
	margin-top: 1em;
`;

export default () => (
	<Wrapper>
		<Desktop>

			<Row>
				{ siteData.aboutPage.map(({ slug, title, }) => {
					return (
						<FooterLink to = { "/" + slug } key = { slug }>
							{ title }
						</FooterLink>
					);
				}) }
				<FooterLink to = { siteData.generalSettings.facebookUrl }>			
					Facebook
				</FooterLink>
				<FooterLink to = { siteData.generalSettings.twitterUrl }>
					Twitter
				</FooterLink>
			</Row>

			<Row>
				<FooterLink>{ siteData.generalSettings.footerText }</FooterLink>
								
				<FooterLink>Registered in England and Wales 06626047</FooterLink>

				<FooterLink to = "https://consulting.codogo.io">Site by Codogo</FooterLink>

			</Row>
		</Desktop>

		<Mobile>
			<Columns>
				<Column>
					{ siteData.aboutPage.map(({ slug, title, }) => {
						return (
							<FooterLink to = { "/" + slug } key = { slug }>
								{ title }
							</FooterLink>
						);
					}) }
				</Column>

				<Column>
					<FooterLink to = { siteData.generalSettings.facebookUrl }>			
						Facebook
					</FooterLink>

					<FooterLink to = { siteData.generalSettings.twitterUrl }>
						Twitter
					</FooterLink>

					<FooterLink hidden>dfdfdf</FooterLink>

					<FooterLink>{ siteData.generalSettings.footerText }</FooterLink>
								
					<FooterLink to = "https://consulting.codogo.io">Site by Codogo</FooterLink>

				</Column>

			</Columns>

			<BottomRow>
				<FooterLink>Registered in England and Wales 06626047</FooterLink>
			</BottomRow>

		</Mobile>


	</Wrapper>

)