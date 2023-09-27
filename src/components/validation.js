import * as yup from "yup";
import CitiesData from "../mocks/Cities";
const ValidationSchema = yup.object().shape({
  CitiesData: yup.array().required("At least one skill is required"),
  // CitiesData: yup.array().of(
  //   yup.object().shape({
  //     value: yup
  //       .string()
  //       .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
  //       .required("city is required"),
  //     label: yup.string(),
  //   })
  // ),
});
export default ValidationSchema;
