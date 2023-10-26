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
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import phone from 'static/img/phone.png';
import mail from 'static/img/mail.png';

const ViewPostPage = ({ loading, getPost, post }) => {
    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        getPost(id);
    }, [id]);
    const date = post?.createdAt
        ?.split(' ')[0]
        ?.split('-')
        ?.reverse()
        ?.join('.');
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-component="view-post-page">
                    <Container className="view-post-container" maxWidth="lg">
                        <div className="photo-container">
                            <Carousel dynamicHeight>
                                {post?.photos?.map((photo) => (
                                    <div>
                                        <img src={photo} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="post-details">
                            <CustomText
                                className="post-title my-1"
                                tag="h2"
                                title={post?.title}
                            />
                            <CustomText
                                className="post-description mb-1"
                                title={post?.description}
                            />
                            <CustomText
                                className="post-subtitle mb-1"
                                title={t('Contacts')}
                            />
                            {post?.contactPhone && (
                                <div className="post-contact-container">
                                    <img src={phone} alt="" />
                                    <CustomText
                                        className="post-phone mb-1"
                                        title={post?.contactPhone}
                                    />
                                </div>
                            )}
                            {post?.contactEmail && (
                                <div className="post-contact-container mb-1">
                                    <img src={mail} alt="" />
                                    <CustomText
                                        className="post-email"
                                        title={post?.contactEmail}
                                    />
                                </div>
                            )}
                            <CustomText
                                className="post-subtitle mb-1"
                                title="Тип"
                            />
                            <CustomText
                                className="mb-1"
                                title={post?.type?.toLowerCase()}
                            />
                            <div className="post-subtitle post-createdAt mb-1">
                                <CustomText title="Date of creation post:" />
                                <CustomText title={date} />
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => dispatch(PostsActions.getPost(id)),
});

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    post: state.posts.post,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostPage);
