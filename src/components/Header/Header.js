import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({ selected, setSelected }) => {
  return (
    <Box
      sx={{
        height: "130px",
        bgcolor: "var(--grayColor)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px 0 22px",
        // position: "sticky",
        // top: "0",
        // zIndex: "20",
        filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.5))",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "700",
          fontSize: "40px",
          lineHeight: "46px",
          color: "black",
          textTransform: "uppercase",
        }}
      >
        Analytics
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
            fontSize: "50px",
            lineHeight: "58px",
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
