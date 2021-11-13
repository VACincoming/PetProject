/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import PostContainer from "containers/Post";

const MainPage = () => {
    return (
        <>
            <div data-component="main-page">
                <div className="announ-wrapper">
                    <PostContainer />
                </div>
            </div>
        </>
    );
};

export default MainPage;
