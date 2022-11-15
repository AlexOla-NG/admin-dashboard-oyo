import React from "react";
import { Box, Card, CardContent, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as TotalVerified } from "../../assets/images/totalVerified.svg";

const cardStyles = {
  border: "1px solid rgba(0, 0, 0, 0.1)",
  width: { xs: "20rem", xl: "25rem" },
  mt: 3
};

const cardContentStyles = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
};

const iconWrapperStyles = {
  scale: "2.3",
  mx: "1rem"
};

const textWrapperStyles = {
  ml: "1rem"
};

const titleStyles = {
  fontWeight: 700,
  whiteSpace: "nowrap"
};

const valueStyles = {
  color: "hsla(236, 13%, 26%, 60%)",
  fontSize: "1.4rem",
  fontWeight: 700
};

export default function BasicCard(props) {
  return (
    <Card elevation={0} sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <SvgIcon sx={iconWrapperStyles} viewBox="0 0  40 40">
          {props.icon}
        </SvgIcon>

        <Box sx={textWrapperStyles}>
          <Typography
            variant="body1"
            component="h5"
            gutterBottom
            sx={titleStyles}
          >
            {props.title}
          </Typography>

          <Typography component="p" sx={valueStyles}>
            {props.value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

BasicCard.defaultProps = {
  title: "Total verification",
  value: 140,
  icon: <TotalVerified />
};
