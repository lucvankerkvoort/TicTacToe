import React from "react";
import Navbar from "./Components/Navbar";
import Game from "./Components/Game";
import Login from "./Components/Login";
import "./App.css";

class App extends React.Component {
  state = {
    ties: 0,
    player1: 0,
    player2: 0,
    showLogin: true,
  };

  handleScore = (player) => {
    this.setState({ [player]: this.state[player] + 1 });
  };
  render() {
    const { ties, player1, player2, showLogin } = this.state;
    return (
      <div className="App">
        {showLogin ? <Login /> : null}
        <Navbar ties={ties} player1={player1} player2={player2} />
        <Game handleScore={this.handleScore} />
      </div>
    );
  }
}

export default App;
