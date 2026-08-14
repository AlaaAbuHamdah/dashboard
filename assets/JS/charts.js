// ===== المخطط الأول =====
var options = {
  series: [
    { name: "CPU Usage", data: [44, 55, 41, 37, 22, 43, 21] },
    { name: "Memory Usage", data: [53, 32, 33, 52, 13, 43, 32] },
    { name: "Storage Usage", data: [12, 17, 11, 9, 15, 11, 20] },
    { name: "Network Usage", data: [9, 7, 5, 8, 6, 9, 4] },
  ],
  chart: {
    type: "bar",
    height: 290,
    stacked: true,
    toolbar: { show: false },
    dropShadow: { enabled: true, blur: 1, opacity: 0.5 },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "50%",
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 1 },
  title: {
    text: "System Resources by Server",
    align: "center",
    style: { fontSize: "12px", fontWeight: "bold" },
  },
  xaxis: {
    categories: ["S1", "S2", "S3", "S4", "S5", "S6", "S7"],
    labels: { style: { fontSize: "9px" } },
  },
  yaxis: {
    labels: { style: { fontSize: "9px" } },
  },
  legend: {
    position: "bottom",
    fontSize: "10px",
    offsetY: 5,
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: { height: 180 },
        title: { style: { fontSize: "10px" } },
        legend: { fontSize: "8px" },
        xaxis: { labels: { style: { fontSize: "7px" } } },
        yaxis: { labels: { style: { fontSize: "7px" } } },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: { height: 200 },
        title: { style: { fontSize: "11px" } },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// ===== المخطط الثاني (الدونات) =====
var options2 = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: "100%",
    height: 290,
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
  stroke: { width: 0 },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
            label: "Total",
            formatter: function () {
              return "172";
            },
          },
        },
      },
    },
  },
  labels: ["CPU", "Memory", "Storage", "Network", "Other"],
  dataLabels: { dropShadow: { blur: 3, opacity: 1 } },
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
  states: { hover: { filter: "none" } },
  theme: { palette: "palette2" },
  title: {
    text: "Resource Distribution",
    align: "center",
    style: { fontSize: "12px", fontWeight: "bold" },
  },
  legend: {
    position: "bottom",
    fontSize: "10px",
    offsetY: 5,
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: { height: 180 },
        title: { style: { fontSize: "10px" } },
        legend: { fontSize: "8px" },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: { height: 200 },
        title: { style: { fontSize: "11px" } },
      },
    },
  ],
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
