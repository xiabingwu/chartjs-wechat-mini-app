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
            let labels=["11-01", "11-02", "11-03", "11-04", "11-05", "11-06", "十二月"]
            let data=[1,12,123,1234,12345,123456,123456789]
            let width=Math.floor(deviceInfo.windowWidth-(deviceInfo.windowWidth/750)*10*2)//canvas宽度
            let height=Math.floor(width/1.6)//这个项目canvas的width/height为1.6
            let canvasId='myCanvas'
            let canvasConfig={
                width:width,
                height:height,
                id:canvasId
            }
            let config=getConfig(canvasConfig,labels,data)
            chartWrap.bind(pageThis)(config)

        })
    },
    onShow: function () {
        //渲染逻辑不要写这里，后台切换到前端会被重新执行
    }
})
