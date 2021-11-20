import React, { FC } from "react";
import CustomInput from "customComponents/CustomInput";
import CustomButton from "customComponents/CustomButton";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import Container from "@mui/material/Container";
import { ProjectName } from "constants/strings";
import { loginSchema } from "validation/UserValidation";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isError } from "helpers/helpers";
import "./styles.scss";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Field, FastField, Form } from "formik";
import { connect } from "react-redux";
import UserActions from 'redux/actions/UserActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        // margin: theme.spacing(1),
        margin: '.5rem',
        backgroundColor: "#16697a",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: '1rem',
    },
    submit: {
        margin: '1rem 0 1rem',
    },
}));

const LoginPage = ({
    loginUser
}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const history = useHistory();

    const handleLogin = async (data) => {
        try {
            loginUser(data);
            history.push('/');
        } catch (err) {
            console.log(err, ' 60');
        }
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PetsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in <b> {ProjectName} </b>
                </Typography>
                <Formik
                    validateOnChange
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (data) => await handleLogin(data)}
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
                                            label={t("email")}
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
                                            label={t("password")}
                                            autoComplete="current-password"
                                            value={values.password}
                                            as={CustomInput}
                                        />
                                    </Grid>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                            />
                                        }
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
                                            <RouterLink to="/forgot-password" style={{ fontSize: '.8rem' }}>
                                                {t("Forgot password")}
                                            </RouterLink>
                                        </Grid>
                                        <Grid item>
                                            <RouterLink to="/registration" variant="body2" style={{ fontSize: '.8rem' }}>
                                                {"Don't have an account? Sign Up"}
                                            </RouterLink>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (data) => dispatch(UserActions.loginUser(data))
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);
