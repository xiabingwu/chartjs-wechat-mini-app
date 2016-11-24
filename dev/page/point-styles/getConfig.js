/**
 * Created by xiabingwu on 2016/11/21.
 */
export default function(canvasConfig,labels,data){
    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };

    var randomScalingFactor = function () {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }
    function createConfig(pointStyle) {
        return {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: chartColors.red,
                    borderColor: chartColors.red,
                    data: [10, 23, 5, 99, 67, 43, 0],
                    fill: false,
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    showLine: false // no line shown
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Point Style: ' + pointStyle
                },
                legend: {
                    display: false
                },
                elements: {
                    point: {
                        pointStyle: pointStyle
                    }
                }
            }
        };
    }
    //var config = createConfig('circle');
    //var config = createConfig('cross');
    //var config = createConfig('triangle');
    var chartConfig = createConfig('star');
    return {
        chartConfig:chartConfig,
        canvasConfig:canvasConfig
    }
}