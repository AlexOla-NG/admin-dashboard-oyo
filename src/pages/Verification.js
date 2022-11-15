import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Searchbar from "../components/directory/Searchbar";
import CardContainer from "../components/summary card/CardContainer";
import BasicTable from "../components/table/BasicTable";

const contentWrapperStyles = {
  pt: "1rem",
  px: "2rem",
  minWidth: 650,
  width: "100%"
};

const toolbarWrapperStyles = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  py: "1rem"
};

const actionBtnsWrapperStyles = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "3rem"
};

const stateBtnWrapperStyles = {
  flexDirection: "row"
};

const Verification = (props) => {
  const [userData, setUserData] = useState(null);

  const handlePending = () => {
    setUserData(props.pending);
  };

  const handleApproved = () => {
    setUserData(props.approved);
  };
  const handleRejected = () => {
    setUserData(props.rejected);
  };
  return (
    <Box sx={contentWrapperStyles}>
      <Typography variant="h5" component="h1">
        Verification
      </Typography>

      <CardContainer />

      <Stack sx={toolbarWrapperStyles}>
        <Searchbar />
        <Stack sx={actionBtnsWrapperStyles}>
          <Stack sx={stateBtnWrapperStyles}>
            <Button variant="text-main" onClick={handlePending}>
              Pending
            </Button>
            <Button variant="text-main" onClick={handleApproved}>
              Approved
            </Button>
            <Button variant="text-main" onClick={handleRejected}>
              Rejected
            </Button>
          </Stack>
          <Button variant="contained-main">Upload CSV</Button>
        </Stack>
      </Stack>

      <BasicTable data={userData} />
    </Box>
  );
};

export default Verification;

Verification.defaultProps = {
  pending: {
    emptyData: {
      title: "pending verification",
      body: "pending passport verification"
    }
  },
  approved: {
    emptyData: {
      title: "approved verification",
      body: "approved passport verification"
    }
  },
  rejected: {
    emptyData: {
      title: "rejected verification",
      body: "rejected passport verification"
    }
  }
};
