/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "./staticData";
import Chart from "chart.js/auto";
import { Box } from "@mui/system";
import LineChart from "./LineChart/LineChart";
import { Typography } from "@mui/material";
const AnalyticsLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: { display: false },
        data: data.map((item) => item.value),
        // backgroundColor: [
        //   "rgba(75,192,192,1)",
        //   "#ecf0f1",
        //   "#f0331a",
        //   "#f3ba2f",
        //   "#2a71d0",
        // ],
        borderWidth: 2,
        borderColor: "#00A3FF",
      },
    ],
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "28px 72px 10px 22px",
        border: "1px solid var(--darkGray)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "700",
          fontSize: "40px",
          lineHeight: "47px",
          color: "black",
          marginBottom: "21px",
          marginLeft: "50px",
        }}
      >
        Hiring Graph
      </Typography>
      <LineChart chartData={chartData} />
    </Box>
  );
};

export default AnalyticsLineChart;
