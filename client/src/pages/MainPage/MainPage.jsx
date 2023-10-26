/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './styles.scss';
import { getLastPosts } from 'api/posts.api';
import PostContainer from 'containers/Post';
import LastPosts from 'components/LastPosts';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import PostsActions from 'redux/actions/PostsActions';

const MainPage = ({ loading, getPosts }) => {
    const [lastPosts, setLastPosts] = useState([]);
    useEffect(() => {
        getPosts();
        (async () => {
            const res = await getLastPosts();
            if (res.status === 200) {
                setLastPosts(res.data);
            }
        })();
    }, []);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div data-component="main-page">
                    <div className="announ-wrapper">
                        <PostContainer />
                    </div>
                    <div className="lastPosts-wrapper">
                        <LastPosts lastPosts={lastPosts} />
                    </div>
                </div>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(PostsActions.getPosts()),
});

const mapStateToProps = (state) => ({
    user: state.user.user,
    loading: state.posts.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
