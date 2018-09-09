import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './7HourForecast';
import TenDayForecast from './10DayForecast';
import Welcome from './Welcome';
import styled from 'styled-components';

class App extends Component {
	state = {
		forecast: false,
		hourly: false,
		input: '',
		name: '',
		currentTemp: '',
		hourlyTemp: [],
		dailyTemp: []
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
				console.log(response);
				this.setState({
					name: response.name,
					daily: false,
					hourly: false,
					currentTemp: response.main.temp
				});
			});
	};

	handleHourly = () => {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${
			this.state.input
		}&APPID=${APIKey}&units=imperial`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({
					name: response.name,
					hourlyTemp: this.state.hourlyTemp.concat(response.list)
				});
			});
	};

	handleDaily = () => {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q${
			this.state.input
		}&APPID=${APIKey}&units=imperial`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				console.log(response)
				this.setState({
					name: response.name,
					dailyTemp: this.state.dailyTemp.concat(response.list)
				});
			});
	};

	render() {
		const SubmitButton = styled.button`
			color: pink;
			background-color: teal;
		`;

		const HourlyForecastButton = styled.button`
			color: pink;
			background-color: teal;
		`;
		const DailyForecastButton = styled.button`
			color: pink;
			background-color: teal;
		`;

		return (
			<div className="App">
				<input
					type="text"
					placeholder="Enter a Location"
					onChange={this.handleChange}
				/>
				<SubmitButton type="submit" value="Submit" onClick={this.handleSubmit}>
					Submit
				</SubmitButton>
				<HourlyForecastButton onClick={this.handleHourly}>
					Hourly Forecast
				</HourlyForecastButton>
				<DailyForecastButton onClick={this.handleDaily}>
					10 Day Forecast
				</DailyForecastButton>
				{/* <CurrentWeather /> */}
				<div>Name: {this.state.name}</div>
				<div>Current Temperature: {this.state.currentTemp}</div>
				{this.state.hourlyTemp &&
					this.state.hourlyTemp.map(hourlyWeather => {
						return (
							<SevenHourForecast
								time={hourlyWeather.dt_txt}
								temp={hourlyWeather.main.temp}
								low={hourlyWeather.main.temp_min}
								high={hourlyWeather.main.temp_max}
							/>
						);
					})}

				{this.state.dailyTemp &&
					this.state.dailyTemp.map(dailyWeather => {
						return (
							<TenDayForecast
								// time={dailyWeather.list}
								// temp={dailyWeather.list.temp}
								// low={dailyWeather.list.temp.min}
								// high={dailyWeather.list.temp.max}
							/>
						);
					})}
			</div>
		);
	}
}

export default App;
