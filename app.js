const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600%20Amphitheatre%20Parkway%20santa%20clara',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2))
})