import React from "react";
// import * as yup from "yup";
import CitiesData from "../mocks/Cities";
import { Autocomplete, Stack, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";

function Search({ city, setCity }) {
  return (
    <Stack sx={{ height: "100%" }}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <form>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={CitiesData}
            value={city}
            sx={{ width: 300 }}
            name="city"
            onChange={(event, value) => {
              setCity(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="Search Place" />
            )}
          />
        </form>
      </Box>
    </Stack>
  );
}

export default Search;
