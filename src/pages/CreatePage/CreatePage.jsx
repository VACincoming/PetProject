import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';
import { Form } from "formik";
import Grid from "@material-ui/core/Grid";
import Text from "customComponents/CustomText";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
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
                <Grid item xs={12}>
                    <Grid item xs={12} md={6} sm={6}>
                        <CustomForm
                            initialValues={{
                                title: "",
                                description: "",
                                number: "",
                            }}
                        >
                            {({ values }) => (
                                <Form>
                                    <CustomField
                                        name="title"
                                        required={true}
                                        id="title"
                                        label={t("create:name")}
                                        value={values.title}
                                    />
                                    <CustomField
                                        name="description"
                                        required={true}
                                        id="description"
                                        label={t("create:description")}
                                        value={values.description}
                                    />
                                </Form>
                            )}
                        </CustomForm>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePage;
