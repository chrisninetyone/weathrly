import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './7HourForecast';
import TenDayForecast from './10DayForecast';
import Welcome from './Welcome';

// function HighAndLow() {
// 	return (
// 		<div>
// 			<p>{data.forecast.dsimpleforecast.forecastday.date.high}</p>
// 			<p>{data.forecast.dsimpleforecast.forecastday.date.low}</p>
// 		</div>
// 	);
// }
// const DailySummary = () => {
// 	return (
// 		<div>
// 			<div>
// 				{data.forecast.txt_forecast.forecastday.map(value => {
// 					return <div>{value.fcttext}</div>;
// 				})}
// 			</div>
// 		</div>
// 	);
// }

class App extends Component {
	render() {
		return (
			<div className="App">
        <Welcome/>
				<CurrentWeather />
				<SevenHourForecast />
        <TenDayForecast/>
			</div>
		);
	}
}

export default App;
