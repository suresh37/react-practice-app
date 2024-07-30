import React, { useState, useEffect } from 'react';

const Weather = () => {
	const [weatherData, setWeatherData] = useState({ temp: '35' });
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	let latitude = '',
		longitude = '';
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

	const handleInputChange = () => {
		if (!lat || !long) return;
		console.log('Input changed', lat, long);
	};
	return (
		<div>
			<p style={{ textAlign: 'center' }}>
				<b>Weathering With U</b>
			</p>
			<p>Location : {weatherData?.temp}</p>
			<p>Current Weather : {weatherData?.temp}</p>
			<br />
			<div>
				<b>Latitude: </b>
				<input
					value={lat}
					onChange={handleInputChange}
				></input>
				<br />
				<br />
				<b>Longitude: </b>
				<input
					value={long}
					onChange={handleInputChange}
				></input>
				<br />
			</div>
		</div>
	);
};

export default Weather;
