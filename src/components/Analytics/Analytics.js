import { Box, Typography } from "@mui/material";
import React from "react";
import AnalyticsFinancialYear from "./AnalyticsFinancialYear/AnalyticsFinancialYear";
import AnalyticsInfo from "./AnalyticsInfo/AnalyticsInfo";

const Analytics = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: "0 65px",
      }}
    >
      {/*financial year text */}
      <AnalyticsFinancialYear />
      {/* Analytics Info Cards */}
      <AnalyticsInfo />
      {/* current Date Text */}
      <Typography
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "300",
          color: "black",
          fontSize: "20px",
          lineHeight: "23px",
          display: "flex",
          marginTop: "10px",
          gap: "6px",
        }}
      >
        Till Date:
        <Typography
          sx={{ fontWeight: "700", fontSize: "25px", lineHeight: "29px" }}
        >
          *
        </Typography>
      </Typography>
    </Box>
  );
};

export default Analytics;
