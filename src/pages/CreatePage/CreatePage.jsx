import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Form } from "formik";
import Grid from "@material-ui/core/Grid";
import Text from "customComponents/CustomText";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import CustomTextArea from "customComponents/CustomTextArea";
import CustomButton from "customComponents/CustomButton";
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
    const onSubmit = (values) => {
        let data = new FormData();
        values.files.forEach((photo, index) => {
            console.log('30-', photo, values, index);
            data.append(`photo${index}`, values.files[index]);
        });
        console.log('33', values, data);
        // for(let pair of data.entries()) {
            console.log(`35 ${data.get('photo0').JSON()}`); // key1 = value1, then key2 = value2
        //   }
    };
    const handleImage = (event, setFieldValue) => {
        const files = event.target.files;
        let myFiles =Array.from(files);
        setFieldValue('files', myFiles)
        console.log(files, myFiles, event.target);
    }
    return (
        <div data-component="create-page" className={classes.root}>
            <Grid container>
                <Text tag="h2" title={t("create:title")} />
                <Grid item xs={12}>
                    <Grid item xs={12} md={6} sm={6}>
                        <CustomForm
                            initialValues={{
                                title: "",
                                description: "",
                                number: "",
                                files: [],
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue, ...props }) => (
                                <Form>
                                    <CustomField
                                        name="title"
                                        id="title"
                                        required={true}
                                        label={t("create:name")}
                                        value={values.title}
                                    />
                                    <CustomField
                                        name="description"
                                        id="description"
                                        required={true}
                                        ariaLabel="description"
                                        placeholder={t("create:description")}
                                        value={values.description}
                                        as={CustomTextArea}
                                    />
                                    {/* <CustomField
                                        accept="image/*" 
                                        className={classes.input} 
                                        name="files"
                                        id="files"
                                        multiple={true}
                                        required={true}
                                        value={values.files}
                                        type="file"
                                    /> */}
                                    <label htmlFor="files">
                                        <CustomField
                                            accept="image/*"
                                            id="files"
                                            multiple={true}
                                            styles={{display: 'none'}}
                                            type="file"
                                            name='files'
                                            onChange={(e) => handleImage(e, setFieldValue)}
                                        />
                                        <CustomButton
                                            variant="contained"
                                            component="span"
                                            onClick={()=>console.log(props)}
                                        >
                                            Upload
                                        </CustomButton>
                                    </label>
                                    <CustomButton onClick={() => console.log(props)} type="submit">
                                        aaa
                                    </CustomButton>
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
