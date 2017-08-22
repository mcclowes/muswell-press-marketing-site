import styled from "styled-components";
import masonry from "masonry-layout";
import imagesloaded from "imagesloaded"
import { lifecycle, } from "recompose";

import {
	Container,
	GridCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
	TextCell,
} from "../../common";

import * as vars from "../../style/vars";
import * as mixins from "../../style/mixins";
import { objMap, sentenceCase, } from "../../../lib/util";

// --------------------------------------------------

const doMasonry = () => {
	setTimeout(
		() => {
			const masonryInstance = new masonry(".masonry-items", {
				itemSelector: ".masonry-item",
				percentPosition: true,
			});
			const imagesloadedInstance = new imagesloaded(".masonry-items", () => masonryInstance.layout())
		},
		1000
	);
};

const enhance = lifecycle({
	componentDidMount() {
		doMasonry();
	},
});

const Background = styled.div`
	background: ${R.pipe(
		R.path([ "theme", "bg", ]),
		color => mixins.darken(color, 0.1)
	)};
`;

const ContainerAtEdges = styled(Container)`
	${mixins.xs`margin: 0 -${vars.dim.gutter.tripleHalf.xs}`}
`;

const Inner = styled.div`
	${mixins.clearfix}
`;

const TitleCell = styled(TextCell)`
	flex-basis: 100%;
`;

const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2em;
	${mixins.xs`
		font-size: 1.5em;
	`}
	font-family: ${vars.font.title.family};
	text-transform: uppercase;
`;

const colWidths = {
	xs: "50%",
	other: "33.333333333%",
};

const ThingWrapper = styled(GridCell)`
	float: left;
	${mixins.bpEither("width", colWidths)}

`;

const MaybeLink = ({ href, ...props, }) => (
	href
		? <a href = { href } { ...props }/>
		: <div { ...props }/>
);

const ThingInner = styled.div`
	background: white;
`;

const ThingTitle = styled.p`
	font-family: ${vars.font.title.family};
	font-size: 1.2em;
	${mixins.xs`font-size: 1em;`}
	font-weight: bold;
	line-height: 1;
`;

const ThingAuthor = styled.p`
	opacity: 0.67;
	line-height: 1;
`;

const ThingQuote = ThingTitle;

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus sagittis est, sed convallis metus commodo et. Suspendisse a vehicula urna. Donec dapibus auctor elit ut malesuada. Nulla ligula nibh, faucibus at risus ut, sagittis tincidunt nulla. Ut accumsan mauris eget magna eleifend interdum. Vivamus ultricies nunc a venenatis convallis. Curabitur ut vehicula neque. Sed congue lectus eu velit viverra iaculis vel eget eros. Donec nec eros nec neque cursus rutrum sed sollicitudin nibh. Aliquam erat volutpat. Nullam gravida justo id nibh facilisis lobortis. Praesent in arcu consectetur, ultricies lorem quis, pellentesque nisi. Integer orci urna, consectetur eget massa eu, varius eleifend nibh. Suspendisse potenti.";
const loremWords = lorem.toLowerCase().replace(/,/g, "").replace(/\./g, "").split(" ");
const authorWords = [ "spoogly", "boogly", "benedict", "cumberbatch", "sausage", "mccree", "mcdickens", "charles", "spanner", ];

const randomInt = x => (Math.floor(Math.random() * x) % x);

const randomTitle = () => sentenceCase(
	R.range(0, 5 + randomInt(5))
	.map(() => loremWords[randomInt(loremWords.length)])
	.join(" ")
);

const randomAuthor = () => (
	R.range(0, 2)
	.map(() => sentenceCase(authorWords[randomInt(authorWords.length)]))
	.join(" ")
);

const randomQuote = () => sentenceCase(
	R.range(0, 15 + randomInt(5))
	.map(() => loremWords[randomInt(loremWords.length)])
	.join(" ")
);

const randomArticles = () => (
	R.range(0, 5)
	.map(() => ({
		title: randomTitle(),
		author: randomAuthor(),
		image: "https://source.unsplash.com/random/" + randomInt(100000),
		link: "https://www.google.co.uk/",
	}))
);

const randomSnippets = () => (
	R.range(0, 5)
	.map(() => ({
		quote: randomQuote(),
		author: randomAuthor(),
	}))
);

const things = R.concat(randomArticles(), randomSnippets());

const shuffle = arr => {
	const r = [];
	const arrCopy = [ ...arr, ]; 
	arr.forEach(() => {
		const randomIndex = randomInt(arrCopy.length);
		r.push(arrCopy[randomIndex]);
		arrCopy.splice(randomIndex, 1);
	});
	return r;
};

const shuffledThings = shuffle(things);

const Thing = ({ title, author, link, image, quote, }) => (
	<ThingWrapper className = "masonry-item">
		<MaybeLink href = { link }>
			<ThingInner>
				{ image ? <FullWidthImg src = { image }/> : null }
				<GridCell>
				<TextCell>
					{ title ? <ThingTitle>{ title }</ThingTitle> : null }
					{ quote ? <ThingQuote>"{ quote }"</ThingQuote> : null }
					{ author ? <ThingAuthor>{ author }</ThingAuthor> : null }
				</TextCell>
				</GridCell>			
			</ThingInner>
		</MaybeLink>
	</ThingWrapper>
);

const Main = props => (
	<Background>
		<ContainerAtEdges>
			<TitleCell>
				<SectionTitle>Press</SectionTitle>
			</TitleCell>

			<Inner className = "masonry-items">
				{
					shuffledThings.map((x, i) => <Thing { ...x } key = { i }/>)
				}
			</Inner>
		</ContainerAtEdges>
	</Background>
);

export default enhance(Main);
