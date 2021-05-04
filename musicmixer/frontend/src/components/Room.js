import React, { Component } from "react";


export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            skip_votes: 2,
            guest_pause: false,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode
    }

    render() {
        return (<div className="container w-100 h-100 bg-light text-dark">
                <h3>{this.roomCode}</h3>
                <p>Votes: {this.state.skip_votes}</p>
                <p>Can Guest Pause?: {this.state.guest_pause}</p>
                <p>Are you the Host?: {this.state.isHost}</p>
              
             
             </div>
            
            
            
            );
    }
}