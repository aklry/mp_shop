const {
  api
} = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData: []
  },

  /**
   * 生命周期函数--每次打开页面，都会加载
   */
  onShow(options) {
    api.getCart().then(res => {
      if (res.data.status === 200) {
        this.setData({
          cartData: res.data.data
        })
      } else {
        wx.showToast({
          title: '获取数据失败',
        })
      }
    }).catch(error => console.log(error))
  }
})