// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 0,
    prize:[
      {
        name:"限次王者币卡",
        num:"1",
        picsrc:"../images/sign/sign_01.png",
        time:"已领",
        opacity:"0.7"
      },
      {
        name: "大宝箱",
        num: "1",
        picsrc: "../images/sign/sign_02.png",
        time: "今天",
        opacity: "1"
      },
      {
        name: "限次王者币卡",
        num: "1",
        picsrc: "../images/sign/sign_01.png",
        time: "明天",
        opacity: "1"
      },
      {
        name: "大宝箱",
        num: "1",
        picsrc: "../images/sign/sign_02.png",
        time: "第3天",
        opacity: "1"
      },
      {
        name: "限时经验卡",
        num: "1",
        picsrc: "../images/sign/sign_03.png",
        time: "第4天",
        opacity: "1"
      },
      {
        name: "少量王者劵",
        num: "1",
        picsrc: "../images/sign/sign_04.png",
        time: "第5天",
        opacity: "1"
      },
      {
        name: "大宝箱",
        num: "1",
        picsrc: "../images/sign/sign_02.png",
        time: "第6天",
        opacity: "1"
      }
    ]
  },
  show:function(){
    var _this=this;
    this.setData({
      scale:1
    });
    setTimeout(function () {
      _this.setData({
        scale: 0
      });
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})