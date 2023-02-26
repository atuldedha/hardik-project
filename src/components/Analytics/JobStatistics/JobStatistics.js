import React from "react";
import { Box, Typography } from "@mui/material";
import AnalyticsItem from "../AnalyticsItem/AnalyticsItem";

const JobStatistics = () => {
  return (
    <Box sx={{ marginTop: "130px" }}>
      {/* heading */}
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "47px",
          color: "var(--darkGray)",
          marginBottom: "10px",
          display: "inline-block",
        }}
      >
        Job Statistics
      </Typography>

      {/* statistics info */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 3fr 3fr",
          gap: "35px",
        }}
      >
        <AnalyticsItem title="Total Openings" totalNumber={52} />
        <AnalyticsItem title="Job Filled" totalNumber={179} showViewMore />
        <AnalyticsItem title="Applications Received" totalNumber="27*" />
      </Box>

      {/* date text */}
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
          marginBottom: "24px",
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

export default JobStatistics;
