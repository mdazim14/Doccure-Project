import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './pages/Home/Home';


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;