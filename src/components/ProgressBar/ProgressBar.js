import React from "react";
import { Box } from "@mui/system";

const ProgressBar = ({
  acheivedPercentage,
  fullWidthColor,
  acheivedWidthColor,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "20px",
        bgcolor: fullWidthColor,
        height: "16px",
      }}
    >
      <Box
        sx={{
          width: acheivedPercentage,
          bgcolor: acheivedWidthColor,
          borderRadius: "20px",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default ProgressBar;
