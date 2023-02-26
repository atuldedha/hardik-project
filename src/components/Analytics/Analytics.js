/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AnalyticsFinancialYear from "./AnalyticsFinancialYear/AnalyticsFinancialYear";
import AnalyticsInfo from "./AnalyticsInfo/AnalyticsInfo";
import AnalyticsLineChart from "./AnalyticsLineChart/AnalyticsLineChart";
import BarChartInfo from "./BarChartInfo/BarChartInfo";
import JobStatistics from "./JobStatistics/JobStatistics";
import PieChartInfo from "./PieChartInfo/PieChartInfo";
import {
  experienceData,
  jobData,
  jobPieChartData as jobPieChart,
  genderChartData,
  ctcBarChartData,
  collegePieChart,
} from "./staticData";

const Analytics = () => {
  // experience bar chart data
  const [experienceChartData, setEperienceChartData] = useState({
    labels: experienceData.map((item) => item.range),
    datasets: [
      {
        label: { display: false },
        data: experienceData.map((item) => item.value),
        backgroundColor: ["#FFD76E"],
        borderColor: "#FFD76E",
        borderWidth: 1,
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  });
  //   job bar chart data
  const [jobChartData, setJobChartData] = useState({
    labels: jobData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: jobData.map((item) => item.value),
        backgroundColor: ["#9F629A"],
        borderColor: "#9F629A",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  });
  //   job pie chart data
  const [jobPieChartData, setJobPieChartData] = useState({
    labels: jobPieChart.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: jobPieChart.map((item) => item.value),
        backgroundColor: ["#5E3FBE", "#F4F0FD", "#E5DAFB", "#CBB6F8"],
      },
    ],
  });
  //   gender wise pie chart
  const [genderPieChart, setGenderPieChart] = useState({
    labels: genderChartData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: genderChartData.map((item) => item.value),
        backgroundColor: ["#67C587", "#C9E5D0"],
      },
    ],
  });
  // jobs filled bar chart data
  const [filledJobData, setFilledJobData] = useState({
    labels: jobData.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: jobData.map((item) => item.value),
        backgroundColor: ["#67C587"],
        borderColor: "#67C587",
        barPercentage: 0.5,
        barThickness: 20,
      },
    ],
  });
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

  //   location job filled pie chart data
  const [locationPieChartData, setLocationPieChartData] = useState({
    labels: jobPieChart.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: jobPieChart.map((item) => item.value),
        backgroundColor: ["#3F81BE", "#F0F9FD", "#DAF5FB", "#B6E8F8"],
      },
    ],
  });

  //   colllege wise job filled pie chart data
  const [collegePieChartData, setCollegePieChartData] = useState({
    labels: collegePieChart.map((item) => item.name),
    datasets: [
      {
        label: { display: false },
        data: collegePieChart.map((item) => item.value),
        backgroundColor: [
          "#FF7008",
          "#9B7E53",
          "#789737",
          "#227E93",
          "#815B8E",
        ],
      },
    ],
  });
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
      <JobStatistics />

      {/* bar charts to represent statistics */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
          marginTop: "16px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <BarChartInfo
          chartData={experienceChartData}
          heading="Applications based on Experience"
          xAxisLabel="Years of Experience"
          yAxisLabel="Total Applicants"
        />
        {/* custom component to represent job bar chart */}
        <BarChartInfo
          chartData={jobChartData}
          heading="Job-Wise Applicants"
          xAxisLabel="Job Oppnenings"
          yAxisLabel="No of Applicants"
        />
      </Box>

      {/* pie charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
          marginTop: "16px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <PieChartInfo
          chartData={jobPieChartData}
          heading="Openings per-Job title"
        />
        {/* custom component to represent job bar chart */}
        <PieChartInfo
          chartData={genderPieChart}
          heading="Gender-Wise Applicants"
        />
      </Box>

      {/* barcharts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
          marginTop: "200px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <BarChartInfo
          chartData={filledJobData}
          heading="Total Jobs Filled"
          xAxisLabel="Job Title"
          yAxisLabel="Job Filled"
        />
        {/* custom component to represent job bar chart */}
        <BarChartInfo
          chartData={ctcChartData}
          heading="CTC Offered"
          xAxisLabel="Job Title"
          yAxisLabel="CTC (in lakhs)"
        />
      </Box>

      {/* pie charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          height: "330px",
          marginTop: "16px",
        }}
      >
        {/* custom component to represent experience bar chart */}
        <PieChartInfo
          chartData={locationPieChartData}
          heading="Geo Location-wise Jobs Filled"
        />
        {/* custom component to represent job bar chart */}
        <PieChartInfo
          chartData={collegePieChartData}
          heading="College-Wise Job Filled"
        />
      </Box>
    </Box>
  );
};

export default Analytics;
