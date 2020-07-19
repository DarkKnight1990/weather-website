const request = require('request');

const forecast = (lat, long, callback) => {
    url = 'http://api.weatherstack.com/current?' + 
          'access_key=ad6ed5a7991ded3a42d2a70d9495bbff&' + 
          'query='+ lat + ',' + long;
    
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find weather data!', undefined);
        } else {
            callback(
                undefined, 
                body.current.weather_descriptions[0] + 
                '. The actual temperature is ' +
                body.current.temperature + ', but it feels like ' +
                body.current.feelslike + '.'
            );
        }
    });
};

module.exports = forecast;
