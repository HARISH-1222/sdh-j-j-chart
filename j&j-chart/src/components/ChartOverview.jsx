import React, { useEffect, useState } from "react";
import { Line, Pie, Scatter, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Data } from "../../utils/Data";
import "./chartOverview.css";
import { chartConfigs } from "../chartData.jsx";

// Register necessary components globally
ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartOverview = ({ id }) => {
  const chart = chartConfigs[id];
  const data = chartConfigs[id].data;
  const options = chartConfigs[id].options;

  const getTimeSpentData = () => {
    const routes = [
      "chart-1-time",
      "chart-2-time",
      "chart-3-time",
      "chart-4-time",
      "chart-5-time",
    ];
    return routes.map((route) => {
      const timeSpent = localStorage.getItem(route) || 0;
      return timeSpent ? parseInt(timeSpent, 10) : 0;
    });
  };

  const [doughnutData, setDoughnutData] = useState({
    labels: ["Chart 1", "Chart 2", "Chart 3", "Chart 4", "Chart 5"],
    datasets: [
      {
        label: "Time Spent",
        data: getTimeSpentData(),
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,0.6)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  if (!chart) {
    return <div>Invalid Chart Type</div>;
  }

  const renderChart = () => {
    switch (chart.type) {
      case "line":
        return <Line data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "scatter":
        return <Scatter data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={doughnutData} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      default:
        return <div>Invalid Chart Type</div>;
    }
  };

  return <div className="chart-overview">{renderChart()}</div>;
};

export default ChartOverview;
