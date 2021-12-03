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
import { useHistory, useParams } from "react-router-dom";
import CustomText from "customComponents/CustomText";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Container from "@mui/material/Container";

const MyPostsPage = ({ loading, getPost, post }) => {
    const { id } = useParams();
    const { t } = useTranslation();
    console.log("21");
    useEffect(() => {
        // getPost(id);
    }, [id]);
    const date = post?.createdAt
        ?.split(" ")[0]
        ?.split("-")
        ?.reverse()
        ?.join(".");
    return (
        <>
            <div data-component="myposts-container">No posts</div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(PostsActions.getPost(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.posts.loading,
        post: state.posts.post,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsPage);
