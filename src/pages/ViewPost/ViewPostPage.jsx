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

const ViewPostPage = ({ loading, getPost, post }) => {
    const { id } = useParams();
    useEffect(() => {
        getPost(id);
    }, [id]);
    return <div data-component="view-post-page">{id}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostPage);
