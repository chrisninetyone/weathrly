import React from 'react';
import { data } from './data';

const CurrentWeather = () => {
	return (
		<div className="Current-Weather">
			<p>Current Location: {data.current_observation.display_location.full}</p>
			<p>Current Date: {data.forecast.txt_forecast.date}</p>
			<p>Current Temp: {data.current_observation.temperature_string}</p>
			<p>Current Condition: {data.current_observation.weather}</p>
		</div>
	);
};

export default CurrentWeather;