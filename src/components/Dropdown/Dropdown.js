import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Dropdown.scss";
const Dropdown = ({ options, action, value }) => {
  return (
    <FormControl variant="outlined" size="small" fullWidth>
      <Select value={value} onChange={action}>
        {options.map(({ value, description }) => (
          <MenuItem key={value} value={value}>
            {description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Dropdown;
