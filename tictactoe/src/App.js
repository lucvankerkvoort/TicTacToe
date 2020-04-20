import React from "react";
import Navbar from "./Components/Navbar";
import Game from "./Components/Game";
import Login from "./Components/Login";
import Endgame from "./Components/Endgame";
import "./App.css";

class App extends React.Component {
  state = {
    ties: 0,
    userName1: "Player1",
    userName2: "Player2",
    winner: "",
    player1: 0,
    player2: 0,
    showLogin: true,
    showEndgame: false,
  };

  handleScore = (player) => {
    const { userName1, userName2 } = this.state;
    let winner;
    if (player === "player1") {
      winner = userName1;
    } else if (player === "player2") {
      winner = userName2;
    } else {
      winner = "Tied";
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    });
  };

  handleName = (player1, player2) => {
    this.setState({ userName1: player1, userName2: player2, showLogin: false });
  };

  handleEndgame = (input) => {
    this.setState({ showEndgame: input });
  };
  render() {
    const {
      ties,
      player1,
      player2,
      showLogin,
      userName1,
      userName2,
      showEndgame,
      winner,
    } = this.state;
    return (
      <div className="App">
        {showEndgame ? (
          <Endgame winner={winner} endgame={this.handleEndgame} />
        ) : null}
        {showLogin ? <Login names={this.handleName} /> : null}
        <Navbar
          ties={ties}
          userName1={userName1}
          userName2={userName2}
          player1={player1}
          player2={player2}
        />
        <Game
          userName1={userName1}
          userName2={userName2}
          endgame={this.handleEndgame}
          handleScore={this.handleScore}
        />
      </div>
    );
  }
}

export default App;
