// pages/test/test.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    arrData: [
      {
        code: "hxpl",
        name: "呼吸频率",
        items: [{ text: "<=8", value: 3, checked: false },
        { text: "9-11", value: 1 },
        { text: "12-20", value: 0 },
        { text: "21-24", value: 2 },
        { text: ">=25", value: 3 }
        ]
      },
      {
        code: "spo2",
        name: "SpO2",
        items: [{ text: "<=91", value: 3, checked: false },
        { text: "92-13", value: 2 },
        { text: "94-95", value: 1 },
        { text: ">=96", value: 0 }
        ]
      },
      {
        code: "yl",
        name: "氧疗",
        items: [{ text: "有", value: 2, checked: false },
        { text: "无", value: 0 }]
      },
      {
        code: "ssy",
        name: "收缩压",
        items: [{ text: "<=90", value: 3, checked: false },
        { text: "91-100", value: 2 },
        { text: "101-110", value: 1 },
        { text: "111-219", value: 0 },
        { text: ">=220", value: 3 }]
      },
      {
        code: "xl",
        name: "心率",
        items: [{ text: "<=40", value: 3 },
        { text: "41-50", value: 1 },
        { text: "51-90", value: 0 },
        { text: "91-110", value: 1 },
        { text: "111-130", value: 2 },
        { text: ">=131", value: 3 }]
      },
      {
        code: "ys",
        name: "意识",
        items: [{ text: "A", value: 0 },
        { text: "V,P,orU", value: 3 }]
      },
      {
        code: "tw",
        name: "体温",
        items: [{ text: "<=35.0", value: 3 },
        { text: "35.1-36.0", value: 1 },
        { text: "36.1-38", value: 0 },
        { text: "38.1-39.0", value: 1 },
        { text: ">=39.1", value: 2 }]
      }
    ]
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

  },


  submitCaculate: function (e) {
    var data = e.detail.value;
    var value = 0;
    var flag = false;
    for (var key in data) {
      var temp = parseInt(data[key]);
      //console.log(key + "    " + temp);
      if (!isNaN(temp)) {
        value += parseInt(data[key]);
      }
      else {
        flag = true;
        break;
      }
    }
    if (flag) {
      wx.showModal({
        title: '失败',
        content: '还有选择的项目',
        confirmText: "确定",
        showCancel: false,
      });
    }
    else {
      wx.showModal({
        title: '结果',
        content: '分值为：' + value,
        confirmText: "确定",
        showCancel: false,
      });
    }
  }
})