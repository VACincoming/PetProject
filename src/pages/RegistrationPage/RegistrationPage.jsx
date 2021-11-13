import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import Container from "@mui/material/Container";
// import { IRegistrationData } from 'interfaces/IRegistration';
import RegistrationForm from "./RegistrationForm";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: "0.5rem",
        backgroundColor: "#16697a",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: "1rem",
    },
    submit: {
        margin: "1rem 1rem 0rem 0rem",
    },
}));

const RegistrationPage = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PetsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <RegistrationForm />
            </div>
        </Container>
    );
};

export default RegistrationPage;
