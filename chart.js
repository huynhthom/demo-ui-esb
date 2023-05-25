/* FIXME: Health of services */

var xValues = ["Hoạt động", "Không hoạt động"];
var yValues = [75, 25];
var barColors = [
    "#1cf847",
    "#FFBB3D"
];

let healthChart = new Chart("chartHealth", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: true
        }
    }
});

// Chart.pluginService.register({
//     beforeDraw: function (chart) {
//         var width = chart.chart.width,
//             height = chart.chart.height,
//             ctx = chart.chart.ctx;

//         ctx.restore();
//         var fontSize = (height / 114).toFixed(2);
//         ctx.font = fontSize + "em sans-serif";
//         ctx.textBaseline = "middle";

//         var text = "100",
//             textX = Math.round((width - ctx.measureText(text).width) / 2),
//             textY = (height / 2) + 15;

//         ctx.fillText(text, textX, textY);
//         ctx.save();
//     }
// });

/* FIXME: Total of requests (success/failure/all) all services/all users */
var data = {
    labels: ['23/5/2023', '24/5/2023', '25/5/2023', '26/5/2023'],
    datasets: [
        {
            label: 'Thành công',
            data: [100, 200, 150, 123],
            backgroundColor: "#1cf847"
        },
        {
            label: 'Thất bại',
            data: [50, 150, 120, 43],
            backgroundColor: "#FFBB3D"
        }
    ]
};

let allUserChart = new Chart("chartAllUser", {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        }
    }
});

/* FIXME: Total of requests (success/failure/all) all services/all users */
var data = {
    labels: ['23/5/2023 (150)', '24/5/2023', '25/5/2023', '26/5/2023'],
    datasets: [
        {
            label: 'Thành công',
            data: [100, 200, 150, 123],
            backgroundColor: "#1cf847"
        },
        {
            label: 'Thất bại',
            data: [50, 150, 120, 43],
            backgroundColor: "#FFBB3D"
        }
    ]
};

let eachUserChart = new Chart("chartEachUser", {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        }
    }
});