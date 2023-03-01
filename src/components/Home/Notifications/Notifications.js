import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const boldTextStyle = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "23px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "black",
  marginBottom: "20px",
  display: "inline-block",
};

const Notifications = () => {
  return (
    <Box
      sx={{
        border: "1px solid var(--darkGray)",
        borderRadius: "20px",
        bgcolor: "var(--blue2)",
        padding: "30px 50px",
      }}
    >
      <Typography
        component="span"
        variant="h5"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 300,
          fontSize: "30px",
          lineHeight: "46px",
          color: "black",
          display: "inline-block",
          marginBottom: "25px",
        }}
      >
        Notifications
      </Typography>

      <Typography sx={{ ...boldTextStyle }}>
        Fermentum leo vel orci porta non pulvinar. Sit amet venenatis urna
        cursus
      </Typography>
      <Typography sx={{ ...boldTextStyle }}>
        Eget dolor morbi non arcu. Nulla pharetra diam sit amet nisl suscipit
        adipiscing bibendum.
      </Typography>

      <Typography sx={{ ...boldTextStyle, fontWeight: 400 }}>
        Vitae justo eget magna fermentum iaculis eu non. Sapien faucibus et
        molestie ac feugiat sed.
      </Typography>
      <Typography sx={{ ...boldTextStyle, fontWeight: 400 }}>
        Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.
      </Typography>
      <Typography sx={{ ...boldTextStyle, fontWeight: 400 }}>
        Sollicitudin ac orci phasellus egestas tellus. Dictumst quisque sagittis
        purus sit amet volutpat consequat mauris nunc.
      </Typography>
    </Box>
  );
};

export default Notifications;
