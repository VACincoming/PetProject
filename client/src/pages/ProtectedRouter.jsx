import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const pagesForUser = ['/create', '/myprofile', '/myposts', '/logout'];

const ProtectedRouter = (data) => {
    const {
        props, user, children, ...rest
    } = data;
    const role = user?.role;
    function checkAuth(location) {
        if (role && pagesForUser.includes(location.pathname)) {
            return true;
        }
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                if (checkAuth(props.location)) {
                    return children;
                }
                return (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                );
            }}
        />
    );
};

const mapStateToProps = ({ user }) => ({
    loading: user.user,
    user: user.user,
});

export default connect(mapStateToProps)(ProtectedRouter);
