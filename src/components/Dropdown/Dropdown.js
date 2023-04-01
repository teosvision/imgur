import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({ options, label, action, value }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={action}
        >
          {options.map(({ value, description }) => (
            <MenuItem value={value}>{description}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Dropdown;
