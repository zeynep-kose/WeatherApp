import React from "react";
import CitiesData from "../mocks/Cities";
import { Autocomplete, Stack, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";

function Search({ city, setCity }) {
  return (
    <Stack sx={{ margin: "0 auto", height: 30 }}>
      <Box sx={{ width: "100%" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={CitiesData}
          value={city}
          sx={{
            width: "250px",
            borderBottom: "none",
            margin: "0 auto",
            borderRadius: "4px",
            padding: " 0 5px",
          }}
          name="city"
          onChange={(event, value) => {
            setCity(value);
          }}
          renderInput={(params) => (
            <TextField {...params} label="" placeholder="Search Place" />
          )}
        />
      </Box>
    </Stack>
  );
}

export default Search;
