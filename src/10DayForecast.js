import React from 'react';
import { data } from './data';
import Card from './Card';

const TenDayForecast = (props) => {
	console.log(props.time)
	return (
		<div>
			{data.forecast.txt_forecast.forecastday.map(value => {
				return (
					<Card
						time={value.title}
						icon={value.icon_url}
						temp={value.fcttext}
						key={value.period}
					/>
				);
			})}
		</div>
	);
};

export default TenDayForecast;
