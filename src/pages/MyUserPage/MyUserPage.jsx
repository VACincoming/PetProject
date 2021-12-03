/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./index.scss";
import { connect } from "react-redux";
import Loader from "components/Loader";
import PostsActions from "redux/actions/PostsActions";
import Container from "@mui/material/Container";
import FlexInput from "components/FlexInput";
import CustomForm from "customComponents/CustomForm";
import { Form } from "formik";
import CustomButton from "customComponents/CustomButton";
import CustomText from "customComponents/CustomText";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import edit from "static/img/edit.png";
import Menu from "components/Menu";
import PermIdentity from "@mui/icons-material/PermIdentity";
import Receipt from "@mui/icons-material/Receipt";
import Favorite from "@mui/icons-material/Favorite";
import Logout from "@mui/icons-material/Logout";

const MyUserPage = ({ loading, user }) => {
    const { t } = useTranslation();
    const menuList = [
        {
            icon: <PermIdentity />,
            text: "My Profile",
            link: "/myprofile",
            active: true,
        },
        {
            icon: <Receipt />,
            text: "My Posts",
            link: "/myposts",
        },
        {
            icon: <Favorite />,
            text: "My Favorites",
            link: "/myfavorites",
        },
        {
            icon: <Logout />,
            text: "My Logout",
            link: "/logout",
        },
    ];
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
                    <div className="menu-container">
                        <Menu menuList={menuList} />
                    </div>
                    <Container className="user-page-container" maxWidth="lg">
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
                                    contactEmail:
                                        user?.contactsDto?.contactEmail,
                                    contactPhone:
                                        user?.contactsDto?.contactPhone,
                                }}
                                onSubmit={onSubmit}
                            >
                                {({ values }) => (
                                    <Form className="user-form">
                                        <div className="avatar-wrapper fit-center">
                                            <Avatar
                                                alt="Cindy Baker"
                                                // onClick={() =>
                                                // history.push("/myprofile")
                                                // }
                                                sx={{ width: 124, height: 124 }}
                                                classes={
                                                    "header-avatar fit-center"
                                                }
                                            >
                                                {user?.firstName[0]}
                                                {user?.lastName[0]}
                                            </Avatar>
                                            <img
                                                src={edit}
                                                alt=""
                                                className="edit-img"
                                                // onClick={() => setIsInput(true)}
                                            />
                                        </div>
                                        <CustomText
                                            title={t(
                                                "Infromation about profile"
                                            )}
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
