import React from "react";

class Navbar extends React.Component {
  state = {
    score: "",
    user1: "",
    user2: "",
  };
  render() {
    const { user1, user2, score } = this.state;
    return (
      <div className="navbar">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="statistics">
          <h2>Player1:{user1}</h2>
          <h2>Player2:{user2}</h2>
          <h2>Score: {score}</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
