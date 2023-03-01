import React from "react";
import { Box } from "@mui/material";
import "../../css/Home/Home.css";
import JobStatus from "../../components/Home/JobStatus/JobStatus";
import Notifications from "../../components/Home/Notifications/Notifications";
import CampusRecruitment from "../../components/Home/CampusRecruitment/CampusRecruitment";
import MyCalendar from "../../components/Home/MyCalendar/MyCalendar";
import ConnectedColleges from "../../components/Home/ConnectedColleges/ConnectedColleges";
import Onboarding from "../../components/Home/Onboarding/Onboarding";
import Reports from "../../components/Home/Reports/Reports";

const Home = () => {
  return (
    <Box sx={{ marginTop: "30px", padding: "0 55px", marginBottom: "100px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* job status table component */}
        <JobStatus />
        {/* notifications column */}
        <Notifications />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* campus recruitment column */}
        <CampusRecruitment />
        {/* calendar column */}
        <MyCalendar />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr 3fr",
          gap: "20px",
        }}
      >
        {/* connected colleges */}
        <ConnectedColleges />

        {/* custom component to represent job bar chart */}
        <Reports />

        {/* onboarding */}
        <Onboarding />
      </Box>
    </Box>
  );
};

export default Home;
