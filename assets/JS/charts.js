var options = {
  series: [
    {
      name: "CPU Usage",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Memory Usage",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Storage Usage",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Network Usage",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 1,
      opacity: 0.5,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "60%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  title: {
    text: "System Resources by Server",
  },
  xaxis: {
    categories: [
      "Server 1",
      "Server 2",
      "Server 3",
      "Server 4",
      "Server 5",
      "Server 6",
      "Server 7",
    ],
  },
  yaxis: {
    title: {
      text: "Servers",
    },
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      style: ["circles", "slantedLines", "verticalLines", "horizontalLines"],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 450,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.5,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  labels: ["CPU", "Memory", "Storage", "Network", "Other"],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 1,
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  title: {
    text: "Resource Distribution",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 350,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();