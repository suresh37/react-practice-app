import React, { useState, useEffect } from 'react';
let weatherService = require('../services/weather-service');

const Weather = ({ show }) => {
	console.log('Weather App Comp');
	const [weatherData, setWeatherData] = useState({ temp: '-' });
	const [revGeoCodeData, setRevGeoCodeData] = useState(null);
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	// let latitude = '',longitude = '';
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude.toFixed(6));
				setLong(position.coords.longitude.toFixed(6));
				console.log(`Latitude: ${lat}, Longitude: ${long}`);
			});
		} else {
			console.log('Geolocation is not supported');
		}
	}, []);

	useEffect(() => {
		console.log(`useEffect 2 :: Latitude: ${lat}, Longitude: ${long}`);
		(async () => {
			if (lat && long) {
				await getRevGeoCode();
				await getWeatherData();
			}
		})();
	}, [lat, long]);

	const getRevGeoCode = async () => {
		let revGeoCodeDataTemp = await weatherService.getReverseGeoCoding(
			lat,
			long,
		);
		console.log('revGeoCodeDataTemp', revGeoCodeDataTemp);
		setRevGeoCodeData(revGeoCodeDataTemp);
	};

	const getWeatherData = async () => {
		let weatherDataTemp = await weatherService.getWeatherData(lat, long);
		console.log('weatherDataTemp', weatherDataTemp);
		setWeatherData(weatherDataTemp);
	};

	const handleInputChange = (name, event) => {
		//if (!lat || !long) return;
		console.log(event);
		console.log('Input changed', lat, long);
		if (name == 'lat') {
			setLat(event.target.value);
		} else if (name == 'long') {
			setLong(event.target.value);
		}
	};
	return show ?
		<div>
			<p style={{ textAlign: 'center' }}>
				<b>Weathering With U</b>
			</p>
			<p>Location : {revGeoCodeData?.address?.city}</p>
			<p>Current Weather : {weatherData?.currently?.summary}</p>
			<br />
			<div>
				<b>Latitude: </b>
				<input
					value={lat}
					onChange={(e) => handleInputChange('lat', e)}
				></input>
				<br />
				<br />
				<b>Longitude: </b>
				<input
					value={long}
					onChange={(e) => handleInputChange('long', e)}
				></input>
				<br />
			</div>
			<hr />
		</div>
		: '';
};

export default Weather;
