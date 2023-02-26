import { Box, Typography } from "@mui/material";
import React from "react";
import AnalyticsItem from "../AnalyticsItem/AnalyticsItem";

const CollegeNetwork = () => {
  return (
    <Box sx={{ marginTop: "200px" }}>
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
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        College Network
      </Typography>

      {/* statistics info */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 3fr 3fr",
          gap: "35px",
        }}
      >
        <AnalyticsItem title="Total Connections" totalNumber={179} />
        <AnalyticsItem title="New Connections" totalNumber={51} />
      </Box>
    </Box>
  );
};

export default CollegeNetwork;
