import React, { Component } from "react";
import { render } from "react-dom";
import Blog from "./Blog"


export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="container w-100 h-100 bg-light text-dark">
            <h1 className="bg-light text-dark text-center">Welcome to the webpage</h1>
             
              
             
             </div>
            
            
            
            );
    }
}


const appDiv = document.getElementById("main");

render(<App/>, appDiv);

