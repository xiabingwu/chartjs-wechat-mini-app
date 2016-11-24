/**
 * Created by xiabingwu on 2016/11/14.
 */
import Chart from './chart'
import fixedCtx from './fixedCtx'
export default function(config){
    let canvasId=config.canvasConfig.id
    let pageThis=this
    let ctx = wx.createContext()
    resetCanvas(pageThis,config.canvasConfig)
    fixedCtx(ctx,config.canvasConfig)
    Chart.pluginService.register({
        beforeRender: function (chart) {

        },
        afterDraw: function (chart, easing) {
            var ctx = chart.chart.ctx
            if(ctx.canvas.id==canvasId){
                wx.drawCanvas({
                    canvasId: canvasId,
                    actions: ctx.getActions()// 获取绘图动作数组
                })
                //console.log('canvasid',canvasId)
            }

        }
    });
    Chart.helpers.addEvent=function(canvas,eventName,method){
        switch(eventName){
            case 'touchmove':
                console.log(eventName)
                pageThis[canvasId+'TouchMove']=method
                break;
            case 'touchstart':

                pageThis[canvasId+'TouchStart']=method
                break;
        }
    }
    Chart.helpers.getRelativePosition = function(evt, chart) {
        var touches=evt.touches[0]
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