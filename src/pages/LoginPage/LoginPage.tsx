import React, { FC } from 'react';
import CustomInput from 'customComponents/CustomInput';
import CustomButton from 'customComponents/CustomButton';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ProjectName } from 'constants/strings';
import { loginSchema } from 'validation/UserValidation';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { isError } from 'helpers/helpers';
import './styles.scss';
import { Link as RouterLink } from 'react-router-dom';
import { loginApi } from 'api/auth.api';

import { 
  Formik,
  Field,
  FastField,
  Form
} from "formik";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#16697a",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

const LoginPage:FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    // history.push('/');
  }
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <PetsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        <i>Sign in <b> { ProjectName } </b></i>
      </Typography>
      <Formik
        validateOnChange
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (data, { setErrors }) => {
          console.log(data);
          await loginApi(data).then((res:any) => {
            console.log(res)
            if (res.status !== 200) {
              setErrors(res.message);
            }
          })
        }}
      >
        {({ values, errors }) => {
          return (
            <Form className="loginFrom">
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
                <Grid item xs={12}>
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <CustomButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  // onClick={handleLogin}
                  disabled={isError(errors)}
                  classes={classes.submit}
                >
                  Sign In
                </CustomButton>
                <Grid container>
                  <Grid item xs>
                    <RouterLink to="/registration">
                      {t('Forgot password')}
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        }
        </Formik>
      </div>
    </Container>
  )
}

export default LoginPage;