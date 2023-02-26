import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BarChart from "../BarChart/BarChart";

const BarChartInfo = ({ chartData, heading, xAxisLabel, yAxisLabel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid var(--darkGray)",
        borderRadius: "10px",
        padding: "20px 50px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
          color: "var(--darkGray)",
          fontSize: "20px",
          lineHeight: "23px",
          marginBottom: "20px",
        }}
      >
        {heading}
      </Typography>
      {/* applicants chart */}
      <Box sx={{ height: "100%", width: "100%" }}>
        <BarChart
          chartData={chartData}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
        />
      </Box>
    </Box>
  );
};

export default BarChartInfo;
