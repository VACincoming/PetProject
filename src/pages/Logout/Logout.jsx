import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserActions from "redux/actions/UserActions";
import { connect } from "react-redux";

const Logout = ({ logoutUser }) => {
    useEffect(() => {
        localStorage.removeItem("authorization");
        logoutUser();
    }, []);
    return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(UserActions.logoutUser()),
    };
};

export default connect(null, mapDispatchToProps)(Logout);
