import React, { Component } from "react";
import { render } from "react-dom";



export default class Welcome extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="container w-100 h-100 bg-light text-dark">
            
             
              <h1 className="text-center shadow-sm">Welcome to Music Mixer!</h1>
             
             </div>
            
            
            
            );
    }
}