import React from "react";
import * as yup from "yup";
import CitiesData from "../mocks/Cities";
import { Autocomplete, Stack, Card, Box } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

const ValidationSchema = yup.object().shape({
  city: yup.string().trim().required("City is required"),
});

function Search({ city, setCity }) {
  const formik = useFormik({
    initialValues: {
      city: "Bursa",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);

      setCity(values.city);
    },
  });
  console.log("theDamnErros:", formik.errors);

  return (
    <Stack>
      <Box sx={{ width: "100%" }}>
        <form onSubmit={formik.handleSubmit}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={CitiesData}
            value={formik.values.city}
            sx={{ width: 300 }}
            name="cityChange"
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
