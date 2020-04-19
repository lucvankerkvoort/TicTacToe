import React from "react";
import Navbar from "./Components/Navbar";
import Game from "./Components/Game";
import "./App.css";

class App extends React.Component {
  state = {
    ties: 0,
    player1: 0,
    player2: 0,
  };

  handleScore = (player) => {
    this.setState({ [player]: this.state[player] + 1 });
  };
  render() {
    const { ties, player1, player2 } = this.state;
    return (
      <div className="App">
        <Navbar ties={ties} player1={player1} player2={player2} />
        <Game handleScore={this.handleScore} />
      </div>
    );
  }
}

export default App;
