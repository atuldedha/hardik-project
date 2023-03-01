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
        padding: "35px 35px 30px 24px",
      }}
    >
      <Typography
        component="span"
        variant="h5"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 300,
          fontSize: "30px",
          lineHeight: "35px",
          color: "white",
          display: "inline-block",
          marginBottom: "10px",
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
            fontSize: "16px",
            lineHeight: "20px",
            color: "var(--grayColor)",
            width: "max-content",
            transition: "0.5s ease-in-out",
            ":hover": {
              cursor: "pointer",
              bgcolor: "var(--grayColor)",
              color: "var(--darkGray)",
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
