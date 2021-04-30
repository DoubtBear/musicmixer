import React, { Component } from "react";
import { render } from "react-dom";
import Blog from "./Blog"


export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <h1>Welcome to the webpage</h1>
             
             <Blog/> 
             
             </div>
            
            
            
            );
    }
}


const appDiv = document.getElementById("main");

render(<App/>, appDiv);

