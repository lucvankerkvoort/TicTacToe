import React from "react";

class Login extends React.Component {
  state = {
    player1: "",
    player2: "",
  };

  handleChange = (event) => {
    console.log(event.target.classList[0]);
    let player = event.target.classList[0];
    this.setState({ [player]: event.target.value });
  };

  handleClick = (event) => {
    const { player1, player2 } = this.state;
  };
  render() {
    return (
      <div className="login">
        <div className="modal">
          <label>Player 1</label>
          <input type="name" className="player1" onChange={this.handleChange} />
          <label>Player 2</label>
          <input type="name" className="player2" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
