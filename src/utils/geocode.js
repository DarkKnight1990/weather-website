const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
                encodeURIComponent(address) + '.json?' +
                'access_token=pk.eyJ1IjoicGlrbHVkZXkiLCJhIjoiY2tjaXFhMG81MWN0OTJ0bzgxYmlobjd0ZSJ9.ewYjxEeqMsYBXh4-K1lLLQ' +
                '&limit=1';
    
    request({ url, json: true }, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to geocode service!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location, try a different search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            });
        }
    })
}

module.exports = geocode;
