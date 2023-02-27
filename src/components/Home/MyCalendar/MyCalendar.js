import { Box } from "@mui/system";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../../css/Home/Home.css";
import "react-calendar/dist/Calendar.css";
import { Typography } from "@mui/material";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Box
      sx={{
        bgcolor: "var(--darkGray)",
        border: "1px solid var(--darkGray)",
        borderRadius: "20px",
        padding: "35px 35px 70px 24px",
      }}
    >
      <Typography
        component="span"
        variant="h5"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 300,
          fontSize: "50px",
          lineHeight: "58px",
          color: "white",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        Calendar
      </Typography>
      <Calendar onChange={onChange} value={value} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            border: "2px solid var(--grayColor)",
            borderRadius: "20px",
            padding: "10px 40px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "22px",
            lineHeight: "25px",
            color: "var(--grayColor)",
            width: "max-content",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          View all Events
        </Box>
      </Box>
    </Box>
  );
};

export default MyCalendar;
