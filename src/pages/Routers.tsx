import React, { FC } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegistrationPage from 'pages/RegistrationPage';
import CreatePage from 'pages/CreatePage';
const Routers: FC = () => {
  return (
    <Switch>
      <Route path="/login"><LoginPage /></Route>
      <Route path="/registration"><RegistrationPage /></Route>
      <Route exact path="/"><MainPage /></Route>
      <Route exact path="/create"><CreatePage /></Route>
    </Switch>
  )
} 

export default Routers;