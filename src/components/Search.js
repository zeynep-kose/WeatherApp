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
import { useFormik, error } from "formik";
import {} from "@mui/material";
function Search({ city, setCity }) {
  const formik = useFormik({
    initialValues: {
      city: "",
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

// import React from "react";
// import CitiesData from "../mocks/Cities";
// import { Autocomplete } from "@mui/material";
// import TextField from "@material-ui/core/TextField";
// import { useFormik } from "formik";
// import validationSchema from "./validation.js";

// function Search({ city, setCity }) {
//   const formik = useFormik({
//     initialValues: {
//       city: "", // Add any other initial values for your form here
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission here
//       console.log("Form submitted with values:", values);
//     },
//   });

//   const cityChange = (e) => {
//     const inputValue = e.target.value.toLowerCase();

//     const filteredCities = CitiesData.filter((item) =>
//       item.toLowerCase().includes(inputValue)
//     );

//     setCity(filteredCities);
//   };

//   return (
//     <div className="leftPart">
//       <div className="formPart">
//         <form onSubmit={formik.handleSubmit}>
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={CitiesData}
//             sx={{ width: 300 }}
//             value={formik.values.city}
//             onChange={(event, value) => {
//               formik.setFieldValue("city", value);
//             }}
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label=""
//                 placeholder="Search Place"
//                 error={formik.touched.city && Boolean(formik.errors.city)}
//                 helperText={formik.touched.city && formik.errors.city}
//               />
//             )}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Search;
