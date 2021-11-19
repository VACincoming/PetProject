/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "components/Header";
import Loader from "components/Loader";
import Filters from "components/Filters";
import Routers from "pages/Routers";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import UserActions from "redux/actions/UserActions";

const Master = ({ getUser, user }) => {
    const pathname = useLocation().pathname;
    const isNeedHeader = () => {
        if (pathname !== "/login" && pathname !== "/registration") {
            return <Header />;
        }
        return null;
    };
    const isNeedFilters = () => {
        if (pathname === "/") {
            return <Filters />;
        }
    };
    useEffect(() => {
        user?.id && getUser();
    }, []);
    return (
        <>
            <>
                {isNeedHeader()}
                {isNeedFilters()}
                <Routers />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Master);
