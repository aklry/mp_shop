const {
  api
} = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    slideData: [{
        id: 0,
        text: '热门推荐'
      },
      {
        id: 1,
        text: '手机数码'
      },
      {
        id: 2,
        text: '家用电器'
      },
      {
        id: 3,
        text: '电脑办公'
      },
      {
        id: 4,
        text: '玩具乐器'
      },
      {
        id: 5,
        text: '热门家具'
      },
      {
        id: 6,
        text: '男装'
      },
      {
        id: 7,
        text: '男鞋'
      },
      {
        id: 8,
        text: '女装'
      },
      {
        id: 9,
        text: '女鞋'
      },
      {
        id: 10,
        text: '美妆护肤'
      },
      {
        id: 11,
        text: '户外运动'
      },
    ],
    categoryData: [],
    currentTag: '热门推荐'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.http(this.data.currentTag)
  },
  clickNavItem(e) {
    const {
      title
    } = e.currentTarget.dataset
    this.http(title)
  },
  http(tag) {
    api.getCategory({
      tag
    }).then(res => {
      wx.showLoading({
        title: '加载中',
      })
      if (!res.data.msg) {
        this.setData({
          categoryData: res.data.data
        })
        wx.hideLoading()
      } else {
        wx.showToast({
          title: res.data.msg
        })
      }
    }).catch(error => console.log(error))
  },
  clickItemSearch(e) {
    const { tag } = e.currentTarget.dataset
    api.getSearch({
      search: tag
    }).then(res => {
      if (!res.data.msg) {
        let goods = JSON.stringify(res.data.data)
        wx.navigateTo({
          url: `/pages/goods/goods?goods=${goods}`
        })
      } else {
        wx.showToast({
          title: res.data.msg,
        })
      }
    }).catch(error => console.log(error))
  }
})