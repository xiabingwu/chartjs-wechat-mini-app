/**
 * Created by xiabingwu on 2016/11/21.
 */
import Chart from '../canvas/chart'
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
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
    var color = Chart.helpers.color;
    var scatterChartData = {
        datasets: [{
            label: "My First dataset",
            xAxisID: "x-axis-1",
            yAxisID: "y-axis-1",
            borderColor: chartColors.red,
            backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }]
        }, {
            label: "My Second dataset",
            xAxisID: "x-axis-1",
            yAxisID: "y-axis-2",
            borderColor: chartColors.blue,
            backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
            }]
        }]
    };
    var chartConfig={
        type: 'scatter',
        data: scatterChartData,
        options: {
            responsive: false,
            hoverMode: 'nearest',
            intersect: true,
            title: {
                display: true,
                text: 'Chart.js Scatter Chart - Multi Axis'
            },
            scales: {
                xAxes: [{
                    position: "bottom",
                    gridLines: {
                        zeroLineColor: "rgba(0,0,0,1)"
                    }
                }],
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "right",
                    reverse: true,
                    id: "y-axis-2",

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    };
    return {
        chartConfig:chartConfig,
        canvasConfig:canvasConfig
    }
}