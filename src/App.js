import { ThemeProvider, } from "styled-components";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Helmet from "react-helmet";

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./components/style/globalStyles";

import Nav from "./components/common/Nav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import siteData from "src/data";

// --------------------------------------------------

injectGlobalStyles();

const defaultColors = siteData.generalSettings.defaultColors;

const routes = routesConfig.map(
	({ component: Comp, colors, data, ...rest }, i) => {
		const render = props => (
			<ThemeProvider theme = { { ...defaultColors, ...colors, } }>
				<div>
					<Helmet>
						<meta charSet = "utf-8" />

						<title>Muswell Press</title>

						<link
							rel = "canonical"
							href = "http://http://www.muswell-press.co.uk/"
						/>
					</Helmet>

					<Nav key = "Nav" />

					<Main key = "Main">
						<Comp { ...props } { ...data } />
					</Main>

					<Footer key = "Footer" />
				</div>
			</ThemeProvider>
		);

		return <Route key = { rest.path + i } { ...rest } render = { render } />;
	},
);

export default () => (
	<Router>
		<ScrollToTop>
			<div>
				<Switch>{routes}</Switch>
			</div>
		</ScrollToTop>
	</Router>
);
