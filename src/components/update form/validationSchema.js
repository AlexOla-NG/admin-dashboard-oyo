import * as Yup from "yup";

//validation schema for UserForm
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  ordersFulfilled: Yup.number().positive().integer().required("Required"),
  ordersCancelled: Yup.number().positive().integer().required("Required"),
});

export default validationSchema;
