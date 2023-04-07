const { api } = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    api.getBuyDetails({
      id: options.id
    }).then(res => {
      console.log(res.data.data)
      this.setData({
        goodsData: res.data.data[0]
      })
    })
    .catch(error => console.log(error))
  },
  onSubmit() {
    wx.showToast({
      title: '购买成功',
    })
  }
})