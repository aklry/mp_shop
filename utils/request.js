function request(url, method = 'GET', data) {
  //等待网络请求
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
  return promise
}
module.exports = {
  request
}