// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotoOrder: function(){
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },

  gotoUserInfo: function(){
    wx.navigateTo({
      url: '/pages/baseInfo/baseInfo'
    })
  },

  gotoFollow: function(){
    wx.navigateTo({
      url: '/pages/follow/follow'
    })
  },

  gotoCollection: function(){
    wx.navigateTo({
      url: '/pages/collection/collection'
    })
  },

  call: function(){
    wx.makePhoneCall({
      phoneNumber: '18516683224'
    })
  },

  gotoAbout: function(){
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },

  gotoZb: function(){
    wx.navigateTo({
      url: '/pages/zb/zb'
    })
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