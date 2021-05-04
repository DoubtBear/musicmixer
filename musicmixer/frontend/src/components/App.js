import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoom from "./CreateRoom"
import SignInSide from "./SignInSide"
import ContentRouter from "./ContentRouter"

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="container w-100 h-100 bg-light text-dark">
            
             
              <ContentRouter/>
             
             </div>
            
            
            
            );
    }
}


const appDiv = document.getElementById("main");

render(<App/>, appDiv);

