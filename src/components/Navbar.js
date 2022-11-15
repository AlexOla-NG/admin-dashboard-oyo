import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ drawerToggle }) => {
  const handleClick = () => {
    drawerToggle();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FFF",
        boxShadow: "none",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#FFF",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="primary"
          noWrap
          component="div"
          sx={{ fontWeight: 600 }}
        >
          Logo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
