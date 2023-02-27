import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { collegeData } from "../staticData";
import CollegeItem from "./CollegeItem/CollegeItem";

const ConnectedColleges = () => {
  return (
    <Box
      sx={{
        border: "1px solid var(--darkGray)",
        borderRadius: "20px",
        bgcolor: "var(--blue2)",
        padding: "30px",
      }}
    >
      <Typography
        component="span"
        variant="h5"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "300",
          fontSize: "35px",
          lineHeight: "41px",
          color: "black",
          display: "inline-block",
          marginBottom: "50px",
        }}
      >
        Recently Connected Colleges
      </Typography>

      {collegeData.map((data) => (
        <CollegeItem key={data.id} name={data.collegeName} image={data.image} />
      ))}
    </Box>
  );
};

export default ConnectedColleges;
