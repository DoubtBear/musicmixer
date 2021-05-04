import React, { Component } from "react";
import { render } from "react-dom";
import Welcome from "./Welcome"
import CreateRoom from "./CreateRoom"
import SignInSide from "./SignInSide"
import Room from "./Room"
import {BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom"


export default class ContentRouter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Welcome}></Route>
                    <Route exact path='/createroom' component={CreateRoom}></Route>
                    <Route path='/room/:roomCode' component={Room}></Route>
                </Switch>
            </Router>
            
            
            );
    }
}