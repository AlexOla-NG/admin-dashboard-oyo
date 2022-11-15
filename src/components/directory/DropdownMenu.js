import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// TODO: stopped here
// adjust top for Popover

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#1E0A3C",
    border: "transparent",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "transparent",
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      minHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "21rem",
      padding: "0 1rem",
      boxShadow:
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      // position: "absolute",
      // left: "34rem",
      // top: "none",
    },
  },
};

const status = ["All", "Approved", "Pending", "Rejected", "No Upload"];

const actionBtnWrapper = {
  py: "1rem",
  pl: "0.7rem",
};

const DropdownMenu = () => {
  const [passportStatus, setPassportStatus] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPassportStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ mx: 1, width: 200 }}>
        <InputLabel
          id="multiple-checkbox-label"
          shrink={false}
          sx={{
            color: "primary.contrastText",
            fontSize: "1.14rem",
            position: "absolute",
            top: "calc(1% - 0.5em)",
            "&.Mui-focused": {
              color: "primary.contrastText",
            },
          }}
        >
          {passportStatus.length === 0 ? "Passport status" : ""}
        </InputLabel>
        <Select
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={passportStatus}
          onChange={handleChange}
          input={<BootstrapInput />}
          renderValue={(selected) => `Passport status: ${selected.join(", ")}`}
          SelectDisplayProps={{
            style: {
              backgroundColor: "#1E0A3C",
              color: "#FFF",
              fontSize: "1.14rem",
              padding: "8px 14px",
              minWidth: "2rem",
            },
          }}
          MenuProps={MenuProps}
        >
          {status.map((item) => (
            <MenuItem key={item} value={item} sx={{ pl: 0 }}>
              <Checkbox
                checked={passportStatus.indexOf(item) > -1}
                color="secondary"
              />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
          <Box sx={actionBtnWrapper}>
            <Button variant="contained-main">select</Button>
            <Button variant="contained-alt" sx={{ ml: "1rem" }}>
              cancel
            </Button>
          </Box>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownMenu;
