const { api } = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetails: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //提示用户正在获取数据
    wx.showLoading({
      title: '加载中'
    })
    api.getGoodsDetails({
      id: options.id
    }).then(res => {
      if (res.data.status === 200) {
        wx.hideLoading()
        this.setData({
          goodsDetails: res.data.data[0]
        })
      } else {
        wx.showToast({
          title: '获取数据失败',
        })
      }
    }).catch(error => console.log(error))
  },
  /**
   * 客服
   */
  onClickKF() {

  },
  /**
   * 购物车
   */
  onClickCart() {

  },
  /**
   * 加入购物车
   */
  onClickAddCart() {

  },
  /**
   * 立即购买
   */
  onClickBuy() {

  }
})