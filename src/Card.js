import React from 'react';

const Card = props => {
	return (
		<div>
			<div>{props.time}</div>
			<img src={props.icon} alt="weatherpic" />
			<div>{props.temp}</div>
		</div>
	);
};

export default Card;
