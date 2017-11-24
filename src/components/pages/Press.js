import styled from "styled-components";
import masonry from "masonry-layout";
import imagesloaded from "imagesloaded";
import { lifecycle, } from "recompose";

import {
	Container,
	GridCell,
	FullWidthImg,
	TextCell,
} from "src/components/common";

import * as vars from "../style/vars";
import * as mixins from "../style/mixins";

// --------------------------------------------------

const doMasonry = () => {
	setTimeout(() => {
		const masonryInstance = new masonry(".masonry-items", {
			itemSelector: ".masonry-item",
			percentPosition: true,
		});
		const imagesloadedInstance = new imagesloaded(".masonry-items", () =>
			masonryInstance.layout(),
		);
	}, 1000);
};

const enhance = lifecycle({
	componentDidMount() {
		if (this.props.press) {
			doMasonry();
		}
	},
});

const Background = styled.div`
	background: ${R.pipe(R.path(["theme", "bg",]), color =>
		mixins.darken(color, 0.1),
	)};
`;

const ContainerAtEdges = styled(Container)`
	${mixins.xs`margin: 0 -${vars.dim.gutter.tripleHalf.xs}`};
`;

const Inner = styled.div`
	${mixins.clearfix};
`;

const TitleCell = styled(TextCell)`
	flex-basis: 100%;
`;

const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2em;
	${mixins.xs`
		font-size: 1.5em;
	`} font-family: ${vars.font.title.family};
	text-transform: uppercase;
`;

const colWidths = {
	xs: "50%",
	other: "33.333333333%",
};

const ThingWrapper = styled(GridCell)`
	float: left;
	${mixins.bpEither("width", colWidths)};
`;

const MaybeLink = ({ href, ...props }) =>
	href ? <a href = { href } { ...props } /> : <div { ...props } />;

const ThingInner = styled.div`
	background: white;
`;

const ThingTitle = styled.p`
	font-family: ${vars.font.title.family};
	font-size: 1.1em;
	${mixins.xs`font-size: 1em;`}
	line-height: 1.3;
`;

const ThingText = styled.p`
	font-family: ${vars.font.title.family};
	font-size: 1.1em;
	${mixins.xs`font-size: 1em;`}
	line-height: 1.3;
`;

const ThingAuthor = styled.p`
	opacity: 0.5;
    line-height: 1;
    text-align: right;
    font-style: italic;
    font-family: ${vars.font.title.family};
`;

const ThingQuote = ThingTitle;

const randomInt = x => Math.floor(Math.random() * x) % x;

const shuffle = arr => {
	const r = [];
	const arrCopy = [...arr,];
	arr.forEach(() => {
		const randomIndex = randomInt(arrCopy.length);
		r.push(arrCopy[randomIndex]);
		arrCopy.splice(randomIndex, 1);
	});
	return r;
};

// --------------------------------------------------

const Thing = ({ title, text, author, link, image, otherText, textmd, }) => (
	<ThingWrapper className = "masonry-item">
		<MaybeLink href = { link }>
			<ThingInner>
				{image ? <FullWidthImg src = { image } /> : null}

				<GridCell>
					<TextCell>
						{title ? <ThingTitle>{title}</ThingTitle> : null}

						{textmd ? (
							<ThingText>
								<p>'{ textmd }'</p>
							</ThingText>
						) : null}

						{otherText ? <ThingQuote dangerouslySetInnerHTML = {{
							__html: otherText,
						}}/> : null}

						{author ? <ThingAuthor>{author}</ThingAuthor> : null}
					</TextCell>
				</GridCell>
			</ThingInner>
		</MaybeLink>
	</ThingWrapper>
);

// --------------------------------------------------

const Main = props =>
	props.press ? (
		<Background>
			<ContainerAtEdges>
				<TitleCell>
					<SectionTitle>Press</SectionTitle>
				</TitleCell>

				<Inner className = "masonry-items">
					{shuffle(props.press).map((x, i) => (
						<Thing { ...x } key = { i } />
					))}
				</Inner>
			</ContainerAtEdges>
		</Background>
	) : null;

export default enhance(Main);
