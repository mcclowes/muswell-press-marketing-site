import { ThemeProvider, } from "styled-components";
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
} from 'react-router-dom';

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./components/style/globalStyles";

import Nav from "./components/common/Nav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import * as v from "./components/style/vars";

// --------------------------------------------------

injectGlobalStyles();

const defaultColors = {
	bg: "#fff",
	body: "transparent",
	footer: v.colors.footer,
	nav: v.colors.nav,
	logo1: v.colors.text,
	logo2: "#93DADC",
};

const routes = routesConfig.map(({ component: Comp, colors, ...rest }) => (
	<Route
		key = { rest.path }
		{ ...rest }
		render = {
			props => <ThemeProvider theme = {{ ...defaultColors, ...colors }}>
				<div>
					<Nav colors = { colors } key = "Nav"/>
					<Main colors = { colors } key = "Main">
						<Comp colors = { colors } { ...props }/>
					</Main>
					<Footer colors = { colors } key = "Footer"/>
				</div>
			</ThemeProvider>
		}
	/>
));

export default () => (
	<Router>
		<ScrollToTop>
			<div>
				{ routes }
			</div>
		</ScrollToTop>
	</Router>
);
