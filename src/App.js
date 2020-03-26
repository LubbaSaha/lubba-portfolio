import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar/Navbar";

import './App.css';

const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Navbar} />
    </Switch>
  );
}

export default  withRouter(App);
