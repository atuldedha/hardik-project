import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CollegeItem = ({ image, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "10px",
      }}
    >
      <Avatar alt="image" src={image} sx={{ width: "40px", height: "40px" }} />
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 300,
          fontSize: "28px",
          lineHeight: "32px",
          color: "black",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CollegeItem;
