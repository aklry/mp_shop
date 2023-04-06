/**
 * 网络请求方法
 */
const base = require('./base')
const { request } = require('../utils/request')
const api = {
  /**
   * get banner data
   */
  getBanner: function () {
    return request(base.baseURL + base.banner, 'GET', null)
  },
  /**
   * get goods data
   */
  getGoods: function(params) {
    return request(base.baseURL + base.goods, 'GET', params)
  }
}



module.exports = {
  api
}