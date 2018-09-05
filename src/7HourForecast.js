import React from 'react';
import { data } from './data';
import Card from './Card';

const SevenHourForecast = () => {
	return (
		<div>
			{data.hourly_forecast.map(value => {
				return (
					<Card
						time={value.FCTTIME.hour}
						icon={value.icon_url}
						temp={value.temp.english}
						key={value.FCTTIME.epoch}
					/>
				);
			})}
		</div>
	);
};

export default SevenHourForecast;
