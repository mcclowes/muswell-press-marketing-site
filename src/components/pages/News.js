import * as mixins from "src/utils/styles/mixins";
import * as vars from "src/utils/styles/vars";
import { Button, Container, GridCell, Only } from "../common";
import { compose, withState, withHandlers } from "recompose";
import { Link } from "react-router-dom";
import { MaybeLink } from "../common/Primitives";
import { objMap } from "src/utils/util";

import Head from "src/components/common/Head";
import moment from "moment";
import PropTypes from "prop-types";
import siteData from "src/data";
import styled from "styled-components";

const pressList = siteData.press
  .filter((o) => {
    return o.news;
  })
  .sort(
    (x, y) =>
      new Date(y.releaseDate || y.createdAt) -
      new Date(x.releaseDate || x.createdAt)
  );

const colsMap = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
};

const colWidths = objMap(colsMap, (k, v) => 100 / v + "%");

const NewsWrapper = styled(GridCell)`
  ${mixins.bpEach("width", colWidths)};
`;

const NewsTitle = styled.h3`
  line-height: 1.1;
  margin: 0.2em 0;
  font-family: ${vars.font.title.family};
`;

const NewsCover = styled.div`
  width: 100%;
  padding-top: 66.66%;
  background-image: url(${R.prop("src")});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1em;
`;

const NewsReleaseText = styled.div`
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 0.9em;
  font-family: ${vars.font.title.family};
  line-height: 1;
`;

const NewsDate = styled.div`
  color: #888;
`;

const NewsItem = ({ link, slug, image, releaseDateText, title, date }) => (
  <NewsWrapper>
    <MaybeLink href={link || `/press/${slug}`}>
      <NewsCover
        src={
          image &&
          `https://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${image.url}`
        }
      />

      {releaseDateText && <NewsReleaseText>{releaseDateText}</NewsReleaseText>}

      <NewsTitle>{title}</NewsTitle>

      <NewsDate>{moment(date).fromNow()}</NewsDate>
    </MaybeLink>
  </NewsWrapper>
);

NewsItem.propTypes = {
  date: PropTypes.any,
  image: PropTypes.any,
  link: PropTypes.any,
  releaseDateText: PropTypes.any,
  slug: PropTypes.any,
  title: PropTypes.any,
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const InvisLink = styled(Link)`
  display: none;
  visibility: hidden;
`;

const AllBookLinks = (
  <div>
    {pressList.map((o) => (
      <InvisLink to={`/book/${o.slug}`} key={o.slug} />
    ))}
  </div>
);

const Rows = ({ rows, cols }) => {
  const rowsArr = [];

  for (let i = 0; i < rows; i++) {
    rowsArr.push(
      pressList
        .slice(i * cols, (i + 1) * cols)
        .map((o, i) => <NewsItem {...o} key={o.title + i} />)
    );
  }

  return (
    <div>
      {rowsArr.map((row, r) => (
        <Row key={r}>{row}</Row>
      ))}
    </div>
  );
};

const CenterCell = styled(GridCell)`
  text-align: center;
  flex: 1;
`;

const enhanceGrid = compose(
  withState("rows", "setRows", 2),
  withHandlers({
    loadMore: ({ setRows, rows }) => () => {
      setRows(rows + 1);
    },
  })
);

const Title = styled.h1`
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  font-family: Montserrat;
  margin-bottom: 1em;
`;

const _Grid = (props) => {
  return (
    <div>
      {Object.keys(colsMap).map((bp) => {
        const OnlyBp = Only[bp];

        return (
          <OnlyBp key={bp}>
            <Rows rows={props.rows} cols={colsMap[bp]} />

            {pressList.length > props.rows * colsMap[bp] ? (
              <CenterCell>
                <Button onClick={props.loadMore} text="Load More" />
              </CenterCell>
            ) : null}
          </OnlyBp>
        );
      })}

      {AllBookLinks}
    </div>
  );
};

const Grid = enhanceGrid(_Grid);

const Books = () => (
  <Container>
    <Head pageTitle="News" />

    <Title>News</Title>

    <Grid />
  </Container>
);

export default Books;
