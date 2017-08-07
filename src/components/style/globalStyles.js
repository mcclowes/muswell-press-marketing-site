import React from "react";
import { injectGlobal, } from "styled-components";

import * as v from "./vars";
import * as m from "./mixins";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

export default () => injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
	@import url('https://fonts.googleapis.com/css?family=Raleway:400,600');

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
		${m.bp.md.min`
			margin-right: ${v.dim.scrollbar};
			background-color: ${v.scrollbar.color.track};
		`}
		
	}

	body {
		background: white;
		font-family: Raleway, sans-serif;
		${m.bpEach("font-size", v.font.size)}
		color: ${v.colors.text};
		margin: 0;
		${m.bpEither("margin-bottom", v.dim.footer.height)}
		overflow-y: scroll;
		line-height: 1.5;
	}

	body.noScroll {
		overflow-y: hidden;
	}

	a,
	a:hover,
	a:visited,
	a:active {
		color: ${v.colors.text};
		text-decoration: none;
	}

	a.white-link,
	a.white-link:hover,
	a.white-link:visited,
	a.white-link:active {
		color: white;
	}

	p, h1, h2, h3, h4 {
		${m.bpEach("margin", objMap(v.font.size, (key, val) => val + " 0"))}
	}

	img {
		vertical-align: bottom;
	}

	::-webkit-scrollbar-track {
		background-color: ${v.scrollbar.color.track};
	}

	::-webkit-scrollbar	{
		width: ${v.dim.scrollbar};
		height: ${v.dim.scrollbar};
		background-color: #F5F5F5;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: ${v.scrollbar.color.thumb};
	}

	.fade-enter {
	  opacity: 0;
	  z-index: 1;
	}

	.fade-enter.fade-enter-active {
	  opacity: 1;
	  transition: opacity 250ms ease-in;
	}
`;