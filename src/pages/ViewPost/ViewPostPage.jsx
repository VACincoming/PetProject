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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ViewPostPage = ({ loading, getPost, post }) => {
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        getPost(id);
    }, [id]);
    console.log("18", post);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-component="view-post-page">
                    <div className="photo-container">
                        <Carousel>
                            {post?.photos?.map((photo) => (
                                <div>
                                    <img src={photo} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="post-details">
                        <CustomText
                            className="post-title"
                            tag="h2"
                            title={post?.title}
                        />
                        <CustomText
                            className="post-description"
                            title={post?.description}
                        />
                        <CustomText
                            className="post-contacts"
                            title={t("Contacts")}
                        />
                        <CustomText
                            className="post-phone"
                            title={post?.contactPhone}
                        />
                        <CustomText
                            className="post-email"
                            title={post?.contactEmail}
                        />
                        <CustomText
                            className="post-email"
                            title={post?.type?.toLowerCase()}
                        />
                        <div className="post-createdAt">
                            <CustomText title={t("Date of creation post:")} />
                            <CustomText title={post?.createdAt} />
                        </div>
                    </div>
                </div>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostPage);
