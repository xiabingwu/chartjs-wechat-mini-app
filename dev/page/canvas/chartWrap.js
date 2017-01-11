/**
 * Created by xiabingwu on 2016/11/14.
 */
import Chart from './chart'
import fixedCtx from './fixedCtx'
let app = getApp()
export default function(config){
    let canvasId=config.canvasConfig.id
    let pageThis=this
    let ctx = wx.createCanvasContext(canvasId)//wx.createContext已经被废弃
    let gid = app.getGid()
    ctx.gid = gid
    resetCanvas(pageThis,config.canvasConfig)
    fixedCtx(ctx,config.canvasConfig)
    Chart.pluginService.register({
        beforeRender: function (chart) {

        },
        afterDraw: function (chart, easing) {
            var ctx = chart.chart.ctx
            if(ctx.gid==gid){
                // wx.drawCanvas({//wx.drawCanvas与ctx.getActions已经被废弃
                //     canvasId: canvasId,
                //     actions: ctx.getActions()// 获取绘图动作数组
                // })
                ctx.draw()
            }
        }
    });
    Chart.helpers.addEvent=function(canvas,eventName,method){
        switch(eventName){
            case 'touchstart':
                pageThis[canvasId+'TouchStart']=method
                pageThis[canvasId+'TouchMove']=method
                pageThis[canvasId+'TouchEnd']=function(){}
                break;
        }
    }
    Chart.helpers.getRelativePosition = function(evt, chart) {
        var touches=evt.changedTouches[0]
        var x=touches.x
        var y=touches.y
        console.log(x,y)
        return {
            x:x,
            y:y
        }
    }
    var myChart = new Chart(ctx, config.chartConfig);
    return myChart;
}
function resetCanvas(pageThis,canvasConfig){
    let obj={}
    let key=canvasConfig.id+'Style'
    obj[key]={};
    obj[key].width=canvasConfig.width
    obj[key].height=canvasConfig.height
    console.log(obj)
    pageThis.setData(obj)
}