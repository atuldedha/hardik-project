import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, xAxisLabel, yAxisLabel }) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
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
