import { Box } from "@mui/system";
import React from "react";

const SidebarItem = ({
  selectedImage,
  image,
  setSelected,
  index,
  selected,
}) => {
  return (
    <Box
      sx={{
        padding: "15px",
        bgcolor: selected === index ? "var(--darkGray)" : "inherit",
        borderRadius: "20px",
        ":hover": { cursor: "pointer" },
      }}
      onClick={() => setSelected(index)}
    >
      <img
        src={selected === index ? selectedImage : image}
        alt="database"
        className="sidebarIcon"
      />
    </Box>
  );
};

export default SidebarItem;
