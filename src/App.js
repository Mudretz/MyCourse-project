import React from "react";
import Navbar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import RoutingUsers from "./components/routingUsers";
import PropTypes from "prop-types";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" render={(props) => <RoutingUsers {...props} />} />
                <Route path="/" component={Main} />
            </Switch>
        </div>
    );
}

App.propTypes = {
    users: PropTypes.any
};

export default App;
