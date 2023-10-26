/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import PostsActions from 'redux/actions/PostsActions';
import FlexInput from 'components/FlexInput';
import CustomForm from 'customComponents/CustomForm';
import { Form } from 'formik';
import CustomButton from 'customComponents/CustomButton';
import CustomText from 'customComponents/CustomText';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import edit from 'static/img/edit.png';
import DropzoneDialog from 'components/DropzoneDialog';
import CustomField from 'customComponents/CustomField';
import { updateUser } from 'api/auth.api';
import { uploadFilesApi } from 'api/files.api';

const MyUserPage = ({ loading, user }) => {
    const { t } = useTranslation();
    const [openDialog, setOpenDialog] = useState(false);
    const [fileNames, setFileNames] = useState(null);

    const onSubmit = async (values) => {
        const attachments = new FormData();
        const newValues = {
            birthday: values.birthday || '',
            country: values.country || '',
            email: values.contactEmail || '',
            firstName: values.firstName || '',
            lastName: values.lastName || '',
            phone: values.contactPhone || '',
            sex: values.sex || '',
        };
        fileNames && fileNames.forEach((photo) => {
            attachments.append('attachments', photo);
        });
        fileNames
            && (await uploadFilesApi(attachments, user.id, 'PROFILE_PHOTO'));
        await updateUser(newValues, user.id);
        console.log('30', values);
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
    const getImage = () => {
        if (fileNames && fileNames.length > 0) {
            return URL?.createObjectURL(fileNames[0]);
        }
        if (user.photo) {
            return user.photo;
        }
    };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <CustomText
                        title={t('create:myProfile')}
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
                                        acceptedFiles={['image/*']}
                                        name="photo"
                                        id="photo"
                                        value={values.photo}
                                        as={DropzoneDialog}
                                        // dropzoneText={
                                        //     "Drag and drop an image here or click"
                                        // }
                                        handleSave={(files) => {
                                            handleClose();
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
                                            src={getImage()}
                                            sx={{ width: 124, height: 124 }}
                                        >
                                            {/* {!user.photo && user?.firstName[0]}
                                            {!user.photo && user?.lastName[0]} */}
                                        </Avatar>
                                        <img
                                            src={edit}
                                            alt=""
                                            className="edit-img"
                                            onClick={handleOpen}
                                        />
                                    </div>
                                    <CustomText
                                        title={t('create:profileInfo')}
                                        style={{ marginBottom: '1.5rem' }}
                                        tag="h2"
                                    />
                                    <div className="user-fields-row">
                                        <div className="user-fields-column">
                                            <FlexInput
                                                title={values.firstName}
                                                className="user-field"
                                                inputName="firstName"
                                                label={t('auth:firstName')}
                                            />
                                            <FlexInput
                                                title={values.lastName}
                                                className="user-field"
                                                inputName="lastName"
                                                label={t('auth:lastName')}
                                            />
                                        </div>
                                        <div className="user-fields-column">
                                            <FlexInput
                                                title={values.contactEmail}
                                                className="user-field"
                                                inputName="contactEmail"
                                                label={t('auth:email')}
                                            />
                                            <FlexInput
                                                title={values.contactPhone}
                                                className="user-field"
                                                inputName="contactPhone"
                                                label={t('auth:contactPhone')}
                                            />
                                        </div>
                                    </div>
                                    <CustomButton
                                        type="submit"
                                        variant="contained"
                                    >
                                        {t('create:save')}
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

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(PostsActions.getPosts()),
});

const mapStateToProps = (state) => ({
    user: state.user.user,
    loading: state.user.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyUserPage);
