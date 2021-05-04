import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FormHelperText, Typography, RadioGroup, FormControlLabel, TextField } from "@material-ui/core";


export default class CreateRoom extends Component {

    defaultVotes = 2;

    constructor(props){
        super(props);
        this.state = {
            guestPause: true,
            votesToSkip: this.defaultVotes
        };
    
        this.createRoomPress = this.createRoomPress.bind(this);
        this.voteChanger = this.voteChanger.bind(this);
        this.guestPauseChanger = this.guestPauseChanger.bind(this);
    }



    createRoomPress(){

        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', },
            body: JSON.stringify({
                skip_votes: this.state.votesToSkip,
                guest_pause: this.state.guestPause
            }),
        };

        fetch('/api/create-room/', requestOptions).then((response) => {
            console.log(response); // response.json()
        }).then((data) => console.log(data));

    }

    voteChanger(e){
        console.log(this.state)
        this.setState({
            votesToSkip: e.target.value,
        });
    }

    guestPauseChanger(e){
        console.log(this.state)
        this.setState({
            guestPause: e.target.value === "true" ? true : false
        });
    }
    render() {
        return (<Grid container spacing={1}>

            <Grid item xs={12} align="center">
                <Typography component="h3" variant='h3'>
                    Create A Room!
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                       <div align='center'>Create Your Custom Room!</div>
                    </FormHelperText>

                    <RadioGroup row defaultValue="true" onChange={this.guestPauseChanger}>
                    <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
                    <FormControlLabel value="false" control={<Radio color="primary" />} label="No Control" labelPlacement="bottom" />

                    
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type="number" defaultValue={this.defaultVotes} inputProps={{ min: 1, style: {textAlign: "center"}, }} onChange={this.voteChanger}/>
                    <FormHelperText>
                       <div align='center'>Required Votes to Skip Song</div>
                    </FormHelperText>
                </FormControl>
            </Grid>

            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={this.createRoomPress}>Create Room!</Button>
                <a className="btn btn-outline-success" href="/api/roomlist/" >Create Room!</a>
            </Grid>

            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" href="/" >Cancel</Button>
            </Grid>

        </Grid>
            
            
            
            );
    }
}
