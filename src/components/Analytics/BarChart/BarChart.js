import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData, xAxisLabel, yAxisLabel, showLegend }) => {
  return (
    // <Box>
    //   <Box sx={{ display: "flex", flexDirection: "column" }}>
    //     <Box sx={{ display: "flex", alignItems: "center" }}>
    //       <Box sx={{ width: "20px", height: "20px", bgcolor: "black" }} />
    //       <Typography>Min</Typography>
    //     </Box>
    //   </Box>
    // <Box>
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            // display: false,
            display: showLegend ? true : false,
            align: "end",
            position: "top",
            labels: {
              padding: 5,
            },
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
    //   </Box>
    // </Box>
  );
};

export default BarChart;
