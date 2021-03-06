import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./utils/styles/globalStyles";

import Nav from "./components/common/Nav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import siteData from "src/data";
import withTracker from "./withTracker";

import Head from "src/components/common/Head";

injectGlobalStyles();

const defaultColors = siteData.generalSettings.defaultColors;

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

const routes = routesConfig.map(
  ({ component: Comp, colors, data, ...rest }, i) => {
    const render = (props) => (
      <ThemeProvider theme={{ ...defaultColors, ...colors }}>
        <PageBody>
          <Helmet>
            <meta charSet="utf-8" />

            <title>Muswell Press</title>

            <link rel="canonical" href="https://www.muswell-press.co.uk/" />
          </Helmet>

          <Head />

          <Nav key="Nav" />

          <Main key="Main">
            <Comp {...props} {...data} />
          </Main>

          <Footer key="Footer" />
        </PageBody>
      </ThemeProvider>
    );

    return <Route key={rest.path + i} {...rest} render={render} />;
  }
);

const TrackerWrapper = withTracker(() => (
  <ScrollToTop>
    <div>
      <Switch>{routes}</Switch>
    </div>
  </ScrollToTop>
));

export default () => (
  <Router>
    <Route component={TrackerWrapper} />
  </Router>
);
