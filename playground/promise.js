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
