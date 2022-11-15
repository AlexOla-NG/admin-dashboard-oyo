import React from "react";
import { styled } from "@mui/material/styles";
import {
  Stack,
  SvgIcon,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactComponent as EmptyTableImage } from "../assets/images/emptyTable.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    borderBottom: "none",
    fontSize: 14,
  },
}));

const stackWrapper = {
  alignItems: "center",
  mt: "4rem",
  py: 5,
};

const iconWrapperStyles = {
  scale: "8",
  my: "4rem",
};

const textWrapper = {
  alignItems: "center",
  mt: 4,
};

const EmptyTable = (props) => {
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell colSpan={7}>
          <Stack sx={stackWrapper}>
            <SvgIcon viewBox="0 0 121 120" sx={iconWrapperStyles}>
              <EmptyTableImage />
            </SvgIcon>
            <Stack spacing={1} sx={textWrapper}>
              <Typography variant="h5" component="h3">
                No {props.title}
              </Typography>
              <Typography variant="body1" color="#605E5C">
                You currently do not have any {props.body}{" "}
              </Typography>
            </Stack>
          </Stack>
        </StyledTableCell>
      </TableRow>
    </TableBody>
  );
};

export default EmptyTable;

EmptyTable.defaultProps = {
  title: "user",
  body: "registered users",
};
