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

// --------------------------------------------------

injectGlobalStyles();

const routes = routesConfig.map(route => (
	<Route
		key = { route.path }
		{ ...route }
	/>
));

export default () => (
	<Router>
		<ScrollToTop>
			<div>
				<Nav/>
				<Main>{ routes }</Main>
				<Footer/>
			</div>
		</ScrollToTop>
	</Router>
);
