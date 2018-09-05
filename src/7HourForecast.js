import React from 'react';
import { data } from './data';

const SevenHourForecast = () => {
	return (
		<div>
			{data.hourly_forecast.map(value => {
				return (
					<div>
						<div>{value.FCTTIME.hour}</div>
						<div>{value.icon_url}</div>
						<div>{value.temp.english}</div>
					</div>
				);
			})}
		</div>
	);
};

export default SevenHourForecast;
