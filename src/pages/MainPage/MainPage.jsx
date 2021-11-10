/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import PostContainer from "containers/Post";
import FilterContainer from "containers/Filter";
import Search from "components/Search";
import { getPosts } from "api/post.api";

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        await getPosts();
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div data-component="main-page">
                    <div className="announ-wrapper">
                        <PostContainer />
                    </div>
                    <div className="filter-wrapper">
                        <div className="search-wrapper">
                            <Search />
                        </div>
                        <div className="filter-menu">
                            <FilterContainer />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MainPage;
