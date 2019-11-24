const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const app = getApp()

// 封装微信的request
const request = (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    let token = app.globalData.token
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json', // 默认值
        'token': token
      },
      success(res) {
        if (res.statusCode == 200) {
          resolve(res.data)
        } else {
          console.log(res)
          reject(res)
          wx.showToast({
            title: '网络异常，请稍候再试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(err) {
        console.log(err)
        reject(err)
        wx.showToast({
          title: '网络异常，请稍候再试',
          duration: 2000
        })
        //app.openNetworkErrorModal(err.errMsg);
      }
    })
  });
}

module.exports = {
  request: request,
  formatTime: formatTime
}
