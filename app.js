// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv

// // print argument 
// // console.log(argv)

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })


// 1d1cf7208e92b1c197b21f18a6a52321

// https://api.darksky.net/forecast/1d1cf7208e92b1c197b21f18a6a52321/37.8267,-122.4233


const request = require('request')

request({
  url: `https://api.darksky.net/forecast/1d1cf7208e92b1c197b21f18a6a52321/37.8267,-122.4233`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200)  {
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather')
  }
})