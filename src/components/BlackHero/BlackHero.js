import React from 'react';
import './blackHero.scss';
import '../../index.scss';

function BlackHero(props) {
	return (
		<div className="blackHeroContainer">
			<div className="headline">
				<div className="icon">{props.icon}</div>

				<h1 className="heading">{props.heading}</h1>
			</div>
			<div className="CTAButton">{props.CTA}</div>
		</div>
	);
}

export default BlackHero;
