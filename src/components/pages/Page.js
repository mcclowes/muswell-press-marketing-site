import styled from "styled-components";

import { Container, GridCell, Para, PSpacing, } from "../common";
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

// const Pic = styled.img`
// 	width: 100%;
// 	margin-bottom: 2em;
// `;

const Title = styled.h1`
	line-height: 1;
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat;
	margin-bottom: 1em;
	margin-top: 0;
`;

const Page = ({ pageSlug, }) => {
	const page = siteData.aboutPage.find(({ slug, }) => slug === pageSlug);

	return (
		<Container maxWidth = { 800 }>
			<GridCell>
				{page.title && <Title>{page.title}</Title>}

				{page.html && (
					<div
						dangerouslySetInnerHTML = { {
							__html: page.html,
						} }
					/>
				)}

				<PSpacing />

				{page.picture && <Pic src = { page.picture && `http://res.cloudinary.com/codogo/image/fetch/w_1000/https:${page.picture.url }` } />}

				{page.advisoryBoard && (
					<div>
						<Title>Advisory Board</Title>

						<div
							dangerouslySetInnerHTML = { {
								__html: page.advisoryBoard,
							} }
						/>
					</div>
				)}
			</GridCell>
		</Container>
	);
};

export default Page;
