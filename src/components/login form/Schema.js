import * as Yup from "yup";

// STUB: define form validation
const LoginSchema = Yup.object().shape({
  username: Yup.string("Provide a valid username").required(
    "Username is required"
  ),
  password: Yup.string()
    .min(5, "Passwords should be at least 5 characters long")
    .required("Password is required"),
});

export { LoginSchema };
