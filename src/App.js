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
