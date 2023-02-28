import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import AnalyticsFinancialYear from "../../components/Analytics/AnalyticsFinancialYear/AnalyticsFinancialYear";
import AnalyticsInfo from "../../components/Analytics/AnalyticsInfo/AnalyticsInfo";
import AnalyticsLineChart from "../../components/Analytics/AnalyticsLineChart/AnalyticsLineChart";
import CollegeNetwork from "../../components/Analytics/CollegeNetworks/CollegeNetwork";
import DriveStatistics from "../../components/Analytics/DriveStatistics/DriveStatistics";
import JobStatistics from "../../components/Analytics/JobStatistics/JobStatistics";

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
          marginBottom: "15px",
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
