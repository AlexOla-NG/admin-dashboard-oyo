import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";

const Searchbar = ({ setSearchQuery }) => {
  // setSearchQuery will be used to change state in the parent component
  // rather than setting state directly, we abstract it in a function
  return (
    <form>
      <OutlinedInput
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        variant="outlined"
        placeholder="Search"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
};

export default Searchbar;
