import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Searchbar from "../components/directory/Searchbar";
import DropdownMenu from "../components/directory/DropdownMenu";
import BasicTable from "../components/table/BasicTable";

// TODO: stopped here
// add GridToolbar from datagrid. check documentation for more info
// make it custom. we only need a search bar, & dropdown filter button

// new plan, we will use server side filtering for the search bar & dropdown filter button
// customizing mui datagrid will take much time compared to using server side approach
// don't forget to set filterMode prop to server & implement onFilterModelChange handler

// TODO: stopped here
// add grid component

const contentWrapperStyles = {
  pt: "1rem",
  px: "2rem",
  minWidth: 650
};

const searchAndMenuWrapperStyles = {
  flexDirection: "row",
  gap: 1.5
};

const actionBtnsWrapperStyles = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  py: 3
};

const Directory = () => {
  return (
    <Box sx={contentWrapperStyles}>
      <Typography variant="h5" component="h1">
        Directory
      </Typography>

      <Stack sx={actionBtnsWrapperStyles}>
        <Stack sx={searchAndMenuWrapperStyles}>
          <Searchbar />
          <DropdownMenu />
        </Stack>
        <Button variant="contained-main" sx={{ mt: { sm: 3, md: 0 } }}>
          Upload CSV
        </Button>
      </Stack>

      <BasicTable />
    </Box>
  );
};

export default Directory;
