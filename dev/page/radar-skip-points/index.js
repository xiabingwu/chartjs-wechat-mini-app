//index.js
//获取应用实例
import chartWrap from '../canvas/chartWrap'
import getConfig from './getConfig'
var app = getApp()
Page({
    data: {},
    onLoad: function () {
        let pageThis=this
        app.deviceInfo.then(function(deviceInfo){
            console.log('设备信息',deviceInfo)
            let width=Math.floor(deviceInfo.windowWidth-(deviceInfo.windowWidth/750)*10*2)//canvas宽度
            let height=Math.floor(width/1.6)//这个项目canvas的width/height为1.6
            let canvasId='myCanvas'
            let canvasConfig={
                width:width,
                height:height,
                id:canvasId
            }
            let config=getConfig(canvasConfig)
            chartWrap.bind(pageThis)(config)

        })
    },
    onShow: function () {

    }
})
