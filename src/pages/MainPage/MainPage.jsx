/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import { getLastPosts } from "api/posts.api";
import PostContainer from "containers/Post";
import LastPosts from "components/LastPosts";

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

export default MainPage;
