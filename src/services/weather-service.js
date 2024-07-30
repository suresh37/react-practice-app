const { GEO_CODE_API_KEY } = require('../config/constants');

const getReverseGeoCoding = async (lat, long) => {
    try {
        let URL = `https://us1.locationiq.com/v1/reverse?key=${GEO_CODE_API_KEY}&lat=13.033996&lon=80.251235&format=json`
        let res = await fetch(URL);
        console.log(res);
        return res.json();
    } catch (err) {
        console.log('getReverseGeoCoding', err.message);
        return '';
    }
}


module.exports = {
    getReverseGeoCoding
}