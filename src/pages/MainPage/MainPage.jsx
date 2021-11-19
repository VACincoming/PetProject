/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import { getLastPosts } from "api/posts.api";
import PostContainer from "containers/Post";
import LastPosts from "components/LastPosts";
import { connect } from "react-redux";
import UserActions from "redux/actions/UserActions";

const MainPage = () => {
    const [lastPosts, setLastPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await getLastPosts();
            if (res.status === 200) {
                setLastPosts(res.data);
            }
        })();
    }, []);
    return (
        <>
            <div data-component="main-page">
                <div className="announ-wrapper">
                    <PostContainer />
                </div>
                <div className="lastPosts-wrapper">
                    <LastPosts lastPosts={lastPosts} />
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(UserActions.getUser()),
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        // loading: state.user.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
