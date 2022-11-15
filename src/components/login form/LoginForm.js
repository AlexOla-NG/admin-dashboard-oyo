import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { LoadingButton } from "@mui/lab";
import { motion } from "framer-motion";
import { LoginSchema } from "./Schema";
import { animate } from "./animation";

const LoginForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // get home directory

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");
      setTimeout(() => {
        console.log("submited!!");
        setAuth((prevValue) => !prevValue);
        navigate(from, { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              py: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="Username"
              {...getFieldProps("username")} // hooks up onBlur and onChange for specific fields
              error={Boolean(touched.username && errors.username)} // activate yup validation when field is out of focus
              helperText={touched.username && errors.username} // display error message
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link href="#" variant="body1">
              Forgot password?
            </Link>
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                fontSize: "1.14rem",
                px: "16px",
                py: "10px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {isSubmitting ? "loading..." : "Sign in"}
            </LoadingButton>
            <Typography variant="body2" sx={{ pt: 2 }}>
              By signing in, you are agreeing to our{" "}
              <Link href="#">Terms & Conditions and Privacy Policy</Link>
            </Typography>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
