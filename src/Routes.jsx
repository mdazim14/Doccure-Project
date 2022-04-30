import React from "react";

import { Switch, Route } from "react-router-dom";

import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import Headers from "./pages/Shared/Headers/Headers";
import DoctorsSideNav from "./Components/DoctorsSideNav/DoctorsSideNav";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <>
      <Headers></Headers>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/doctordetails">
          <DoctorDetails />
        </Route>
        <Route path="/patients">
          <h1>Patients</h1>
        </Route>
        <Route path="/doctorsidenav">
          <DoctorsSideNav />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
