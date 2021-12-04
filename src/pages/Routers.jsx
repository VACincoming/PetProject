import React, { useRef, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import ViewPost from "pages/ViewPost";
import RegistrationPage from "pages/RegistrationPage";
import CreatePage from "pages/CreatePage";
import ProtectedRouter from "./ProtectedRouter";
import TestPage from "./TestPage";
import MyUserPage from "./MyUserPage";
import MyPostsPage from "./MyPostsPage";
import Logout from "./Logout";
import { connect } from "react-redux";
import Menu from "components/Menu";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import "./index.scss";
const Routers = ({ loading, user }) => {
    const location = useLocation();
    const containerRef = useRef();
    useEffect(() => {
        const container = containerRef.current;
        if (location.pathname === "/myprofile") {
            container.className = "user-content-container";
            return;
        }
        if (container) {
            container.className = "user-content-container no-background";
        }
    }, [location.pathname, user]);
    return (
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/registration">
                <RegistrationPage />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route exact path="/view-post/:id">
                <ViewPost />
            </Route>
            <Route exact path="/test-page">
                <TestPage />
            </Route>
            {user && (
                <>
                    <ProtectedRouter exact path="/create">
                        <CreatePage />
                    </ProtectedRouter>
                    <ProtectedRouter exact path="/logout">
                        <Logout />
                    </ProtectedRouter>
                    <div data-component="user-page">
                        <div className="menu-container">
                            <Menu currentLink={location.pathname} />
                        </div>
                        <Container
                            className="user-content-container"
                            maxWidth="lg"
                            ref={containerRef}
                        >
                            <ProtectedRouter exact path="/myprofile">
                                <MyUserPage />
                            </ProtectedRouter>
                            <ProtectedRouter exact path="/myposts">
                                <MyPostsPage />
                            </ProtectedRouter>
                        </Container>
                    </div>
                </>
            )}
            <Redirect to="/" />
        </Switch>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        user: state.user.user,
    };
};

export default connect(mapStateToProps)(Routers);
