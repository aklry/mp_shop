const { api } = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    hotSearch: [],
    value: ''
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
    console.log(this.data.value)
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
    console.log(this.data.value)
  },
  /**
   * 获取热门关键字
   */
  searchByKeywords(e) {
    const { keywords } = e.currentTarget.dataset
    console.log(keywords)
  }
})