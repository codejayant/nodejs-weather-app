const request = require('request')

var getWeather = (latitude, longitude, callback) => {
  request({
      url: `https://api.darksky.net/forecast/1d1cf7208e92b1c197b21f18a6a52321/${latitude},${longitude}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200)  {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      } else {
        callback('Unable to fetch weather')
      }
    })
}

module.exports.getWeather = getWeather
