import * as vars from "src/utils/styles/vars";
import * as mixins from "src/utils/styles/mixins";
import { lifecycle } from "recompose";
import { MaybeLink } from "../common/Primitives";
import {
  Container,
  GridCell,
  FullWidthImg,
  TextCell,
} from "src/components/common";

import imagesloaded from "imagesloaded";
import masonry from "masonry-layout";
import styled from "styled-components";

const doMasonry = () => {
  setTimeout(() => {
    const masonryInstance = new masonry(".masonry-items", {
      itemSelector: ".masonry-item",
      percentPosition: true,
    });
    const imagesloadedInstance = new imagesloaded(".masonry-items", () =>
      masonryInstance.layout()
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
  background: ${R.pipe(R.path(["theme", "bg"]), (color) =>
    mixins.darken(color, 0.1)
  )};
`;

const ContainerAtEdges = styled(Container)`
  ${mixins.xs} {margin: 0 -${vars.dim.gutter.tripleHalf.xs}};
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
  font-family: ${vars.font.title.family};
  text-transform: uppercase;

  ${mixins.xs} {
    font-size: 1.5em;
  } 
`;

const colWidths = {
  xs: "50%",
  other: "33.333333333%",
};

const PressItemWrapper = styled(GridCell)`
  float: left;

  ${mixins.bpEither("width", colWidths)};
`;

const PressItemInner = styled.div`
  background: white;
`;

const PressItemTitle = styled.p`
  font-family: ${vars.font.title.family};
  font-size: 1.1em;
  line-height: 1.3;

  ${mixins.xs} {font-size: 1em;} 
`;

const PressItemAuthor = styled.p`
  opacity: 0.5;
  line-height: 1;
  text-align: right;
  font-style: italic;
  font-family: ${vars.font.title.family};
`;

const PressItemQuote = styled(PressItemTitle)`
  position: relative;
  quotes: "“";

  &:after {
    position: absolute;
    content: open-quote;
    color: rgba(0, 0, 0, 0.1);
    left: -0.05em;
    top: -0.3em;
    font-size: 17em;
  }
`;

const randomInt = (x) => Math.floor(Math.random() * x) % x;

const shuffle = (arr) => {
  const r = [];
  const arrCopy = [...arr];
  arr.forEach(() => {
    const randomIndex = randomInt(arrCopy.length);
    r.push(arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  });
  return r;
};

const PressItem = ({
  slug,
  title,
  content,
  text,
  author,
  link,
  image,
  textmd,
}) => (
  <PressItemWrapper className="masonry-item">
    <MaybeLink href={link || `/press/${slug}`}>
      <PressItemInner>
        {image ? <FullWidthImg src={image.url} /> : null}

        <GridCell>
          <TextCell>
            {title && !text ? <PressItemTitle>{title}</PressItemTitle> : null}

            {
              //quote
              text ? (
                <PressItemQuote
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              ) : null
            }

            {author ? <PressItemAuthor>{author}</PressItemAuthor> : null}
          </TextCell>
        </GridCell>
      </PressItemInner>
    </MaybeLink>
  </PressItemWrapper>
);

const Main = (props) =>
  props.press ? (
    <Background>
      <ContainerAtEdges>
        <TitleCell>
          <SectionTitle>Press</SectionTitle>
        </TitleCell>

        <Inner className="masonry-items">
          {shuffle(props.press).map((x, i) => (
            <PressItem {...x} key={i} />
          ))}
        </Inner>
      </ContainerAtEdges>
    </Background>
  ) : null;

export default enhance(Main);
