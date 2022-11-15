import React from "react";
import { FormikProvider, useFormik } from "formik";
import { Grid, Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import validationSchema from "./validationSchema";

// STUB: formik state values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  ordersFulfilled: "",
  ordersCancelled: "",
};

const UserForm = ({ closeModal, API_URL }) => {
  const queryClient = useQueryClient();

  const submitNewUser = (newUser) => {
    return axios.post(API_URL, newUser);
  };

  const { mutate } = useMutation(submitNewUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("userList");
      // refetch();
    },
  });

  const onSubmit = (values, actions) => {
    // STUB: add unique id to user object
    const newUser = { ...values, id: uuidv4() };

    mutate(newUser);

    actions.resetForm();
    closeModal();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const {
    errors,
    touched,
    dirty,
    isValid,
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.firstName && errors.firstName)} // activate yup validation when field is out of focus
              helperText={touched.firstName && errors.firstName} // display error message
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Orders Fulfilled"
              variant="outlined"
              fullWidth
              name="ordersFulfilled"
              value={values.ordersFulfilled}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.ordersFulfilled && errors.ordersFulfilled)}
              helperText={touched.ordersFulfilled && errors.ordersFulfilled}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Orders Cancelled"
              variant="outlined"
              fullWidth
              name="ordersCancelled"
              value={values.ordersCancelled}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.ordersCancelled && errors.ordersCancelled)}
              helperText={touched.ordersCancelled && errors.ordersCancelled}
            />
          </Grid>
        </Grid>
        <Button
          disabled={!dirty || !isValid}
          variant="contained"
          color="primary"
          type="Submit"
          fullWidth
          sx={{ my: 2 }}
        >
          {isSubmitting ? "loading..." : "SUBMIT"}
        </Button>
      </form>
    </FormikProvider>
  );
};

export default UserForm;
