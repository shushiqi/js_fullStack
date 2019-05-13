//index.js
//获取应用实例
const WXAPI = require('../../wxapi/main');

Page({
  data: {
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    goodsRecommend: []
  },

  swiperchange(e) {
    console.log(e.detail.current, '-----------');
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  onLoad() {
    this.getCategory(); //分类
    this.getBanners(); //banner
    this.loadGoods(); //商品列表
    this.getRecommend(); //爆款
  },
  getRecommend() {
    WXAPI.loadGoods({
      recmmendStatus: 1
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        this.setData({
          goodsRecommend: res.data
        })
      }
    })
  },
  loadGoods() {

  },
  getBanners() {
    WXAPI.getBanners({
      type: 'new'
    }).then(res => {
      console.log(res);
      if (res.code === 0) {
        this.setData({
          banners: res.data
        })
      }
    })
  },
  getCategory() {

  }
})