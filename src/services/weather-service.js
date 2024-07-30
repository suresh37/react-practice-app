const { REACT_APP_GEO_CODE_API_KEY, REACT_APP_WEATHER_API_KEY } = require('../config/constants');

const getReverseGeoCoding = async (lat, long) => {
    try {
        lat = lat || 51.50344025;
        long = long || -0.12770820958562096;
        console.log('REACT_APP_GEO_CODE_API_KEY', REACT_APP_GEO_CODE_API_KEY)
        let URL = `https://us1.locationiq.com/v1/reverse?key=${REACT_APP_GEO_CODE_API_KEY}&lat=${lat}&lon=${long}&format=json`
        let res = await fetch(URL);
        //console.log('getReverseGeoCoding res', res);
        return res.json();
    } catch (err) {
        console.log('getReverseGeoCoding Err::', err.message);
        return null;
    }
}

const getWeatherData = async (lat, long) => {
    try {
        lat = lat || 51.50344025;
        long = long || -0.12770820958562096;
        let URL = `https://api.pirateweather.net/forecast/${REACT_APP_WEATHER_API_KEY}/${lat},${long}`
        let res = await fetch(URL);
        return res.json();
    } catch (err) {
        console.log('getWeatherData Err::', err.message);
        return null;
    }
}


module.exports = {
    getReverseGeoCoding,
    getWeatherData
}