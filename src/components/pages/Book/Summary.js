import styled from "styled-components";
import { Link } from "react-router-dom";

import Moment from "moment";

import {
  Container,
  GridCell,
  TextCell,
  Button,
  FullWidthImg,
} from "../../common";

import * as vars from "src/utils/styles/vars";
import * as mixins from "src/utils/styles/mixins";
import { objMap } from "src/utils/util";

const Background1 = styled.div`
  background-color: ${R.path(["theme", "bg"])};
`;

const coverHeights = objMap(
  vars.dim.gutter.fullNum,
  (key, value) => `
		calc(70vh - ${vars.dim.nav.height[key === "xs" ? "xs" : "other"]} - ${mixins.px(
    value * 2
  )})
	`
);

const flexDir = {
  xs: "column",
  other: "row",
};

const Container1 = styled(Container)`
  display: flex;
  justify-content: center;
  ${mixins.bpEither("flex-direction", flexDir)} @media (min-width: ${vars.bps.sm
    .min}px) and (orientation: landscape) {
    min-height: calc(70vh - ${vars.dim.nav.height.other});
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${R.prop("src")});
  background-position: center right;
  background-size: contain;
  background-repeat: no-repeat;
  ${mixins.bpEach("max-height", coverHeights)};
`;

const LeftCol = styled(GridCell)`
  // background-color: blue;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${mixins.xs} {display: none;};
`;

const RightCol = styled(GridCell)`
  max-width: 500px;
  flex: 1;
  margin-left: 1em;

  ${mixins.xs} {
		margin: 0;
		padding-left: 0;
		padding-right: 0;
	};
`;

const TitleText = styled.p`
  color: ${R.path(["theme", "logo1"])};
  font-family: ${vars.font.title.family};
  font-size: 2.9em;
  font-weight: bold;
  line-height: 1.1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const SubtitleText = styled.p`
  font-size: 1.4em;
  font-family: ${vars.font.title.family};
  opacity: 0.67;
`;

const Author = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NewText = styled.p`
  opacity: 0.5;
  font-family: ${vars.font.title.family};
  font-size: 1em;
  margin: 0 0 -1em 0;
`;

const Editions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const EditionCell = styled(GridCell)`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Metadata = styled.p`
  opacity: 0.67;
  font-size: 0.85em;
`;

const MobileCover = styled.div`
  ${mixins.bp.sm.min} {
		display: none;
	}

  ${mixins.xs} {
		border-bottom: 1px solid ${vars.colors.lines};
		padding-bottom: ${vars.dim.gutter.full.xs};
		margin-bottom: ${vars.dim.gutter.full.xs};

		& > div {
			width: 250px;
			margin: 0 auto;
		}
	};
`;

const CheckoutButtonWrapper = styled.div`
  margin-top: auto;
`;

const CheckoutButton = styled(Button)`
  margin-top: auto;
`;

const Quote = styled.div`
  font-family: ${vars.font.title.family};
  text-align: right;
  font-size: 1.5em;
  line-height: 1.3;
  margin-top: 2em;
  max-width: 20em;
`;

const QuoteText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: ${({ children }) => {
    const quote = children[1];
    if (quote) {
      if (quote.length < 80) {
        return 1;
      } else {
        return Math.max(0.7, 1 - 0.3 * ((quote.length - 80) / 200));
      }
    }
    return "";
  }}em;
`;

const QuoteAuthor = styled.div`
  color: rgba(0, 0, 0, 0.33);
  font-style: italic;
  margin-top: 0.1em;
`;

const formatReleaseDate = R.pipe(
  (releaseDate) => Moment(releaseDate),
  (m) =>
    m.isBefore(Moment().month("Nov").year(2016))
      ? m.format("MMMM YYYY")
      : m.format("Do MMMM YYYY")
);

const Summary = (props) => (
  <Background1>
    <Container1>
      <LeftCol>
        <Cover
          src={
            props.cover &&
            `https://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${props.cover.url}`
          }
        />

        {props.primaryQuote && (
          <Quote>
            <QuoteText>'{props.primaryQuote.textmd}'</QuoteText>

            <QuoteAuthor>- {props.primaryQuote.author}</QuoteAuthor>
          </Quote>
        )}

        {props.readingGuide && (
          <div>
            <br />
            <br />
            <p>
              <a href={props.readingGuide.file.url}>
                Download the reading guide
              </a>
            </p>
          </div>
        )}
      </LeftCol>

      <MobileCover>
        <GridCell>
          <FullWidthImg
            src={
              props.cover &&
              `https://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${props.cover.url}`
            }
          />
        </GridCell>
      </MobileCover>

      <RightCol>
        <TextCell>
          {props.releaseDateText && <NewText>{props.releaseDateText}</NewText>}

          <TitleText>{props.title}</TitleText>

          {props.author && (
            <SubtitleText>
              {props.author.map((x, i) => {
                return (
                  <span key={x + i}>
                    {i > 0 && ", "}

                    <Author to={`/author/${x.slug}`}>{x.name}</Author>
                  </span>
                );
              })}
            </SubtitleText>
          )}
        </TextCell>

        {(props.blurb || props.releaseDate) && (
          <TextCell>
            {props.html && (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.html,
                }}
              />
            )}

            {props.releaseDate && (
              <div>
                <b>Published {formatReleaseDate(props.releaseDate)}</b>
              </div>
            )}
          </TextCell>
        )}

        <Editions>
          {props.bookEdition &&
            props.bookEdition
              .sort((l, r) => (l.format === "eBook" ? 1 : 0))
              .map((x) => (
                <EditionCell>
                  <Metadata>
                    {x.format ? <div>{x.format}</div> : null}

                    {x.isbn && (
                      <div>
                        ISBN{" "}
                        {x.isbn.length === 10
                          ? x.isbn.slice(0, 1) +
                            "-" +
                            x.isbn.slice(1, 3) +
                            "-" +
                            x.isbn.slice(3, 9) +
                            "-" +
                            x.isbn.slice(9)
                          : x.isbn.slice(0, 3) +
                            "-" +
                            x.isbn.slice(3, 4) +
                            "-" +
                            x.isbn.slice(4, 7) +
                            "-" +
                            x.isbn.slice(7, 12) +
                            "-" +
                            x.isbn.slice(12)}
                      </div>
                    )}

                    {x.price ? <div>{x.price}</div> : null}

                    {x.pageCount ? <div>{x.pageCount}pp</div> : null}

                    {x.dimensions ? <div>{x.dimensions}</div> : null}
                  </Metadata>

                  {(x.amazonProductCode || x.link) && (
                    <CheckoutButtonWrapper>
                      <CheckoutButton
                        href={
                          x.amazonProductCode
                            ? `https://www.amazon.co.uk/gp/product/${x.amazonProductCode}/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0995482225&linkCode=as2&tag=codogo-21&linkId=052e3a21b4f437cd0fa7ed4a7eb8844a`
                            : x.link
                        }
                        text={x.format}
                        icon="shopping_cart"
                      />
                    </CheckoutButtonWrapper>
                  )}
                </EditionCell>
              ))}
        </Editions>

        <TextCell>
          <br />
          <CheckoutButton
            href="https://www.booksellers.org.uk/bookshopsearch"
            target="_blank"
            text="Find a bookshop"
            icon="compass"
          />
        </TextCell>
      </RightCol>
    </Container1>
  </Background1>
);

export default Summary;
