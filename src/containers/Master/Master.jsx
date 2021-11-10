/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "components/Header";
import Routers from "pages/Routers";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getUserApi } from "api/auth.api";
import {
    loginAction,
    beforeLoginAction,
    errorLoginAction,
} from "redux/actions";

const Master = ({
    onLoginAction,
    onBeforeLoginAction,
    onErrorLoginAction,
    loading,
}) => {
    const pathname = useLocation().pathname;
    const isNeedHeader = () => {
        if (pathname !== "/login" && pathname !== "/registration") {
            return <Header />;
        }
        return null;
    };
    useEffect(async () => {
        onBeforeLoginAction();
        try {
            const user = await await getUserApi();
            onLoginAction(user.data);
        } catch (err) {
            onErrorLoginAction(err);
        }
    }, []);
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {isNeedHeader()}
                    <Routers />
                </>
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginAction: (data) => dispatch(loginAction(data)),
        onBeforeLoginAction: () => dispatch(beforeLoginAction()),
        onErrorLoginAction: () => dispatch(errorLoginAction()),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
