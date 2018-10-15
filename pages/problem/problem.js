// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempText:10,
    info:[
      {
      n:"1",
      title:"朝发白帝城",
      name1:"杜牧",
      name2:"白居易",
      name3:"杜甫",
      name4:"李白"
    }
    // {
    //   n: "2",
    //   title: "鹅鹅鹅",
    //   name1: "白居易",
    //   name2: "王维",
    //   name3: "李清照",
    //   name4: "李白"
    // },
    // {
    //   n: "3",
    //   title: "千里江陵一日还",
    //   name1: "白居易",
    //   name2: "王维",
    //   name3: "李清照",
    //   name4: "杜甫"
    // }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.startInterval();
  },
  startInterval:function(){
    var _this = this;
    _this.data.Inter = setInterval(function(){
      var n = _this.data.tempText - 1;
      if(n < 0){
        _this.setData({
          tempText: 10,
        });
      }else{
        _this.setData({
          tempText: n
        });
      }
    },1000);
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