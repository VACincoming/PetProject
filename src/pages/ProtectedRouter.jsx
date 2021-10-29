import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const pagesForUser = ["/create"];

const ProtectedRouter = (data) => {
    const { props, user, children, ...rest } = data;
    const role = user?.role;
    function checkAuth(location) {
        console.log("10", user, role, location);
        // if (role && pagesForUser.includes(location.pathname)) {
        return true;
        // }
    }
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
        user: state.user,
    };
};

export default connect(mapStateToProps)(ProtectedRouter);
