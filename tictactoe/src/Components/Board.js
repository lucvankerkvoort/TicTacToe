import React from "react";

class Board extends React.Component {
  handleClick = (event) => {
    let tile = event.target;
  };
  render() {
    return (
      <div className="board">
        <div className="tile left-top" onClick={this.handleClick}></div>
        <div className="tile middle-top" onClick={this.handleClick}></div>
        <div className="tile right-top" onClick={this.handleClick}></div>

        <div className="tile left-center" onClick={this.handleClick}></div>
        <div className="tile middle-center" onClick={this.handleClick}></div>
        <div className="tile right-center" onClick={this.handleClick}></div>

        <div className="tile left-bottom" onClick={this.handleClick}></div>
        <div className="tile middle-bottom" onClick={this.handleClick}></div>
        <div className="tile right-bottom" onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default Board;
