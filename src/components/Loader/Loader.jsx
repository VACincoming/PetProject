import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Loader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}
