import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Headers from "./pages/Shared/Headers/Headers";
const Routes = () => {
    return (
        <div>
            <Router>
                <Headers />
                <Switch>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/home'>
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
