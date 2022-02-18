const request = require('postman-request')

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3c39294afc0f0771d9189f1a2c524ed2&query=${lat},${lon}`

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to the weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      console.log(body.current)
      const { temperature, feelslike, weather_descriptions, weather_icons, cloudcover } = body.current
      const forecastText = `The current weather is: ${weather_descriptions[0]}. It is currently ${temperature}°C, it feels like ${feelslike}°C. There is ${cloudcover}% cloud cover.`
      const icon = weather_icons[0]
      callback(undefined, forecastText, icon)
    }
  })
}

module.exports = forecast