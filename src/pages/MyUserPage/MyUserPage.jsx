/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./index.scss";
import { getLastPosts } from "api/posts.api";
import PostContainer from "containers/Post";
import LastPosts from "components/LastPosts";
import { connect } from "react-redux";
import Loader from "components/Loader";
import PostsActions from "redux/actions/PostsActions";
import Container from "@mui/material/Container";
import FlexInput from "components/FlexInput";
import CustomForm from "customComponents/CustomForm";
import { Form } from "formik";
import CustomButton from "customComponents/CustomButton";
import { useTranslation } from "react-i18next";

const MyUserPage = ({ loading, user }) => {
    const [lastPosts, setLastPosts] = useState([]);
    const { t } = useTranslation();

    const onSubmit = (data) => {
        // console.log("13", data);
        // searchPosts(search.search);
    };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-component="user-page">
                    <Container className="user-page-container" maxWidth="lg">
                        <div className="user-container">
                            <CustomForm
                                initialValues={{
                                    firstName: user?.firstName,
                                    lastName: user?.lastName,
                                    contactEmail:
                                        user?.contactsDto?.contactEmail,
                                    contactPhone:
                                        user?.contactsDto?.contactPhone,
                                }}
                                onSubmit={onSubmit}
                            >
                                {({ values }) => (
                                    <Form className="user-form">
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
                    </Container>
                </div>
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
