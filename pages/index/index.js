const { getBanner } = require('../../api/index')
Page({
  data: {
    value: '',
    swiperOptions: {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      circular: true
    },
    swiperData: []
  },
  onLoad() {
    getBanner().then(res => {
      // console.log(res.data.data.result)
      this.setData({
        swiperData: res.data.data.result
      })
    })
  },
})
