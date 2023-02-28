import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData, paddingLeft }) => {
  return (
    <Pie
      data={chartData}
      options={{
        layout: {
          padding: {
            right: 50,
            left: paddingLeft,
          },
        },
        plugins: {
          aspectRatio: 1,
          legend: {
            display: true,
            align: "center",
            position: "right",
            labels: {
              padding: 3,
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
