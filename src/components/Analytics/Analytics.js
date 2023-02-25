import { Box, Typography } from "@mui/material";
import React from "react";
import AnalyticsItem from "./AnalyticsItem/AnalyticsItem";
import ArrowDown from "../../images/downGray.svg";
import "../../css/Analytics/Analytics.css";

const Analytics = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: "0 65px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "25px",
            leading: "29px",
            color: "black",
          }}
        >
          Financial Year:{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid var(--darkGray)",
            padding: "10px 25px",
            borderRadius: "10px",
            gap: "10px",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "24px",
              color: "var(--darkGray)",
            }}
          >
            2023
          </Typography>
          <img src={ArrowDown} alt="arrow" className="analyticsArrowDown" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 3fr 3fr",
          gap: "35px",
        }}
      >
        <AnalyticsItem title="Total Openings" totalNumber={52} showViewMore />
        <AnalyticsItem
          title="Total Connections"
          totalNumber={179}
          showViewMore
        />
        <AnalyticsItem title="Total Dives" totalNumber="27*" showViewMore />
      </Box>
    </Box>
  );
};

export default Analytics;
