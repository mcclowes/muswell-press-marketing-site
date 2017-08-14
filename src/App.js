import { ThemeProvider, } from "styled-components";
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
import Helmet from "react-helmet";

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./components/style/globalStyles";

import Nav from "./components/common/Nav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import * as vars from "./components/style/vars";

// --------------------------------------------------

injectGlobalStyles();

const defaultColors = {
	bg: "#fff",
	body: "transparent",
	footer: vars.colors.footer,
	nav: vars.colors.nav,
	logo1: vars.colors.text,
	logo2: "#93DADC",
};

const routes = routesConfig.map(({ component: Comp, colors, ...rest }) => {
	const render = props => (
		<ThemeProvider theme = { { ...defaultColors, ...colors, } }>
			<div>
				<Helmet>
					<meta charSet="utf-8" />

					<title>Muswell Press</title>
					
					<link rel="canonical" href="http://http://www.muswell-press.co.uk/" />
				</Helmet>

				<Nav colors = { colors } key = "Nav" />

				<Main colors = { colors } key = "Main">
					<Comp colors = { colors } { ...props } />
				</Main>
				
				<Footer colors = { colors } key = "Footer" />
			</div>
		</ThemeProvider>
	)

	return <Route
		key = { rest.path }
		{ ...rest }
		render = { render }
	/>
});

export default () =>
	<Router>
		<ScrollToTop>
			<div>
				{ routes }
			</div>
		</ScrollToTop>
	</Router>;
