import { Box } from "@mui/system";
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <Box sx={{ width: "100%", height: "280px" }}>
      <Line
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
                text: "Total Connections",
              },
            },
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Months",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default LineChart;
