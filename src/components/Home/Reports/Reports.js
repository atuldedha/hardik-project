import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BarChart from "../../Analytics/BarChart/BarChart";
import { ctcBarChartData } from "../../Analytics/staticData";

const Reports = () => {
  // ctc bar chart data
  const [ctcChartData, setCtcChartData] = useState({
    labels: ctcBarChartData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: ctcBarChartData.map((item) => item.max / 10),
        backgroundColor: ["#FF9C09"],
        borderColor: "#FF9C09",
        barPercentage: 0.5,
        barThickness: 20,
      },
      {
        label: { display: false },
        data: ctcBarChartData.map((item) => item.value / 10),
        backgroundColor: ["#FFD76F"],
        borderColor: "#FFD76F",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  });
  return (
    <Box
      sx={{
        border: "1px solid var(--darkGray)",
        borderRadius: "10px",
        padding: "40px 35px",
      }}
    >
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 300,
          fontSize: "40px",
          lineHeight: "47px",
          color: "black",
          display: "flex",
          marginBottom: "45px",
          marginLeft: "40px",
        }}
      >
        Reports
      </Typography>

      <Box sx={{ width: "100%", height: "60%", marginBottom: "35px" }}>
        <BarChart
          chartData={ctcChartData}
          xAxisLabel="Job Title"
          yAxisLabel="CTC (in lakhs)"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            border: "2px solid var(--darkGray)",
            borderRadius: "20px",
            padding: "10px 40px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "22px",
            lineHeight: "25px",
            color: "var(--darkGray)",
            width: "max-content",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          View all Reports
        </Box>
      </Box>
    </Box>
  );
};

export default Reports;
