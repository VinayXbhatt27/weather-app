const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=6a6f0e52ab014b658fe194033250108&q=" + latitude + "," + longitude;
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 
                body.current.condition.text + ". " + ' It is currently ' + body.current.temp_c + ' degrees out. There is a ' + body.current.precip_in + '% chance of rain.'
            );
        }
    });
};

module.exports = forecast;
