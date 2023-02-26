import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import AnalyticsFinancialYear from "./AnalyticsFinancialYear/AnalyticsFinancialYear";
import AnalyticsInfo from "./AnalyticsInfo/AnalyticsInfo";
import AnalyticsLineChart from "./AnalyticsLineChart/AnalyticsLineChart";
import CollegeNetwork from "./CollegeNetworks/CollegeNetwork";
import DriveStatistics from "./DriveStatistics/DriveStatistics";
import JobStatistics from "./JobStatistics/JobStatistics";

const Analytics = () => {
  const jobStatRef = useRef();
  const collegeNetworkRef = useRef();
  const driveStatRef = useRef();

  const handleNavigation = (sectionName) => {
    if (sectionName === "job") {
      jobStatRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "college") {
      collegeNetworkRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (sectionName === "drive") {
      driveStatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: "0 65px",
        marginBottom: "140px",
      }}
    >
      {/*financial year text */}
      <AnalyticsFinancialYear />

      {/* Analytics Info Cards */}
      <AnalyticsInfo handleNavigation={handleNavigation} />

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
      {/* Line Chart */}
      <AnalyticsLineChart />

      {/* job statistics */}
      <JobStatistics innerRef={jobStatRef} />

      {/* college netwrok */}
      <CollegeNetwork innerRef={collegeNetworkRef} />

      {/* drive stats */}
      <DriveStatistics innerRef={driveStatRef} />
    </Box>
  );
};

export default Analytics;
