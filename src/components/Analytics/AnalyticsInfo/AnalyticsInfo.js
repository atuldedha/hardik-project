import { Box } from "@mui/material";
import React from "react";
import AnalyticsItem from "../AnalyticsItem/AnalyticsItem";

const AnalyticsInfo = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 3fr 3fr",
        gap: "35px",
      }}
    >
      <AnalyticsItem title="Total Openings" totalNumber={52} showViewMore />
      <AnalyticsItem title="Total Connections" totalNumber={179} showViewMore />
      <AnalyticsItem title="Total Dives" totalNumber="27*" showViewMore />
    </Box>
  );
};

export default AnalyticsInfo;
