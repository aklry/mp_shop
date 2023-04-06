const {
  api
} = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // api.getSearch({
    //   search: options.search
    // }).then(res => {
    //   if (!res.data.msg) {
    //     this.setData({
    //       goods: res.data.data
    //     })
    //   } else {
    //     wx.showToast({
    //       title: res.data.msg
    //     })
    //   }
    // }).catch(error => console.log(error))
    //反序列化
    let goods = JSON.parse(options.goods)
    this.setData({
      goods
    })
  }
})