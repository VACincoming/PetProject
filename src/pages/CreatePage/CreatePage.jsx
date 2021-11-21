import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useTranslation } from "react-i18next";
import { Form } from "formik";
import Grid from "@mui/material/Grid";
import Text from "customComponents/CustomText";
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@mui/material";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import CustomTextArea from "customComponents/CustomTextArea";
import CustomButton from "customComponents/CustomButton";
import { DropzoneArea } from "material-ui-dropzone";
import "./styles.scss";
import { createPostApi } from "api/posts.api";
import { uploadFilesApi } from "api/files.api";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: "center",
        // color: theme.palette.text.secondary,
    },
    dropzoneStyles: {
        width: "100%",
        height: "auto",
        borderWidth: 2,
        borderColor: "rgb(102, 102, 102)",
        borderStyle: "dashed",
        borderRadius: 5,
    },
}));

const CreatePage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [fileNames, setFileNames] = useState([]);

    const onSubmit = async (values) => {
        let attachments = new FormData();
        let newValues = values;
        fileNames.forEach((photo) => {
            attachments.append("attachments", photo);
        });
        const res = await createPostApi(newValues);
        await uploadFilesApi(attachments, res.data.id, "POST_PHOTO");
    };

    return (
        <div data-component="create-page" className={classes.root}>
            <Grid container>
                <Grid item xs={12} className="create-wrapper">
                <Text
                    tag="h2"
                    className="create-title"
                    title={t("create:title")}
                />
                    <Grid item xs={9} md={9} sm={9}>
                        <CustomForm
                            initialValues={{
                                title: "",
                                description: "",
                                contactPhone: "4213",
                                contactEmail: "sd13@mail.ru",
                                type: "FOUND",
                                photos: [],
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue }) => (
                                <Form className="create-post-form">
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="title">{t('create:title')}</label>
                                        <CustomField
                                            name="title"
                                            id="title"
                                            required={true}
                                            label={t("create:name")}
                                            value={values.title}
                                            className='form-input'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="format">{t('create:type')}</label>
                                        <FormControl name='format' className='form-input' component="fieldset">
                                            {/* <FormLabel component="legend">
                                                Selected Option
                                            </FormLabel> */}
                                            <RadioGroup
                                                name="type"
                                                value={values.type}
                                                onChange={(event) => {
                                                    setFieldValue(
                                                        "type",
                                                        event.currentTarget.value
                                                    );
                                                }}
                                            >
                                                <FormControlLabel
                                                    value="FOUND"
                                                    control={<Radio />}
                                                    label="FOUND"
                                                    name="type"
                                                />
                                                <FormControlLabel
                                                    value="LOST"
                                                    control={<Radio />}
                                                    label="LOST"
                                                    name="type"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="description">{t('create:detailedInfo')}</label>
                                        <CustomField
                                            name="description"
                                            id="description"
                                            required={true}
                                            ariaLabel="description"
                                            placeholder={t("create:description")}
                                            value={values.description}
                                            as={CustomTextArea}
                                            className='form-input'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="title">{t('create:phone')}</label>
                                        <CustomField
                                            name="title"
                                            id="title"
                                            required={true}
                                            label={t("create:name")}
                                            value={values.title}
                                            className='form-input'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="title">{t('create:emailAddress')}</label>
                                        <CustomField
                                            name="title"
                                            id="title"
                                            required={true}
                                            label={t("create:name")}
                                            value={values.title}
                                            className='form-input'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label' htmlFor="photos">{t('create:photo')}</label>
                                        <CustomField
                                            acceptedFiles={["image/*"]}
                                            name="photos"
                                            id="photos"
                                            value={values.photos}
                                            as={DropzoneArea}
                                            // dropzoneText={
                                            //     "Drag and drop an image here or click"
                                            // }
                                            onChange={(photos) => {
                                                setFileNames(photos);
                                            }}
                                            filesLimit={10}
                                            maxFileSize={6000000}
                                        />
                                    </div>
                                    <CustomButton type="submit">
                                        {t("create:title")}
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
