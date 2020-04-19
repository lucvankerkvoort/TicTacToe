import React from "react";

class Navbar extends React.Component {
  render() {
    const { player1, player2, ties } = this.props;
    return (
      <div className="navbar">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="statistics">
          <h2>Player1:{player1}</h2>
          <h2>Player2:{player2}</h2>
          <h2>Ties: {ties}</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
