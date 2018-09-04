import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';

function CurrentCity(props) {
	return (
		<div className="Current-City">
			<p>{data.current_observation.display_location.full}</p>
		</div>
	);
}

function CurrentDay() {
	return (
		<div>
			<p>Current Date: {data.forecast.txt_forecast.date}</p>
		</div>
	);
}
function CurrentTemp() {
	return (
		<div>
			<p>{data.current_observation.temperature_string}</p>
		</div>
	);
}
function CurrentCondition() {
	return (
		<div>
			<p>{data.current_observation.weather}</p>
		</div>
	);
}
function HighAndLow() {
	return (
		<div>
			<p>{data.forecast.dsimpleforecast.forecastday.date.high}</p>
			<p>{data.forecast.dsimpleforecast.forecastday.date.low}</p>
		</div>
	);
}
const DailySummary = () => {
	return (
		<div>
			<div>
				{data.forecast.txt_forecast.forecastday.map(value => {
					return <div>{value.fcttext}</div>;
				})}
			</div>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<CurrentDay />
				<CurrentCity />
				<CurrentTemp />
				<CurrentCondition />
				<HighAndLow />
				<DailySummary />
			</div>
		);
	}
}

export default App;
