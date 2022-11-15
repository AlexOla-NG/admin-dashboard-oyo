import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tab, Tabs, Toolbar } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const TabList = () => {
  // STUB: manage state value for tab change
  const [tabValue, setTabValue] = useState(false);
  const location = useLocation();

  // STUB: track tabValue when browser refresh
  useEffect(() => {
    location.pathname === "/directory" ? setTabValue(0) : setTabValue(1);
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const navlist = [
    {
      text: "Directory",
      icon: <PersonOutlineOutlinedIcon />,
      to: "/directory",
      tValue: 0,
    },
    {
      text: "Verification",
      icon: <BadgeOutlinedIcon />,
      to: "/verification",
      tValue: 1,
    },
  ];

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  return (
    <div>
      <Toolbar />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Vertical tabs"
        sx={{ mt: "1.5rem" }}
      >
        {navlist.map((item, index) => {
          const { text, icon, to, tValue } = item;
          return (
            <Tab
              key={index}
              component={Link}
              to={to}
              icon={icon}
              iconPosition="start"
              label={text}
              value={tValue}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabList;
