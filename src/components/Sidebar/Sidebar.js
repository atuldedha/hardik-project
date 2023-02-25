import { Box } from "@mui/material";
import React from "react";
import Home from "../../images/home.svg";
import HomeWhite from "../../images/homeWhite.svg";
import DatabaseImg from "../../images/database.svg";
import DatabaseWhiteImg from "../../images/databaseWhite.svg";
import Tab3 from "../../images/tab3.svg";
import Tab3White from "../../images/tab3White.svg";
import Chart from "../../images/chart.svg";
import ChartWhite from "../../images/chartWhite.svg";
import "../../css/Sidebar/Sidebar.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "sticky",
        left: 0,
        bgcolor: "var(--grayColor)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "110px",
        padding: "0 24px",
      }}
    >
      <SidebarItem
        index={1}
        setSelected={setSelected}
        selected={selected}
        selectedImage={HomeWhite}
        image={Home}
      />
      <SidebarItem
        index={2}
        setSelected={setSelected}
        selected={selected}
        selectedImage={DatabaseWhiteImg}
        image={DatabaseImg}
      />
      <SidebarItem
        index={3}
        setSelected={setSelected}
        selected={selected}
        selectedImage={Tab3White}
        image={Tab3}
      />
      <SidebarItem
        index={4}
        setSelected={setSelected}
        selected={selected}
        selectedImage={ChartWhite}
        image={Chart}
      />
    </Box>
  );
};

export default Sidebar;