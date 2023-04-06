/**
 * 网络请求方法
 */
const base = require('./base')
const { request } = require('../utils/request')
/**
 * get banner data
 */
function getBanner() {
  return request(base.baseURL + base.banner, 'GET', null)
}

module.exports = {
  getBanner
}