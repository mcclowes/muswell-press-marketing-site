import * as mixins from "./mixins";
import * as vars from "./vars";
import { injectGlobal } from "styled-components";
import { objMap } from "src/utils/util";

export default () => injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
	@import url('https://fonts.googleapis.com/css?family=Raleway:400,600');
	@import url('https://fonts.googleapis.com/css?family=IM+Fell+English:400i');
	@import url('https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i');
	@import url('https://fonts.googleapis.com/css?family=Archivo:400,600');
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

	@font-face {
	  font-family: 'TradeGothic';
	  font-style: normal;
	  font-weight: 700;
	  src: url(/fonts/TradeGothic-Bold.woff) format('woff');
	}

	*, *:before, *:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		min-height: 100%;
		position: relative;
	}

	html.noScroll {
		${mixins.bp.md.min} {
			margin-right: ${vars.dim.scrollbar};
			background-color: ${vars.scrollbar.color.track};
		}		
	}

	body {
		background: white;
		font-family: Archivo, sans-serif;
		color: ${vars.colors.text};
		margin: 0;
		overflow-y: scroll;
		line-height: 1.5;

		${mixins.bpEach("font-size", vars.font.size)}
	}

	body.noScroll {
		overflow-y: hidden;
	}

	a,
	a:hover,
	a:visited,
	a:active {
		text-decoration: none;
		color: currentColor;
	}

	p > a {
		font-weight: bold;
	}

	p > a:hover {
		text-decoration: underline;
	}

	a.white-link,
	a.white-link:hover,
	a.white-link:visited,
	a.white-link:active {
		color: white;
	}

	p, h1, h2, h3, h4 {
		${mixins.bpEach(
      "margin",
      objMap(vars.font.size, (key, val) => val + " 0")
    )}
	}

	img {
		vertical-align: bottom;
	}

	.fade-enter {
	  opacity: 0;
	  z-index: 1;
	}

	.fade-enter.fade-enter-active {
	  opacity: 1;
	  transition: opacity 250ms ease-in;
	}

	ul {
		padding-left: 1em;
	}
`;
