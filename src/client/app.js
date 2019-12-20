import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from "./component/homepage";
import Login from "./component/Login";
import SignUp from "./component/signup";
import about from "./component/aboutpage";
import Shops from "./component/shops";
import Contact from "./component/contact";
import Nav from './component/Nav'

const app=() => {
    return (
   <Router>
 <Nav />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shops' component={Shops} />
        <Route path='/about' component={about} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup'component={SignUp} />
    </Switch>
   </Router>
    )
}

export default app; 