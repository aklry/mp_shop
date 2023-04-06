const {
  api
} = require('../../api/index')
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
    swiperData: [],
    navData: [{
        text: '数码',
        icon: 'like',
        color: '#ff0000'
      },
      {
        text: '生鲜',
        icon: 'star',
        color: '#ff0000'
      },
      {
        text: '会员',
        icon: 'fire',
        color: '#ff0000'
      },
      {
        text: '优惠',
        icon: 'gift',
        color: '#ff0000'
      },
      {
        text: '充值',
        icon: 'phone',
        color: '#ff0000'
      },
      {
        text: '领券',
        icon: 'gem',
        color: '#ff0000'
      },
      {
        text: '外卖',
        icon: 'gift-card',
        color: '#ff0000'
      },
      {
        text: '美食',
        icon: 'smile',
        color: '#ff0000'
      },
    ],
    page: 1,
    goodsData: []
  },
  onLoad() {
    api.getBanner().then(res => {
      // console.log(res.data.data.result)
      this.setData({
        swiperData: res.data.data.result
      })
    })
    this.http(this.data.page)
  },
  http(page) {
    api.getGoods({
      page
    }).then(res => {
      if (!res.data.msg) {
        this.setData({
          goodsData: this.data.goodsData.concat(res.data.data.result)
        })
      } else {
        wx.showToast({
          title: '暂无数据',
        })
      }
    }).catch(error => console.log(error))
  },
  onReachBottom() {
    //触底时更新页码
    this.setData({
      page: this.data.page += 1
    })
    this.http(this.data.page)
  }
})