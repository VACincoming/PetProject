/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "components/Header";
import Filters from "components/Filters";
import Routers from "pages/Routers";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import UserActions from "redux/actions/UserActions";
import Loader from "components/Loader";

const Master = ({ getUser, user = {}, loading }) => {
    const { pathname } = useLocation();
    const noHeaderPaths = ['/login', '/registration'];
    const filterPaths = ['/'];

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (user?.token) {
            getUser();
        }
    }, [user?.token]);

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    {noHeaderPaths.includes(pathname) ? null : <Header />}
                    {filterPaths.includes(pathname) ? <Filters /> : null}
                    <Routers />
                </>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(UserActions.getUser()),
    };
};

const mapStateToProps = ({ user }) => {
    return {
        user: user.user,
        loading: user.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
