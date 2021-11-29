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
// import "./styles.scss";
import { createPostApi } from "api/posts.api";
import { uploadFilesApi } from "api/files.api";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         // padding: theme.spacing(2),
//         textAlign: "center",
//         // color: theme.palette.text.secondary,
//     },
//     dropzoneStyles: {
//         width: "100%",
//         height: "auto",
//         borderWidth: 2,
//         borderColor: "rgb(102, 102, 102)",
//         borderStyle: "dashed",
//         borderRadius: 5,
//     },
// }));

const TestPage = () => {
    // const classes = useStyles();
    const history = useHistory();
    const { t } = useTranslation();
    const [fileNames, setFileNames] = useState([]);

    return (
        <div data-component="">
            <DropzoneArea
                acceptedFiles={["image/*"]}
                name="photos"
                id="photos"
                // value={values.photos}
                // as={DropzoneArea}
                // dropzoneText={
                //     "Drag and drop an image here or click"
                // }
                onChange={(photos) => {
                    setFileNames(photos);
                }}
                filesLimit={10}
                maxFileSize={6000000}
            />
            <div className="">
                <CustomButton type="submit" variant="contained">
                    {t("create:title")}
                </CustomButton>
            </div>
        </div>
    );
};

export default TestPage;
