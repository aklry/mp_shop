const { api } = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
        this.loginHandle()
        wx.setStorageSync('userInfo',res.userInfo)
      },
      fail(error){
        console.log(error)
      }
    })
  },
  loginHandle() {
    wx.login({
      success: (res) => {
        //code:发送给接口
        api.login({
          code: res.code
        }).then(resp => {
          wx.setStorageSync('loginID', resp.data.data)
        }).catch(error => console.log(error))
      },
      fail(error){
        console.log(error)
      }
    })
  }
})