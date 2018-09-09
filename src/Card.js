import React from 'react';
import styled from 'styled-components';

const Card = props => {
	return (
		<div>
			<div>{props.time}</div>
			<img src={props.icon} alt="weatherpic" />
			<div>{props.temp}</div>
		</div>
	);
};

const StyledCard = styled(Card)`
	color: pink;
`;
export default Card;
