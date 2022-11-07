import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { v4 as uuid } from 'uuid';
import { onAddData } from '../../../action';
import Display from '../component/Display';
import { connect } from 'react-redux';

 class Home extends Component {
  constructor() {
    super();
    this.state = {
      player: '',
      score: 0,
      formIsValid: false,
      playerError: '',
      scoreError: '',
    };
  }

  handleChange = (event) => {
    if (event.target.id == "player") {
      this.validatePlayer(event.target.value);
      console.log(event.target.value);
    } else if (event.target.id == "score") {
      this.validateScore(event.target.value);
      console.log(event.target.value);
    }
  }

  validatePlayer = (updatePlayer) => {
    let playerError = this.state.playerError;
    let formIsValid = this.state.formIsValid;
    if (String(updatePlayer).trim() === "") {
      playerError = "Please enter Player Name";
      formIsValid = false;
    } else {
      playerError = '';
      formIsValid = true;
    }
    this.setState({
      player: updatePlayer,
      playerError: playerError,
      formIsValid: formIsValid,
    });
    return formIsValid;
  };

  validateScore = (updateScore) => {
    let scoreError = this.state.scoreError;
    let formIsValid = this.state.formIsValid;
    if (updateScore === '') {
      scoreError = "Please enter Score";
      formIsValid = false;
    } else {
      scoreError = '';
      formIsValid = true;
    }
    this.setState({
      score: updateScore,
      scoreError: scoreError,
      formIsValid: formIsValid,
    });
    return formIsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let player = this.validatePlayer(this.state.player);
    let score = this.validateScore(this.state.score);
    if (player && score) 
     {
      const unique_id = uuid().slice(0, 8);
      this.props.onAddItem({ ...this.state, id: unique_id });
       let player = "";
      let score = "";
      let playerError = "";
      let scoreError = "";
      this.setState({
        player: player,
        playerError: playerError,
        score: score,
        scoreError: scoreError,
      });
    }
  }

  render() {
    const {playerDetails} = this.props;
    return (
      <Container component="main" maxWidth="md" style={{ marginTop: "20px" }}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Players Score Board
          </Typography>
        
            <TextField
              margin="normal"
              required
              fullWidth
              id="player"
              label="Player Name"
              name="player"
              value={this.state.player}
              onChange={this.handleChange}
              autoFocus
            />
             <p style={{ color: "maroon" }}>{this.state.playerError} </p>

            <TextField
              margin="normal"
              required
              fullWidth
              name="score"
              label="Score"
              type="number"
              id="score"
              value={this.state.score}
              onChange={this.handleChange}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={this.handleSubmit}
            >
             Update Players Score
            </Button>
             {playerDetails.length? (<Display playerData={this.props.playerDetails} /> ) : ('')}     
       </Container>
      
  )
}
};

const mapStateToProps = state => {
  return {
      playerDetails: state.playerScore
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddItem: (item) => dispatch(onAddData(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);