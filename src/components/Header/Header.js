import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({ selected }) => {
  return (
    <Box
      sx={{
        height: "70px",
        bgcolor: "var(--grayColor)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px 0 20px",
        position: "sticky",
        top: "0",
        zIndex: "20",
        filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.5))",
      }}
    >
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "700",
          fontSize: "25px",
          lineHeight: "46px",
          color: "black",
          textTransform: "uppercase",
        }}
      >
        {selected === 1 ? "Hiring Central" : selected === 4 ? "Analytics" : ""}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Avatar sx={{ bgcolor: "var(--darkGray)" }} alt="name" src="">
          J
        </Avatar>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "50px",
            color: "black",
            textTransform: "lowercase",
          }}
        >
          Jack
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            color: "var(--darkGray)",
          }}
          fontSize="large"
        />
      </Box>
    </Box>
  );
};

export default Header;
