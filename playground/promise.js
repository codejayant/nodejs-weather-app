var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be number')
      }
    }, 1500)
  })
}

asyncAdd(5, '7').then((res) => {
  console.log('Results: ', res)
  // return a new promise to create promise chain
  return asyncAdd(res, 33)
}).then((res) => {
  console.log('should be 45 : ', res)
}).catch((errorMessage) => {
  console.log(errorMessage)
})

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // either resolve or reject and not both
    // resolve or reject also won't be called twice or more
    // resolve('Hey. It worked')
    reject('Unable to fulfill promise')
  }, 2500)
})

somePromise.then((message) => {
  console.log('Success: ', message)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
})
