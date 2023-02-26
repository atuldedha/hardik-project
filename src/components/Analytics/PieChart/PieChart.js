import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      options={{
        layout: {
          padding: {
            right: 20,
            left: 180,
          },
        },
        plugins: {
          aspectRatio: 1,
          legend: {
            display: true,
            align: "center",
            position: "right",
            labels: {
              padding: 20,
            },
          },
        },

        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};

export default PieChart;
