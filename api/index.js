/**
 * 网络请求方法
 */
const base = require('./base')
const { request } = require('../utils/request')
const api = {
  /**
   * get banner data
   */
  getBanner: function (params) {
    return request(base.baseURL + base.banner, 'GET', params)
  },
  /**
   * get goods data
   */
  getGoods: function(params) {
    return request(base.baseURL + base.goods, 'GET', params)
  },

  /**
   * hot search keywords
   */
  getHotSearch: function(params) {
    return request(base.baseURL + base.hotSearch, 'GET', params)
  },
  getSearch(params) {
    return request(base.baseURL + base.search, 'GET', params)
  }
}



module.exports = {
  api
}