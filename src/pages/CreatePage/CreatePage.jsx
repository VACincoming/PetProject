import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Text from "components/Text";
import CustomInput from "components/CustomInput";
import "./styles.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const CreatePage = () => {
    const classes = useStyles();
    return (
        <div data-component="create-page" className={classes.root}>
            <Grid container>
                <Text tag="h2" title="Create Announ" />
                <Grid xs={12}>
                    {/* <Grid xs={12} md={6} sm={6}>
                        <CustomInput
                            fullWidth={true}
                            label="Create Post"
                            required={true}
                            // name="CreatePost"
                        />
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePage;
