/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
import { getLastPosts } from 'api/posts.api';
import PostContainer from 'containers/Post';
import LastPosts from 'components/LastPosts';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import PostsActions from 'redux/actions/PostsActions';
import { useHistory, useParams } from 'react-router-dom';
import CustomText from 'customComponents/CustomText';
import { useTranslation } from 'react-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Container from '@mui/material/Container';
import Post from 'components/Post';

const MyPostsPage = ({
    loading, getMyPosts, myPosts, deletePost
}) => {
    const { t } = useTranslation();
    useEffect(() => {
        if (!myPosts.length) {
            getMyPosts();
        }
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-component="myposts-container">
                    {myPosts && myPosts.length ? (
                        myPosts?.map((post) => (
                            <Post
                                title={post.title}
                                description={post.description}
                                createdAt={post.createdAt}
                                contactEmail={post.contactEmail}
                                contactPhone={post.contactPhone}
                                photoUrl={post.photos[0]}
                                key={post.id}
                                id={post.id}
                                role="ADMIN"
                                type={post.type}
                                status={post.status}
                                deletePost={() => deletePost(post.id)}
                            />
                        ))
                    ) : (
                        <div className="no-data">No posts</div>
                    )}
                </div>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getMyPosts: () => dispatch(PostsActions.getMyPosts()),
    deletePost: (id) => dispatch(PostsActions.deletePost(id)),
});

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    myPosts: state.posts.myPosts,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsPage);
