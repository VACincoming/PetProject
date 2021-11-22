import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import ViewPost from "pages/ViewPost";
import RegistrationPage from "pages/RegistrationPage";
import CreatePage from "pages/CreatePage";
import ProtectedRouter from "./ProtectedRouter";

const Routers = () => {
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
            <ProtectedRouter exact path="/create">
                <CreatePage />
            </ProtectedRouter>
        </Switch>
    );
};

export default Routers;
