import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// TODO: Tabs loses focus anytime we refresh browser
// https://stackoverflow.com/a/72219131 offers a reason why
// we need to seperate Tabs component from Home

const Home = ({ onSaveToLocalStorage }) => {
  // STUB: create shared state for toggling drawer in mobile view
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // STUB: save auth_token to local storage after successful login
  useEffect(() => {
    onSaveToLocalStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerToggle={handleDrawerToggle} />
      <Sidebar
        drawerWidth={drawerWidth}
        drawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // py: 3,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
