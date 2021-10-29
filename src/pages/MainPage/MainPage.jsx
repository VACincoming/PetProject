import React from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import AnnounContainer from "containers/Announ";
const MainPage = () => {
    let arr = new Array(10).fill(0);

    return (
        <div data-component="main-page">
            <div className="announ-wrapper">
                {arr.map((a, i) => {
                    return <AnnounContainer key={i} />;
                })}
            </div>
            {/* <Link to='/login'>Login</Link> */}
        </div>
    );
};

export default MainPage;
