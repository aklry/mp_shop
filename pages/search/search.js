const { api } = require('../../api/index')
/**
 * 展示搜索数据的两种方案
 * 1.在搜索页面通过网络请求获取数据，传递到页面显示
 * 2.在搜索页面将搜索关键字传递到页面，在该页面做网络请求
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    hotSearch: [],
    value: '',
    goodsData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    api.getHotSearch().then(res => {
      this.setData({
        hotSearch: res.data.data.result
      })
    }).catch(error => console.log(error))
  },
  /**
   * 点击按钮实现搜索
   */
  onSearchClick() {
    this.http(this.data.value)
    // wx.navigateTo({
    //   url: `/pages/goods/goods?search=${this.data.value}`,
    // })
  },
  /**
   * 内容改变
   */
  onChange(e) {
    this.setData({
      value: e.detail
    })
  },
  /**
   * 回车实现搜索
   */
  onSearch(e) {
    this.http(this.data.value)
    // wx.navigateTo({
    //   url: `/pages/goods/goods?search=${this.data.value}`,
    // })
  },
  /**
   * 获取热门关键字
   */
  searchByKeywords(e) {
    const { keywords } = e.currentTarget.dataset
    this.http(keywords)
    // wx.navigateTo({
    //   url: `/pages/goods/goods?search=${keywords}`
    // })
  },
  http(search) {
    api.getSearch({
      search
    }).then(res => {
      if (!res.data.msg) {
        // this.setData({
        //   goods: res.data.data
        // })
        //序列化
        let goods = JSON.stringify(res.data.data)
        wx.navigateTo({
          url: `/pages/goods/goods?goods=${goods}`
        })
      } else {
        wx.showToast({
          title: res.data.msg
        })
      }
    }).catch(error => console.log(error))
  }
})