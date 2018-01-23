import styled from "styled-components";

import { Container, GridCell, PSpacing, } from "../common";
import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap, } from "../../lib/util";

import siteData from "src/data";

// --------------------------------------------------

const Pic = styled.div`
	background-image: url(${R.prop("src")});
	background-size: cover;
	background-position: top center;
	width: 100%;
	padding-top: 55%;
	margin-bottom: 4em;
`;

const Title = styled.h1`
	line-height: 1;
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat;
	margin-bottom: 1em;
	margin-top: 0;
`;

const Page = ({ pressSlug, }) => {
	const page = siteData.press.find(({ slug, }) => slug === pressSlug);

	return (
		<Container maxWidth = { 800 }>
			<GridCell>
				{ 
					page.image 
					&& <Pic src = { page.image && `http://res.cloudinary.com/codogo/image/fetch/w_1000/https:${page.image.url }` } />
				}

				<PSpacing />

				{
					page.title
					&& <Title>{ page.title }</Title>
				}

				{
					page.html 
					&& (
						<div
							dangerouslySetInnerHTML = { {
								__html: page.html,
							} }
						/>
					)
				}
			</GridCell>
		</Container>
	);
};

export default Page;
