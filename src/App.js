import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './7HourForecast';
import TenDayForecast from './10DayForecast';
import Welcome from './Welcome';

class App extends Component {
	state = {
		forecast: false,
		hourly: false,
		input: '',
		name: ''
	};

	handleHourly = () => {
		this.setState({ hourly: true, daily: false });
	};

	handleDaily = () => {
		this.setState({ daily: true, hourly: false });
	};

	handleChange = event => {
		this.setState({ input: event.target.value });
	};

	handleSubmit = () => {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${
			this.state.input
		}&APPID=${APIKey}&units=imperial`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({ name: response.name, daily: false, hourly: false });
			});
	};

	//keep console logging response

	render() {
		return (
			<div className="App">
				<input
					type="text"
					placeholder="Enter a Location"
					onChange={this.handleChange}
				/>
				<button type="submit" value="Submit" onClick={this.handleSubmit}>
					Submit
				</button>
				<button onClick={this.handleHourly}>Hourly Forecast</button>
				<button onClick={this.handleDaily}>10 Day Forecast</button>
				{/* <CurrentWeather /> */}
				{this.state.name}
				{this.state.hourly && <SevenHourForecast />}
				{this.state.daily && <TenDayForecast />}
			</div>
		);
	}
}

export default App;
