const request = require('postman-request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5keThyYWRzaGF3IiwiYSI6ImNrYTU1ZnpoaDA2OXgzbW9kc3pqa3FrMXAifQ.v5LMEUumd8V04cvx7ed5ug&limit=1`

  request ({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find that location, please try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
