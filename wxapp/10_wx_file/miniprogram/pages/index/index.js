const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  data: {
    userList: []
  },
  getUserInfo: function (e) {
    console.log(e);
    // _openid有安全问题 => 到云端去,安全
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // console.log(res);
        userInfo.where({
          _openid: res.result.openId
        }).count().then(res => {
          if (res.total == 0) {
            userInfo.add({
              data: e.detail.userInfo
            }).then(res => {
              wx.navgateTo({
                url:  '../add/add'
              })
            })
          }else {
            console.log('该用户已存在')
          }
        })
      }
    })

    // userInfo.add({
    //   data: e.detail.userInfo
    // })
    //把用户数据存到数据库中去
  },
  onLoad() {
    userInfo.get().then(res => {
      console.log(res);
      this.setData({
        userList: res.data
      })
    })
  }
})