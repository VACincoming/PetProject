import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';
import { Field } from "formik";
import Grid from "@material-ui/core/Grid";
import Text from "customComponents/CustomText";
import CustomForm from "customComponents/CustomForm";
import CustomInput from "customComponents/CustomInput";
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
    const { t } = useTranslation();
    return (
        <div data-component="create-page" className={classes.root}>
            <Grid container>
                <Text tag="h2" title={t('create:title')} /> 
                <Grid xs={12}>
                    <Grid xs={12} md={6} sm={6}>
                        <CustomForm
                            initialValues={{
                                title: "",
                                description: "",
                                number: "",
                            }}
                        >
                            {({ values }) => {
                                <Field
                                    variant="outlined"
                                    name="title"
                                    margin="none"
                                    type="text"
                                    required
                                    id="title"
                                    key="title"
                                    fullWidth
                                    label={t("name")}
                                    value={values.title}
                                    as={CustomInput}
                                />
                            }}
                        </CustomForm>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePage;
