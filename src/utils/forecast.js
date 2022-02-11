const request = require('postman-request')

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3c39294afc0f0771d9189f1a2c524ed2&query=${lat},${lon}`

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to the weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const { temperature, feelslike, weather_descriptions, precip, weather_icons } = body.current
      const forecastText = `It is currently ${temperature}°C, it feels like ${feelslike}°C. It is ${weather_descriptions[0]}, and there is a ${precip}% chance of rain`
      const icon = weather_icons[0]
      callback(undefined, forecastText, icon)
    }
  })
}

module.exports = forecast