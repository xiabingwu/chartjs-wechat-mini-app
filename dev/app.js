let Promise = require('./libs/ES2015ponyfill/promise').Promise
App({
  onLaunch: function () {
    console.log('App Launch')
    this.deviceInfo=this.promise.getDeviceInfo();
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  promise:{
    getDeviceInfo:function(){//获取设备信息
      let promise=new Promise((resolve,reject)=>{
        wx.getSystemInfo({
          success: function (res) {
            resolve(res)
          },
          fail:function(){
            reject()
          }
        })
      })
      return promise
    }
  },
  getGid:(function(){//全局唯一id
    let id=0
    return function(){
      id++
      return id
    }
  })()
})
