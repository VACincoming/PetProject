import React from "react";
import { Formik, Field, FastField, Form } from "formik";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomInput from "components/CustomInput";
import CustomButton from "components/CustomButton";
import { registrationSchema } from "validation/UserValidation";
import { isError } from "helpers/helpers";
import styled from "styled-components";
import { registrationApi } from "api/auth.api";

const RegistrationFormWrapper = styled.div`
    margin-top: 16px;
    .MuiButton-contained {
        margin: 8px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        box-shadow: 0 0 0 30px #fafafa inset !important;
    }
    .MuiOutlinedInput-adornedEnd {
        padding-right: 8px;
    }
    .MuiInputAdornment-root .MuiButtonBase-root {
        padding-right: 0px;
    }
`;

const RegistrationForm: React.FC<any> = () => {
    const { t } = useTranslation();
    return (
        <RegistrationFormWrapper>
            {/* <Formik
                validateOnChange
                initialValues={{
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                validationSchema={registrationSchema}
                onSubmit={(data) => {
                    Reflect.deleteProperty(data, "repeatPassword");
                    registrationApi(data);
                }}
            > */}
                {({ errors, values }:any) => {
                    return (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        variant="outlined"
                                        name="email"
                                        margin="none"
                                        type="text"
                                        required
                                        id="email"
                                        key="email"
                                        fullWidth
                                        label={t("auth.email")}
                                        autoComplete="email"
                                        value={values.email}
                                        as={CustomInput}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        variant="outlined"
                                        name="password"
                                        margin="none"
                                        type="password"
                                        id="password"
                                        key="password"
                                        required
                                        fullWidth
                                        label={t("auth.password")}
                                        autoComplete="current-password"
                                        value={values.password}
                                        as={CustomInput}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        variant="outlined"
                                        name="repeatPassword"
                                        margin="none"
                                        id="repeatPassword"
                                        key="repeatPassword"
                                        type="password"
                                        required
                                        fullWidth
                                        label={t("auth.repeatPassword")}
                                        autoComplete="current-password"
                                        value={values.repeatPassword}
                                        as={CustomInput}
                                    />
                                </Grid>
                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={isError(errors)}
                                    // className={classes.submit}
                                >
                                    {t("auth.signUp")}
                                </CustomButton>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <RouterLink to="/login">
                                            {t("auth.haveAccount")}
                                        </RouterLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            {/* </Formik> */}
        </RegistrationFormWrapper>
    );
};

export default RegistrationForm;

/*
import React from 'react';
import { 
  Formik,
  Field,
  Form
} from "formik";
import { Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import CustomInput from 'components/CustomInput';
import CustomButton from 'components/CustomButton';
import CustomRadio from 'components/CustomRadio';
import CustomDatePicker from 'components/CustomDatePicker';
import validationSchema from 'validation/UserValidation';

const RegistrationForm: React.FC<any> = () => {
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          firstName:'',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          city: '',
          sex: '',
          password: '',
          repeatPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data);
        }}
      >
        {({ values, isSubmitting, isValid, dirty }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field 
                    variant="outlined"
                    name="firstName"
                    type="text"
                    label="First Name"
                    required
                    fullWidth
                    maxLength={25}
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field 
                    variant="outlined"
                    name="lastName"
                    type="text"
                    required
                    fullWidth
                    label="Last Name"
                    maxLength={25}
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div>Sex</div>
                  <CustomRadio 
                    name="sex"
                    type="radio"
                    value="Male"
                    label="Male"/>
                  <CustomRadio 
                    name="sex"
                    type="radio"
                    value="Female"
                    label="Female"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomDatePicker />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    name="phone"
                    type="text"
                    required
                    fullWidth
                    label="Phone Number"
                    maxLength={12}
                    autoComplete="phone"
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    name="email"
                    type="text"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    variant="outlined"
                    name="country"
                    type="text"
                    required
                    fullWidth
                    label="Country"
                    autoComplete="country"
                    maxLength={25}
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    variant="outlined"
                    name="city"
                    type="text"
                    required
                    fullWidth
                    label="City"
                    autoComplete="city"
                    maxLength={25}
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    variant="outlined"
                    name="password"
                    type="password"
                    required
                    fullWidth
                    label="Password"
                    autoComplete="current-password"
                    as={CustomInput}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    variant="outlined"
                    name="repeatPassword"
                    type="password"
                    required
                    fullWidth
                    label="Repeat Password"
                    autoComplete="current-password"
                    as={CustomInput}
                  />
                </Grid>
                <CustomButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={!isValid || !dirty}
                  // className={classes.submit}
                >
                  Sign Up
                </CustomButton> 
                <Grid container justify="flex-end">
                  <Grid item>
                    <RouterLink to="/login">
                      Already have an account? Sign in
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        }
      </Formik> 
    </div>
  )
}

export default RegistrationForm;
*/
