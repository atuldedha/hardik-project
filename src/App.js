import { Box } from "@mui/material";
import { useState } from "react";
import Analytics from "./pages/Analytics/Analytics";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  const [selected, setSelected] = useState(4);
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
      <Box>
        {/* sidebar component */}
        <Sidebar selected={selected} setSelected={setSelected} />
      </Box>
      <Box sx={{ width: "100%", marginLeft: "100px" }}>
        {/* header component */}
        <Header selected={selected} setSelected={setSelected} />
        {/* rendering components based on tab selection */}

        {/* selected === 1 */}
        {selected === 1 ? <Home /> : ""}

        {/* selected === 4 */}
        {selected === 4 ? <Analytics /> : ""}
      </Box>
    </Box>
  );
}

export default App;
