// src/chartData.js

export const chartConfigs = {
  1: {
    type: "line",
    key: "sales",
    data: {
      labels: ["2018", "2019", "2020", "2021"],
      datasets: [
        {
          label: "Sales",
          data: [1000, 1200, 800, 1100],
          borderColor: "rgb(127, 155, 254)",
          backgroundColor: "rgb(127, 195, 254)",
          tension: 0.4, // Smooth curves
        },
        {
          label: "Expenses",
          data: [500, 900, 1100, 700],
          borderColor: "rgb(253, 101, 126)",
          backgroundColor: "rgb(253, 121, 121)",
          tension: 0.4, // Smooth curves
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Sales vs Expenses (2018 - 2021)",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
  2: {
    type: "pie",
    key: "expenses",
    data: {
      labels: [2016, 2017, 2018, 2019, 2020],
      datasets: [
        {
          label: "Users Gained ",
          data: [80000, 45677, 78888, 90000, 4300],
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Users Gained between 2016-2020",
        },
      },
    },
  },
  3: {
    type: "bar",
    key: "revenue",
    data: {
      labels: [2016, 2017, 2018, 2019, 2020],
      datasets: [
        {
          label: "Users Gained ",
          data: [80000, 45677, 78888, 90000, 4300],
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Users Gained between 2016-2020",
        },
      },
    },
  },
  4: {
    type: "scatter",
    key: "performance",
    data: {
      datasets: [
        {
          label: "Data Points",
          data: [
            { x: 5, y: 10 },
            { x: 6, y: 15 },
            { x: 7, y: 20 },
            { x: 8, y: 25 },
            { x: 9, y: 30 },
            { x: 10, y: 35 },
            { x: 11, y: 40 },
            { x: 12, y: 45 },
            { x: 13, y: 50 },
            { x: 14, y: 55 },
          ],
          backgroundColor: "rgb(127, 195, 254)",
        },
        {
          label: "Trend Line",
          data: [
            { x: 5, y: 10 },
            { x: 15, y: 60 },
          ],
          type: "line",
          borderColor: "lightblue",
          borderWidth: 2,
          fill: false,
          pointRadius: 0, // Hide points on the trend line
        },
      ],
    },
  },
  5: {
    type: "doughnut",
    key: "distribution",
    data: {
      labels: ["User A", "User B", "User C", "User D", "User E"], // Make sure to define labels for the doughnut chart
      data: [80000, 45677, 78888, 90000, 4300],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Users Gained between 2016-2020",
        },
      },
    },
  },
};

export const charts = [
  {
    id: 1,
    title: "Company Performance",
    subtitle: "Company Performance",
    type: "line",
    dataKey: "sales",
  },
  {
    id: 2,
    title: "Product Sales",
    subtitle: "Product Sales",
    type: "pie",
    dataKey: "expenses",
  },
  {
    id: 3,
    title: "Monthly Revenue",
    subtitle: "Monthly Revenue",
    type: "bar",
    dataKey: "performance",
  },
  {
    id: 4,
    title: "R&D Investment vs New Product Launches",
    subtitle: "J&J Innovation Trend",
    type: "scatter",
    dataKey: "distribution",
  },
  {
    id: 5,
    title: "Chart View Time Distribution",
    subtitle: "Distribution of View Time Across Charts",
    type: "doughnut",
    dataKey: "revenue",
  },
];
