/**
 * 网络请求方法
 */
const base = require('./base')
const { request } = require('../utils/request')
const api = {
  /**
   * get banner data
   */
  getBanner(params) {
    return request(base.baseURL + base.banner, 'GET', params)
  },
  /**
   * get goods data
   */
  getGoods(params) {
    return request(base.baseURL + base.goods, 'GET', params)
  },

  /**
   * hot search keywords
   */
  getHotSearch(params) {
    return request(base.baseURL + base.hotSearch, 'GET', params)
  },
  /**
   * 根据关键字查询商品
   * @param {搜索关键字} params 
   */
  getSearch(params) {
    return request(base.baseURL + base.search, 'GET', params)
  },
  /**
   * 获取商品详情
   * @param {商品id} params 
   */
  getGoodsDetails(params) {
    return request(base.baseURL + base.goodsDetails, 'GET', params)
  }
}


module.exports = {
  api
}