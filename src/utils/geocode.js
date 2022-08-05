const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/encodeURIComponent(${address}).json?access_token=pk.eyJ1Ijoic2V5YmEiLCJhIjoiY2szbWZ2aWJxMDd4cTNlcW5tMnI4dmowayJ9.UK1eWAqduAQFWcSi4etRRQ&limit=1`
    
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find the location. Please try another search.')
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0], 
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode