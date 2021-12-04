/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./index.scss";
import { connect } from "react-redux";
import Loader from "components/Loader";
import PostsActions from "redux/actions/PostsActions";
import FlexInput from "components/FlexInput";
import CustomForm from "customComponents/CustomForm";
import { Form } from "formik";
import CustomButton from "customComponents/CustomButton";
import CustomText from "customComponents/CustomText";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import edit from "static/img/edit.png";
import DropzoneDialog from "components/DropzoneDialog";
import CustomField from "customComponents/CustomField";

const MyUserPage = ({ loading, user }) => {
    const { t } = useTranslation();
    const [openDialog, setOpenDialog] = useState(false);
    const [fileNames, setFileNames] = useState(null);

    const onSubmit = async (values) => {
        let attachments = new FormData();
        let newValues = values;
        fileNames.forEach((photo) => {
            attachments.append("attachments", photo);
        });
        // try {
        //     const res = await createPostApi(newValues);
        //     await uploadFilesApi(attachments, res.data.id, "POST_PHOTO");
        //     history.push(`/view-post/${res?.data?.id}`);
        // } catch (err) {}
    };
    const handleOpen = () => {
        setOpenDialog(true);
    };
    const handleClose = () => {
        setOpenDialog(false);
    };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <CustomText
                        title={t("My Profile")}
                        className="fit-center"
                        tag="h2"
                    />
                    <div className="user-container">
                        <CustomForm
                            initialValues={{
                                firstName: user?.firstName,
                                lastName: user?.lastName,
                                contactEmail: user?.contactsDto?.contactEmail,
                                contactPhone: user?.contactsDto?.contactPhone,
                                photo: user.photo,
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ values }) => (
                                <Form className="user-form">
                                    <CustomField
                                        acceptedFiles={["image/*"]}
                                        name="photo"
                                        id="photo"
                                        value={values.photo}
                                        as={DropzoneDialog}
                                        // dropzoneText={
                                        //     "Drag and drop an image here or click"
                                        // }
                                        handleSave={(files) => {
                                            handleClose();
                                            console.log(files);
                                            setFileNames(files);
                                        }}
                                        filesLimit={1}
                                        maxFileSize={6000000}
                                        open={openDialog}
                                        handleClose={handleClose}
                                    />

                                    <div className="avatar-wrapper fit-center">
                                        <Avatar
                                            alt="Cindy Baker"
                                            src={
                                                fileNames &&
                                                URL?.createObjectURL(
                                                    fileNames[0]
                                                )
                                            }
                                            sx={{ width: 124, height: 124 }}
                                            // classes={"header-avatar fit-center"}
                                        >
                                            {user?.firstName[0]}
                                            {user?.lastName[0]}
                                        </Avatar>
                                        <img
                                            src={edit}
                                            alt=""
                                            className="edit-img"
                                            onClick={handleOpen}
                                        />
                                    </div>
                                    <CustomText
                                        title={t("Infromation about profile")}
                                        style={{ marginBottom: "1.5rem" }}
                                        tag="h2"
                                    />
                                    <div className="user-fields-row">
                                        <div className="user-fields-column">
                                            <FlexInput
                                                title={values.firstName}
                                                className="user-field"
                                                inputName="firstName"
                                                label="First Name"
                                            />
                                            <FlexInput
                                                title={values.lastName}
                                                className="user-field"
                                                inputName="lastName"
                                                label="Last Name"
                                            />
                                        </div>
                                        <div className="user-fields-column">
                                            <FlexInput
                                                title={values.contactEmail}
                                                className="user-field"
                                                inputName="contactEmail"
                                                label="Email"
                                            />
                                            <FlexInput
                                                title={values.contactPhone}
                                                className="user-field"
                                                inputName="contactPhone"
                                                label="Contact Phone"
                                            />
                                        </div>
                                    </div>
                                    <CustomButton
                                        type="submit"
                                        variant="contained"
                                    >
                                        {t("Save")}
                                    </CustomButton>
                                </Form>
                            )}
                        </CustomForm>
                    </div>
                </>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(PostsActions.getPosts()),
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        loading: state.user.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyUserPage);
