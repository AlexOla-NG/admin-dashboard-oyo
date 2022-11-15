import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const stackStyles = {
  alignItems: "center",
  pt: 16,
};

const btnStyles = {
  fontSize: "2rem",
  mt: 2,
  p: 2,
};

const Error = () => {
  return (
    <Stack sx={stackStyles}>
      <Typography variant="h2">An error occured</Typography>

      <Button
        component={RouterLink}
        to="/"
        sx={btnStyles}
        underline="none"
        variant="contained"
      >
        Go Home
      </Button>
    </Stack>
  );
};

export default Error;
