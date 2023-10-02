import React from "react";
import CitiesData from "../mocks/Cities";
import { Autocomplete, Stack, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

function Search({ city, setCity }) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        [theme.breakpoints.down("md")]: {
          width: "100%",
          padding: "1rem 0",
        },
        margin: "0 auto",
        height: 30,
        padding: "0 10px",
        [theme.breakpoints.up("sm")]: {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          width: "300px",
          [theme.breakpoints.up("sm")]: {},
          display: "flex",
          alignItems: "center",
          paddingTop: "1rem",
          [theme.breakpoints.down("md")]: {
            padding: 0,
            margin: "1rem auto",
          },
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          s
          options={CitiesData}
          value={city}
          sx={{
            width: "85%",
            borderBottom: "none",
            margin: "0 auto",
            borderRadius: "4px",
            padding: "3px 5px",
            backgroundColor: "rgb(250 250 250 )",
            height: "100%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              margin: "0 auto",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
              padding: "0 5px",
            },
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
