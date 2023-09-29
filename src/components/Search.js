import React from "react";
import CitiesData from "../mocks/Cities";
import { Autocomplete, Stack, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";

function Search({ city, setCity }) {
  return (
    <Stack sx={{ margin: "0 auto", height: 30, width: "300px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",

          paddingTop: "16px",
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={CitiesData}
          value={city}
          sx={{
            width: "210px",
            borderBottom: "none",
            margin: "0 auto",
            borderRadius: "4px",
            padding: " 0 5px",
            // backgroundColor: "rgb(250 250 250 )",
            backgroundColor: "pink",
            height: "100%",
          }}
          name="city"
          onChange={(event, value) => {
            setCity(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder="Search Place"
              style={{ color: "da" }}
            />
          )}
        />
      </Box>
    </Stack>
  );
}

export default Search;
