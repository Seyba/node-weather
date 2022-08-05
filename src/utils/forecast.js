const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0273fee1a52d02a9b7c8eacdb2606b31&query=${lat},${long}&units=f`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find the location.', undefined)
        } else {
            
            const description = body.current.weather_descriptions[0]
            const currentTemp = body.current.temperature
            const feelsLikeTemp = body.current.feelslike
            const msg = `${description}. it's currently ${currentTemp} degrees outside. It feels like ${feelsLikeTemp} degrees out.`
            callback(undefined, msg)
        }
    })
}

module.exports = forecast;