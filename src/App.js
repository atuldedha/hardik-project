import { Box } from "@mui/material";
import { useState } from "react";
import Analytics from "./components/Analytics/Analytics";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [selected, setSelected] = useState(4);
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box>
        {/* sidebar component */}
        <Sidebar selected={selected} setSelected={setSelected} />
      </Box>
      <Box sx={{ width: "100%" }}>
        {/* header component */}
        <Header selected={selected} setSelected={setSelected} />
        {/* rendering components based on tab selection */}

        {/* selected === 4 */}
        {selected === 4 ? <Analytics /> : ""}
      </Box>
    </Box>
  );
}

export default App;
