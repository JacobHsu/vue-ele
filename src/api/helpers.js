import axios from 'axios'

// http://localhost:8080/api/seller/ data.json vue.config.js
// http://ustbhuangyi.com/sell/api/seller
// https://vue-ele-server.herokuapp.com/api/seller
// https://jacobhsu.github.io/vue-ele/
const urlMap = {
  development: '/',
  production: 'https://vue-ele-server.herokuapp.com/' //'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
