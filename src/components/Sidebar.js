import React from "react";
import { Box, Drawer } from "@mui/material";
import TabList from "./TabList";

const Sidebar = (props) => {
  const { drawerWidth, drawerToggle, mobileOpen, window } = props;

  const handleClose = () => {
    drawerToggle();
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="sidebar navigation"
    >
      {/* for mobile */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#F8F7FA",
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <TabList />
      </Drawer>

      {/* for desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#F8F7FA",
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <TabList />
      </Drawer>
    </Box>
  );
};
export default Sidebar;
