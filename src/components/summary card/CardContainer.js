import React from "react";
import Stack from "@mui/material/Stack";
import BasicCard from "./CustomCard";
import { ReactComponent as TotalVerified } from "../../assets/images/totalVerified.svg";
import { ReactComponent as PeoplePending } from "../../assets/images/peoplePending.svg";
import { ReactComponent as PeopleApproved } from "../../assets/images/peopleApproved.svg";
import { ReactComponent as PeopleRejected } from "../../assets/images/peopleRejected.svg";

const stackStyles = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-evenly", sm: "normal", lg: "space-between" },
  flexWrap: "wrap",
  gap: "1rem",
  my: 3
};

const CardContainer = (props) => {
  const cardDetails = [
    {
      title: "Total verification",
      value: 140,
      icon: <TotalVerified />
    },
    {
      title: "Pending",
      value: 30,
      icon: <PeoplePending />
    },
    {
      title: "Approved",
      value: 89,
      icon: <PeopleApproved />
    },
    {
      title: "Rejected",
      value: 21,
      icon: <PeopleRejected />
    }
  ];

  return (
    <Stack spacing={3} sx={stackStyles}>
      {cardDetails.map((item, index) => {
        return <BasicCard key={index} {...item} />;
      })}
    </Stack>
  );
};

export default CardContainer;

CardContainer.defaultProps = {
  defaultStats: {
    totalVerification: 419,
    pending: 69,
    approved: 420,
    rejected: 7
  }
};
