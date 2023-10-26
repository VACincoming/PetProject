import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import ViewPost from 'pages/ViewPost';
import RegistrationPage from 'pages/RegistrationPage';
import CreatePage from 'pages/CreatePage';
import Menu from 'components/Menu';
import Container from '@mui/material/Container';
import ProtectedRouter from './ProtectedRouter';
import TestPage from './TestPage';
import MyUserPage from './MyUserPage';
import MyPostsPage from './MyPostsPage';
import Logout from './Logout';
import './index.scss';

const Routers = () => {
    const { pathname } = useLocation();
    const userPages = ['/myprofile', '/myposts'];

    return (
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/view-post/:id" component={ViewPost} />
            <Route exact path="/test-page" component={TestPage} />
            <ProtectedRouter exact path="/create" component={CreatePage} />
            <ProtectedRouter exact path="/logout" component={Logout} />
            {userPages.includes(pathname) && (
                <div data-component="user-page">
                    <div className="menu-container">
                        <Menu currentLink={pathname} />
                    </div>
                    <Container
                        className={`
                            user-content-container
                            ${pathname === '/myprofile' ? '' : 'no-background'}
                        `}
                        maxWidth="lg"
                    >
                        <ProtectedRouter exact path="/myprofile" component={MyUserPage} />
                        <ProtectedRouter exact path="/myposts" component={MyPostsPage} />
                    </Container>
                </div>
            )}
        </Switch>
    );
};

export default Routers;
