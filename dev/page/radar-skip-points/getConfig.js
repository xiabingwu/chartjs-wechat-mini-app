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

    var randomScalingFactor = function () {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var color = Chart.helpers.color;
    var chartConfig = {
        type: 'radar',
        data: {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "Skip first dataset",
                borderColor: chartColors.red,
                backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
                pointBackgroundColor: chartColors.red,
                data: [
                    NaN,
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "Skip mid dataset",
                borderColor: chartColors.blue,
                backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
                pointBackgroundColor: chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    NaN,
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            },{
                label: "Skip last dataset",
                borderColor: chartColors.green,
                backgroundColor: color(chartColors.green).alpha(0.2).rgbString(),
                pointBackgroundColor: chartColors.green,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    NaN
                ]
            }]
        },
        options: {
            title:{
                display:false,
                text:"Chart.js Radar Chart - Skip Points"
            },
            elements: {
                line: {
                    tension: 0.0,
                }
            },
            scale: {
                beginAtZero: true,
            }
        }
    };
    return {
        chartConfig:chartConfig,
        canvasConfig:canvasConfig
    }
}