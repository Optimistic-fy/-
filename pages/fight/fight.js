// pages/fight/fight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"500rpx",
    tempText: 10,
    change:2,
    num: 0,
    info: [{
      n: "1",
      project:"语文",
      title: "朝发白帝城",
      name:[
        { bg: 1, named_N: "杜牧" },
        { bg: 2, named_N: "白居易"},
        { bg: 3, named_N: "杜甫"},
        { bg: 4, named_N: "李白"},
      ]
    },
    {
      n: "2",
      project: "语文",
      title: "千里江陵一日还",
      name: [
        { bg: 1, named_N: "白居易" },
        { bg: 2, named_N: "王维" },
        { bg: 3, named_N: "李清照" },
        { bg: 4, named_N: "李白" },
      ]
    }]
  },
  moveClick: function () {
    var animation = wx.createAnimation({
      duration:2000,
      delay:1000,
      timingFunction:"ease",
    });
    animation.translateY(-193).step({ duration: 2000 });
    this.setData({ moveData: animation.export() });
  },
  scaleClickleft: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      delay: 1000,
      timingFunction: "ease",
    });
    animation.translateX(-20).scale(0.7).step({ duration: 2000 });
    this.setData({ scaleDataleft: animation.export() });
  },
  scaleClickright: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      delay: 1000,
      timingFunction: "ease",
    });
    animation.translateX(20).scale(0.7).step({ duration: 2000 });
    this.setData({ scaleDataright: animation.export() });
  },
  noneName: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      delay: 1000,
      timingFunction: "ease",
    });
    animation.opacity(0).step({ duration: 1000 });
    this.setData({ noneData: animation.export() });
  },
  hasName: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      delay: 1000,
      timingFunction: "ease",
    });
    animation.opacity(1).step({ duration: 1000 });
    this.setData({ hasData: animation.export() });
  },
  hasInfo: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      delay: 1500,
      timingFunction: "ease",
    });
    animation.opacity(1).step({ duration: 200 });
    this.setData({ hasInfoData: animation.export() });
  },
  startInterval: function () {
    var _this = this;
    var t = 10;
    var i = 0;
    var Inter = setInterval(function () {
      var n = t;
      var data = _this.data.num + 1;
      if(n==10){
        _this.Data(i);
        n = _this.data.tempText - 1;
      }
      if (n < 0) {
        if (i >= 1) {
          _this.setData({
            tempText: 0
          });
          clearInterval(Inter);
        }else{
          _this.setData({
            tempText: t
          });
          if(data < 2){
            _this.setData({
              num: data
            });
          }
          i++;
        }
      } else {
        _this.setData({
          tempText: n
        });
      }
    }, 1000);
  },
  Data:function(e){
    var _this = this;
    var info = _this.data.info[e];
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.moveClick();
    _this.scaleClickleft();
    _this.scaleClickright();
    _this.noneName();
    _this.hasName();
    _this.hasInfo();
    setTimeout(function(){
      _this.startInterval();
    },2000);
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