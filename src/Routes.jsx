import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import Headers from "./pages/Shared/Headers/Headers";

const Routes = () => {
  return (
    <Router>
      <Headers></Headers>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/doctordetails">
          <DoctorDetails></DoctorDetails>
        </Route>
        <Route path="/patients">
          <h1>Patients</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
