import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Form } from "formik";
import Grid from "@material-ui/core/Grid";
import Text from "customComponents/CustomText";
import CustomForm from "customComponents/CustomForm";
import CustomField from "customComponents/CustomField";
import CustomTextArea from "customComponents/CustomTextArea";
import CustomButton from "customComponents/CustomButton";
import Dropzone from 'react-dropzone';
import { DropzoneArea } from 'material-ui-dropzone';
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
    dropzoneStyles: {
        width: "100%",
        height: "auto",
        borderWidth: 2,
        borderColor: "rgb(102, 102, 102)",
        borderStyle: "dashed",
        borderRadius: 5,
      }
}));

const dropzoneStyle = {
    width: "100%",
    height: "auto",
    borderWidth: 2,
    borderColor: "rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: 5,
  }

const CreatePage = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));
    const onSubmit = (values) => {
        let data = new FormData();
        values.files.forEach((photo, index) => {
            console.log('30-', photo, values, index);
            data.append(`photo${index}`, values.files[index]);
        });
        console.log('33', values, data);
        // for(let pair of data.entries()) {
            console.log(`35 ${data.get('photo0')}`); // key1 = value1, then key2 = value2
            console.log(`36 ${JSON.stringify(data.get('photo0'))}`); // key1 = value1, then key2 = value2

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
                                <Form className='create-post-form'>
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
                                   {/* <Dropzone onDrop={handleDrop} style={dropzoneStyle} className={classes.dropZoneStyles}>
                                        {({ getRootProps, getInputProps, acceptedFiles, ...props }) => {
                                            if (acceptedFiles.length === 0) {
                                                return (<div {...getRootProps({ className: "dropzone" })}>
                                                        <input {...getInputProps()} />
                                                        <p>Try dragging a file here!</p>
                                                    </div>)
                                            }
                                            if (acceptedFiles.length !== 0) {
                                                return (
                                                    <div {...getRootProps({ className: "dropzone" })}>
                                                        <input {...getInputProps()} />
                                                            {acceptedFiles.map((file, i) => (
                                                                <Thumb key={i} file={file} />
                                                        ))}
                                                    </div>
                                                );
                                            }
                                    }}
                                    </Dropzone> */}
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        dropzoneText={"Drag and drop an image here or click"}
                                        onChange={(files) => console.log('Files:', files)}
                                        filesLimit={10}
                                        maxFileSize={6000000}
                                    />
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
