import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import LoginForm from "../components/login form/LoginForm";
import { fadeInUp } from "../components/login form/animation";

import OyoLogo from "../assets/images/oyo logo.png";
import PrunedgeLogo from "../assets/images/prunedge logo.png";

//////////////////////////////////
const RootStyle = styled("div")({
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  padding: "16px 24px",
  textAlign: "left",
});

const LoginFormStyle = styled(Box)({
  padding: "0 24px 24px",
  // textAlign: "left",
});

const ContentStyle = styled("div")({
  background: "#fff",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 0px 4px 4px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "auto",
  // padding: 24,
  maxWidth: 400,
});

const ImageWrapperStyle = {
  alignItems: "center",
  mt: 5,
  pb: 4,
  textAlign: "center",
};

const ImageStyle = {
  width: "max-content",
  height: "auto",
};

const Login = ({ setAuth }) => {
  return (
    <div style={{ background: "#F5F7FA" }}>
      <RootStyle>
        <Container maxWidth="sm">
          <Stack sx={ImageWrapperStyle} spacing={2}>
            <img
              src={OyoLogo}
              alt="Oyo State Government Coat of Arms"
              style={ImageStyle}
            />
            <Typography variant="h5" component="h1">
              Oyo Data Management Solution
            </Typography>
          </Stack>
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Typography variant="body1">
                Sign in with your username
              </Typography>
            </HeadingStyle>
            <Divider />
            <LoginFormStyle>
              <LoginForm setAuth={setAuth} />
            </LoginFormStyle>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Stack sx={ImageWrapperStyle} spacing={2}>
        <img
          src={PrunedgeLogo}
          alt="prunedge technologies"
          style={{ width: "93.64px" }}
        />
        <Typography variant="body2" color="secondary.main">
          Powered by Prunedge
        </Typography>
      </Stack>
    </div>
  );
};

export default Login;
