import React from "react";

class Endgame extends React.Component {
  state = {
    tied: "You guys tied",
    playerWin: "You win " + this.props.winner + " !!",
  };
  handleClick = () => {
    this.props.endgame(false);
  };
  render() {
    const { winner } = this.props;
    const { tied, playerWin } = this.state;
    return (
      <div className="wrapper">
        <div className="screen">
          <p> {winner === "Tied" ? tied : playerWin} </p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Wanna try again?
          </button>
        </div>
      </div>
    );
  }
}

export default Endgame;
