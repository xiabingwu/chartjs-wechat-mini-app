/**
 * Created by xiabingwu on 2016/11/21.
 */
export default function(ctx,canvasConfig){
    String.prototype.realLength = function () {
        return this.replace(/[^\x00-\xff]/g, "**").length;
    };
    ctx.devicePixelRatio = 1
    if(canvasConfig.width<305){//for line
        ctx.measureText = function (str) {//为了小屏手机
            var lg=(''+str).length
            lg=lg*4
            return {
                width:lg
            }
        }
    }else{
        ctx.measureText = function (str) {
            var lg=(''+str).length
            lg=lg*5
            return {
                width:lg
            }
        }
    }
    ctx.measureTextXscale = function (str) {
        var lg=(''+str).realLength()
        return {
            width:lg
        }
    }
    ctx.measureTextToolTip=function(str){
        var lg=(''+str).realLength()
        return {
            width:lg*5.95
        }
    }
    ctx.canvas = {//微信小程序没有canvas对象，我们造一个
        width: canvasConfig.width,
        height: canvasConfig.height,
    }
    ctx.canvas.style = {
        width: ctx.canvas.width,
        height: ctx.canvas.height,
        display: 'block'
    }
    //strokeRect和fillRect方法已经被小程序实现不用封装了
    // ctx.strokeRect = function (x, y, width, height) {
    //     ctx.beginPath()
    //     ctx.rect(x, y, width, height)
    //     ctx.closePath()
    //     ctx.stroke()
    // }
    // ctx.fillRect = function (x, y, width, height) {
    //     ctx.beginPath()
    //     ctx.rect(x, y, width, height)
    //     ctx.closePath()
    //     ctx.fill()
    // }
    ctx.canvas.getAttribute = function (name) {
        if (name == 'width') {
            return ctx.canvas.width
        }
        if (name == 'height') {
            return ctx.canvas.height
        }
    }
    ctx.canvas.id=canvasConfig.id
    return ctx;
}