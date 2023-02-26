import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BarChartInfo from "../BarChartInfo/BarChartInfo";
import PieChartInfo from "../PieChartInfo/PieChartInfo";
import { campusData, driveData, locationWiseData } from "../staticData";

const DriveStatistics = ({ innerRef }) => {
  //campus drive wise hiring data
  const [campusChartData, setCampusChartData] = useState({
    labels: campusData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: campusData.map((item) => item.value),
        backgroundColor: ["#E5C646", "#F9F5E5", "#F4E9BD"],
      },
    ],
  });

  // drive wise hiring data
  const [driveChartData, setDriveChartData] = useState({
    labels: driveData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: driveData.map((item) => item.value),
        backgroundColor: ["#FF7008", "#FFD28F"],
      },
    ],
  });

  //   location wise chart data
  const [locationChartData, setLocationChartData] = useState({
    labels: locationWiseData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: locationWiseData.map((item) => item.value),
        backgroundColor: ["#A39C00"],
        borderColor: "#A39C00",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  });
  return (
    <Box
      sx={{
        marginTop: "150px",
      }}
      ref={innerRef}
    >
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "47px",
          color: "var(--darkGray)",
          display: "inline-block",
          marginBottom: "35px",
        }}
      >
        Drive Statistics
      </Typography>
      {/* pie charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <PieChartInfo chartData={campusChartData} heading="Types of Drives" />
        {/* custom component to represent job bar chart */}
        <PieChartInfo
          chartData={driveChartData}
          heading="New v/s Recurring Campus Drives"
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
          marginTop: "15px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <BarChartInfo
          chartData={locationChartData}
          heading="Location-Wise Openings"
          xAxisLabel="Job Openings"
          yAxisLabel="Total Drives"
        />
      </Box>
    </Box>
  );
};

export default DriveStatistics;