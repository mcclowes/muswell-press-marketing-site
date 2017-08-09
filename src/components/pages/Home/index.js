import styled from "styled-components";
import { Link, } from "react-router-dom";

import { Container, GridCell, TextCell, FullWidthImg, } from "../../common";
import * as v from "../../style/vars";

import NewBooks from "./NewBooks";
import About from "./About";
import Hero from "./Hero";

// --------------------------------------------------

const Home = props =>
	<div>
		<Hero { ...props } />
		<NewBooks />
		<About />
	</div>;

export default Home;
