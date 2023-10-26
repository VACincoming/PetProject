import React from 'react';
import { Field, FastField, Form } from 'formik';
import { Grid } from '@mui/material';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomInput from 'customComponents/CustomInput';
import CustomButton from 'customComponents/CustomButton';
import CustomForm from 'customComponents/CustomForm';
import { registrationSchema } from 'validation/UserValidation';
import { isError } from 'helpers/helpers';
import { registrationApi } from 'api/auth.api';
import './styles.scss';

const RegistrationForm = () => {
    const { t } = useTranslation();
    const history = useHistory();
    return (
        <div data-component="registration-form">
            <CustomForm
                validateOnChange
                initialValues={{
                    email: '',
                    password: '',
                    repeatPassword: '',
                }}
                validationSchema={registrationSchema}
                onSubmit={async (data) => {
                    Reflect.deleteProperty(data, 'repeatPassword');
                    try {
                        await registrationApi(data);
                        history.push('/');
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                {({ errors, values }) => (
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
                                    label={t('email')}
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
                                    label={t('password')}
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
                                    label={t('repeatPassword')}
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
                                classes="signup-btn"
                            >
                                {t('signUp')}
                            </CustomButton>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <RouterLink to="/login">
                                        {t('haveAccount')}
                                    </RouterLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </CustomForm>
        </div>
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
import { Grid } from '@mui/material';
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
