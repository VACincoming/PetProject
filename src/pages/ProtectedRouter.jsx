import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const pagesForUser = ["/create", "/myprofile"];

const ProtectedRouter = (data) => {
    const { props, user, children, ...rest } = data;
    const role = user?.role;
    function checkAuth(location) {
        if (role && pagesForUser.includes(location.pathname)) {
            return true;
        }
    }

    // useEffect(() => {}, [loading]);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (checkAuth(props.location)) {
                    return children;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.user,
        user: state.user.user,
    };
};

export default connect(mapStateToProps)(ProtectedRouter);
