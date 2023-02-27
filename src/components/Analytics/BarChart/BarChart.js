import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, xAxisLabel, yAxisLabel, showLegend }) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: showLegend ? true : false,
            title: {
              text: ["Min", "Max"],
            },
            // labels: ["Min", "Max"],
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: yAxisLabel,
            },
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: xAxisLabel,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
