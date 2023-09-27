import React from "react";
import CitiesData from "../mocks/Cities";
import {
  Autocomplete,
  Stack,
  Card,
  Box,
  CardContent,
  Icon,
  Typography,
  CardMedia,
} from "@mui/material";
import TextField from "@material-ui/core/TextField";
import ValidationSchema from "./validation.js";
import { useFormik, Error } from "formik";
function Search({ city, setCity }) {
  const formik = useFormik({
    initialValues: {
      city: "Bursa",
    },
    ValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);

      setCity(values.city);
    },
  });

  return (
    <Stack className="leftPart">
      <Box sx={{ width: "100%" }}>
        <form>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={CitiesData}
            value={formik.values.city}
            sx={{ width: 300 }}
            name="cittyChange"
            onChange={(event, value) => {
              formik.setFieldValue("city", value);
              setCity(value);
            }}
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="Search Place" />
            )}
            error={formik.touched.city && Boolean(formik.errors.city)}
          />
        </form>
      </Box>
    </Stack>
  );
}

export default Search;
