// 封装以下https的request请求
const request = require('request')

exports.request = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log('get request success')
        resolve(body)
      } else {
        console.log('get request fail')
        reject(error)
      }
    })
  })
}