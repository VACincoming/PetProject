import React, { FC } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegistrationPage from 'pages/RegistrationPage';
const Routers: FC = () => {
  return (
    <Switch>
      <Route path="/login"><LoginPage /></Route>
      <Route path="/registration"><RegistrationPage /></Route>
      <Route exact path="/"><MainPage /></Route>
    </Switch>
  )
} 

export default Routers;