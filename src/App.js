import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './7HourForecast';
import TenDayForecast from './10DayForecast';
import Welcome from './Welcome';

class App extends Component {
	state = {
		forecast: false,
		hourly: false
	};

	handleHourly = () => {
		this.setState({ hourly: true, daily: false });
	};

	handleDaily = () => {
		this.setState({ daily: true, hourly: false });
	};

	componentDidMount() {
		fetch(
			'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2af77b1b6c07d8e01527d13dc233502/37.8267,-122.4233'
		)
			.then(response => response.json())
			.then(response => {
				console.log(response);
			});
	}
	//return searched items
	render() {
		return (
			<div className="App">
				<Welcome />
				<button onClick={this.handleHourly}>Hourly Forecast</button>
				<button onClick={this.handleDaily}>10 Day Forecast</button>
				<CurrentWeather />
				{this.state.hourly && <SevenHourForecast />}
				{this.state.daily && <TenDayForecast />}
			</div>
		);
	}
}

export default App;
