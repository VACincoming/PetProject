/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import { getPosts } from "api/post.api";
import PostContainer from "containers/Post";
import FilterContainer from "containers/Filter";

const MainPage = () => {
    useEffect(async () => {
        await getPosts();
    }, []);

    return (
        <div data-component="main-page">
            <div className="announ-wrapper">
                <PostContainer />
            </div>
            <div className="filter-wrapper">
                <FilterContainer />
            </div>
        </div>
    );
};

export default MainPage;
