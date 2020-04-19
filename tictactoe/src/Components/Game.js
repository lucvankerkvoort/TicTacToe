import React from "react";
import Board from "../Components/Board";

class Game extends React.Component {
  state = {
    player1: true,
    player2: false,
  };

  handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
    this.setState({
      [firstPlayer]: firstBoolean,
      [secondPlayer]: secondBoolean,
    });
  };

  render() {
    const { player1, player2 } = this.state;
    return (
      <div className="game">
        <p>Its {player1 ? "Player 1" : "Player 2"}'s turn </p>
        <Board
          turn={this.handleTurn}
          player1={player1}
          player2={player2}
          handleScore={this.props.handleScore}
        />
      </div>
    );
  }
}

export default Game;
