import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Form } from "formik";
import Grid from "@material-ui/core/Grid";
import Text from "customComponents/CustomText";
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import CustomTextArea from "customComponents/CustomTextArea";
import CustomButton from "customComponents/CustomButton";
import { DropzoneArea } from "material-ui-dropzone";
import "./styles.scss";
import { createPostApi, uploadFilesApi } from "api/post.api";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
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

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5,
};

const CreatePage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [fileNames, setFileNames] = useState([]);

    const onSubmit = async (values) => {
        let data = new FormData();
        let newValues = values;
        fileNames.forEach((photo, index) => {
            data.append(`photo${index}`, photo);
        });
        const res = await createPostApi(newValues);
        console.log("33", res, values, data);

        //   }
    };
    const handleImage = (event, setFieldValue) => {
        const files = event.target.files;
        let myFiles = Array.from(files);
        setFieldValue("files", myFiles);
        console.log(files, myFiles, event.target);
    };
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
                                contactPhone: "4213",
                                contactEmail: "sd13@mail.ru",
                                type: "Found",
                                photos: [],
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ values, setFieldValue, ...props }) => (
                                <Form className="create-post-form">
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
                                    <CustomField
                                        acceptedFiles={["image/*"]}
                                        name="photos"
                                        id="photos"
                                        value={values.photos}
                                        as={DropzoneArea}
                                        dropzoneText={
                                            "Drag and drop an image here or click"
                                        }
                                        onChange={(photos) => {
                                            setFileNames(photos);
                                            console.log("Files:", photos);
                                        }}
                                        filesLimit={10}
                                        maxFileSize={6000000}
                                    />
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">
                                            Selected Option
                                        </FormLabel>
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
                                                value="Found"
                                                control={<Radio />}
                                                label="Found"
                                                name="type"
                                            />
                                            <FormControlLabel
                                                value="Lost"
                                                control={<Radio />}
                                                label="Lost"
                                                name="type"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                    <CustomButton
                                        onClick={() => console.log(props)}
                                        type="submit"
                                    >
                                        Create Post
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
