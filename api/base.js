/**
 * 存储接口地址
 */
module.exports = {
  baseURL: 'http://localhost:3001',   //公共地址
  banner: '/api/banner',              //轮播图
  goods: '/api/goods',                //商品列表
  hotSearch: '/api/keywords',         //热词搜索
  search: '/api/goods/search',        //根据关键字搜索
  goodsDetails: '/api/goods/details', //商品详情
  showCart: '/api/cart',              //购物车展示
  addCart: '/api/cart/add',           //添加购物车
  delCart: '/api/cart/del',           //删除商品
  category: '/api/category',          //商品分类
  buy: '/api/buy',                    //购买商品查询
  login: '/api/login'                 //登录
}