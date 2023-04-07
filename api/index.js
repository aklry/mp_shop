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
  },
  /**
   * 展示购物车数据
   * @param {*} params 
   */
  getCart(params) {
    return request(base.baseURL + base.showCart, 'GET', params)
  },
  /**
   * 添加购物车
   */
  addCart(params) {
    return request(base.baseURL + base.addCart, 'GET', params)
  },
  /**
   * 删除商品
   */
  delCart(params) {
    return request(base.baseURL + base.delCart, 'GET', params)
  },
  /**
   * 查询商品具体分类
   * @param {商品分类} params 
   */
  getCategory(params) {
    return request(base.baseURL + base.category, 'GET', params)
  },
  /**
   * 购买商品查询
   * @param {商品id} params
   */
  getBuyDetails(params) {
    return request(base.baseURL + base.buy, 'GET', params)
  }
}


module.exports = {
  api
}