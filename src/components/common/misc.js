import React from "react";
import styled from "styled-components";
import R from "ramda";
import { Link, } from "react-router-dom";
import MQ from "react-responsive";

import * as m from "../style/mixins";
import * as v from "../style/vars";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

export const GridCell = styled.div`
	${m.bpEach("padding", v.dim.gutter.half)} ${p =>
	p.flex ? `flex: ${p.flex};` : ""};
`;

const textBoxMargins = objMap(v.font.size, (key, val) => `-${val} 0`);

export const TextBox = styled.div`
	${m.bpEach("margin", textBoxMargins)} ${p =>
	p.bold ? "font-weight: bold;" : ""} ${p =>
	p.align ? `text-align: ${p.align};` : ""};
`;

export const TextCell = props =>
	<GridCell { ...props }>
		<TextBox { ...R.pick(["bold", "align",])(props) }>
			{props.children}
		</TextBox>
	</GridCell>;

export const Container = styled.div`
	${m.bpEach("padding", v.dim.gutter.container)} ${p =>
	p.fullWidth ? "" : `max-width: ${p.maxWidth || v.bps.lg.min}px`};
	margin: auto;
	${p => (p.rel ? "position: relative;" : "")} ${p =>
	p.border
		? `border-bottom: 1px solid ${v.colors.lines};`
		: ""} ${p => (p.center ? "text-align: center;" : "")};
`;

const bgTint = 0.3;
export const Bg = styled.div`
	${p =>
		p.image
			? `
		background-image:
			linear-gradient( rgba(0,0,0,${p.tint || bgTint}), rgba(0,0,0,${p.tint ||
					bgTint}) ),
			url(${p.image});
		background-size: cover;
		background-position: center center;
	`
			: ""} ${p => (p.color ? `background-color: ${p.color};` : "")};
`;

export const Para = props =>
	<div>
		{props.children.split("\n").map((p, i) =>
			<p key = { `${p.slice(0, 5)}/${i}` }>
				{p}
			</p>,
		)}
	</div>;

export const FullWidthImg = styled.img`
	width: 100%;
	height: auto;
`;

const IconWrapper = styled.i`
	font-size: ${p => p.size || "1em"};
	margin-right: ${p => p.marginRight || 0};
`;

export const Icon = props =>
	<IconWrapper className = "material-icons" { ...props }>
		{props.type}
	</IconWrapper>;

export const ButtonWrapper = styled.div`
	display: inline-block;
	padding: 0 1.25em;
	line-height: 1;
	height: 2.8em;
	background: ${p => p.color || v.colors.text};
	transition: 0.1s linear background;
	cursor: pointer;
	color: white;
	${p => (p.margin ? "margin: 0.3em;" : "")} display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover,
	&:visited,
	&:active {
		color: white;
	}

	&:hover {
		background: ${p =>
		p.hoverColor ||
			(p.color ? m.darken(p.color, 0.1) : m.lighten(v.colors.text, 0.1))};
	}
`;

const IconSpan = styled.span`display: inline-block;`;

const MaybeLink = props =>
	props.to
		? <Link to = { props.to } children = { props.children } />
		: <a
			href = { props.href }
			children = { props.children }
			target = { props.target }
		/>;

export const IconButton = props => {
	// const ButtonWrapper = props.to ? ButtonLink : ButtonA;

	return (
		<MaybeLink { ...props }>
			<ButtonWrapper { ...props }>
				{props.icon
					? <Icon
						type = { props.icon }
						size = "1.2em"
						marginRight = "0.25em"
					/>
					: null}
				<IconSpan>
					{props.text || props.children}
				</IconSpan>
			</ButtonWrapper>
		</MaybeLink>
	);
};

export const Button = IconButton;

export const PSpacing = styled.div`${m.bpEach("height", v.font.size)};`;

export const Only = objMap(v.bps, (key, val) => ({ children, }) =>
	<MQ
		query = { `(min-width: ${val.min}px) and (max-width: ${val.max}px)` }
		children = { children }
	/>,
);
