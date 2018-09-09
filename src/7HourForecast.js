import React from 'react';
import styled from 'styled-components';

const SevenHourForecast = props => {
	return (
		<WeatherCard>
			<h3>Time: {props.time}</h3>
			<h3>Temp: {props.temp}</h3>
			<h3>Low: {props.low}</h3>
			<h3>High: {props.high}</h3>
		</WeatherCard>
	);
};

const WeatherCard = styled.div`
	border: 1px solid black;
	h3 {
		color: red;
	}
`;

export default SevenHourForecast;
