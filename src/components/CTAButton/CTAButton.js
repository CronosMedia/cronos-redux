import React from 'react';
import './CTAButton.scss';
import '../../index.scss';

const CTAButton = (props) => {
	return (
		<div className="buttonContainer">
			<button className="CTAButton">
				<span className="icon">{props.icon}</span>
				<span className="text">{props.heading}</span>
			</button>
		</div>
	);
};

export default CTAButton;
