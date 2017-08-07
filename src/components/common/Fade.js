import React from "react";
import styled from "styled-components";
import ReactTransitionGroup from "react-addons-transition-group";
import Velocity from "velocity-animate";

// --------------------------------------------------

const Wrapper = styled.div`
	${p => p.zIndex ? `z-index: ${p.zIndex};` : ""}
`;

// --------------------------------------------------

export class Fader extends React.Component {
	constructor(props) {
		super(props);
		this.ref = this.ref.bind(this);
	}

	componentWillEnter(cb) {
		try {
			this._wrapper.style.opacity = 0;
			Velocity(
				this._wrapper,
				{ opacity: 1, },
				{
					duration: this.props.fadeDuration,
					complete: cb,
					mobileHA: false,
				}
			);
		}
		catch(err) {
			console.log("something went wrong with componentWillEnter");
			cb();
		}
	}

	componentWillLeave(cb) {
		try {
			Velocity(
				this._wrapper,
				{ opacity: 0, },
				{
					duration: this.props.fadeDuration,
					complete: cb,
					mobileHA: false,
				}
			);
		}
		catch(err) {
			console.log("something went wrong with componentWillLeave");
			cb();
		}
	}

	ref(comp) {
		this._wrapper = comp || this._wrapper;
	}

	render () {
		return (			
			<div ref = { this.ref }>
				{ this.props.children }
			</div>
		)
	}

	defaultProps = {
		fadeDuration: 300,
	}
}

// --------------------------------------------------

const FirstChild = (props) => React.Children.toArray(props.children)[0] || null;

// --------------------------------------------------

export default (props) => (
	<ReactTransitionGroup component = { FirstChild }>
		{
			props.visible
				? (
					<Fader
						fadeDuration = { props.fadeDuration }
					>
						{ props.children }
					</Fader>
				)
				: null
		}		
	</ReactTransitionGroup>
)