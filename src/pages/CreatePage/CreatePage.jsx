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
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    const { t } = useTranslation();
    const [fileNames, setFileNames] = useState([]);

    const onSubmit = async (values) => {
        let attachments = new FormData();
        let newValues = values;
        fileNames.forEach((photo) => {
            attachments.append("attachments", photo);
        });
        try {
            const res = await createPostApi(newValues);
            await uploadFilesApi(attachments, res.data.id, "POST_PHOTO");
            history.push(`/view-post/${res?.data?.id}`);
        } catch (err) {}
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
                    <Grid item xs={12} md={12} sm={12}>
                        <CustomForm
                            initialValues={{
                                title: "",
                                description: "",
                                phone: "",
                                contactEmail: "",
                                email: "",
                                type: "FOUND",
                                photos: [],
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue }) => (
                                <Form className="create-post-form">
                                    <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="title"
                                        >
                                            {t("create:postTitle")}
                                        </label>
                                        <CustomField
                                            name="title"
                                            id="title"
                                            required={true}
                                            label={t("create:postTitle")}
                                            value={values.title}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="format"
                                        >
                                            {t("create:type")}
                                        </label>
                                        <FormControl
                                            name="format"
                                            className="form-input"
                                            component="fieldset"
                                        >
                                            {/* <FormLabel component="legend">
                                                Selected Option
                                            </FormLabel> */}
                                            <RadioGroup
                                                name="type"
                                                value={values.type}
                                                onChange={(event) => {
                                                    setFieldValue(
                                                        "type",
                                                        event.currentTarget
                                                            .value
                                                    );
                                                }}
                                            >
                                                <FormControlLabel
                                                    value="FOUND"
                                                    control={<Radio />}
                                                    label="Знайдено"
                                                    name="type"
                                                />
                                                <FormControlLabel
                                                    value="LOST"
                                                    control={<Radio />}
                                                    label="Втрачено"
                                                    name="type"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="description"
                                        >
                                            {t("create:detailedInfo")}
                                        </label>
                                        <CustomField
                                            name="description"
                                            id="description"
                                            required={true}
                                            ariaLabel="description"
                                            placeholder={t(
                                                "create:description"
                                            )}
                                            value={values.description}
                                            minRows={7}
                                            as={CustomTextArea}
                                            className={
                                                "form-input form-input-description"
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="phone"
                                        >
                                            {t("create:phone")}
                                        </label>
                                        <CustomField
                                            name="phone"
                                            id="phone"
                                            required={true}
                                            placeholder={t("create:phone")}
                                            label={t("create:phone")}
                                            value={values.phone}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="email"
                                        >
                                            {t("create:emailAddress")}
                                        </label>
                                        <CustomField
                                            name="email"
                                            id="email"
                                            required={true}
                                            placeholder={t("create:email")}
                                            label={t("create:email")}
                                            value={values.email}
                                            className="form-input"
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <label
                                            className="form-label"
                                            htmlFor="photos"
                                        >
                                            {t("create:photo")}
                                        </label> */}
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
                                    {/* </div> */}
                                    <div className="form-create-btn">
                                        {/* <Grid xs={3} item> */}
                                        <CustomButton
                                            type="submit"
                                            variant="contained"
                                        >
                                            {t("create:title")}
                                        </CustomButton>
                                        {/* </Grid> */}
                                    </div>
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
