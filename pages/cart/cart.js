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
    this.http()
  },
  /**
   * 根据id删除商品
   * 1.currentID:商品id
   * 2.id:商品数据的唯一索引
   * @param {*} e 
   */
  delCartHandle(e) {
    const {
      id
    } = e.currentTarget.dataset
    api.delCart({
      currentID: id
    }).then(res => {
      if (res.data.status === 200) {
        wx.showToast({
          title: '删除成功',
        })
        this.http()
      } else {
        wx.showToast({
          title: '删除失败',
        })
      }
    }).catch(error => console.log(error))
  },
  http() {
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