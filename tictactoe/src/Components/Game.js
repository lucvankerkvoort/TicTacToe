import React from "react";
import Board from "../Components/Board";

class Game extends React.Component {
  state = {
    turn: this.player1 ? "Player 1" : "Player2",
    player1: true,
    player2: false,
  };

  handleTurn() {}
  render() {
    const { turn } = this.state;
    return (
      <div className="game">
        <p>Its {turn}'s turn </p>
        <Board turn={this.handleTurn} />
      </div>
    );
  }
}

export default Game;
