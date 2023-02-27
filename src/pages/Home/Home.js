import React from "react";
import { Box } from "@mui/material";
import "../../css/Home/Home.css";
import JobStatus from "../../components/Home/JobStatus/JobStatus";
import Notifications from "../../components/Home/Notifications/Notifications";
import CampusRecruitment from "../../components/Home/CampusRecruitment/CampusRecruitment";
import MyCalendar from "../../components/Home/MyCalendar/MyCalendar";

const Home = () => {
  return (
    <Box sx={{ marginTop: "70px", padding: "0 65px", marginBottom: "140px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <JobStatus />
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
        <CampusRecruitment />
        <MyCalendar />
      </Box>
    </Box>
  );
};

export default Home;
