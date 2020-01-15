//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loadingMoreHidden: false, // 显示没有更多提示
    voteList: [{
      voteId: "001",
      title:"十大歌手歌唱比赛",
      telepathic: 35,
      haveVote: 120,
      hot: 1245,
      finishDate: "2020-01-20 23:59:59",
      bannerUrl: "https://hbimg.huabanimg.com/77b90a46b6dd5323bb8b577f6f91f472a0d30fa657d64-RYB7AR_fw658"
    },{
      voteId: "002",
      title:"手机摄影大赛",
      telepathic: 35,
      haveVote: 120,
      hot: 1245,
      finishDate: "2020-01-20 23:59:59",
      bannerUrl: "http://pic.jiaren.org/wp-content/uploads/2014/03/20140324_532fa02e69255.jpg"
    }], // 投票列表
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
