import React from "react";

class Board extends React.Component {
  handleClick = (event) => {
    const { player1, player2, turn, handleScore } = this.props;
    let tile = event.target;

    if (tile.innerHTML === "") {
      if (player1) {
        tile.innerHTML += "X";
        turn("player2", true, "player1", false);
        if (this.diagonal("X") || this.row("X") || this.column("X")) {
          handleScore("player1");
        }
      }
      if (player2) {
        tile.innerHTML += "O";
        turn("player1", true, "player2", false);
        if (this.diagonal("O") || this.row("O") || this.column("O")) {
          handleScore("player2");
        }
      }
    }
  };

  diagonal = (player) => {
    let topLeft = document.getElementsByClassName("left-top")[0];
    let middleCenter = document.getElementsByClassName("middle-center")[0];
    let bottomRight = document.getElementsByClassName("right-bottom")[0];
    let bottomLeft = document.getElementsByClassName("left-bottom")[0];
    let topRight = document.getElementsByClassName("right-top")[0];

    if (
      topLeft.innerHTML === player &&
      middleCenter.innerHTML === player &&
      bottomRight.innerHTML === player
    ) {
      return true;
    } else if (
      topRight === player &&
      middleCenter === player &&
      bottomLeft === player
    ) {
      return true;
    }

    return false;
  };

  row = (player) => {
    let leftTop = document.getElementsByClassName("left-top")[0];
    let middleTop = document.getElementsByClassName("middle-top")[0];
    let rightTop = document.getElementsByClassName("right-top")[0];

    let leftCenter = document.getElementsByClassName("left-center")[0];
    let middleCenter = document.getElementsByClassName("middle-center")[0];
    let rightCenter = document.getElementsByClassName("right-center")[0];

    let leftBottom = document.getElementsByClassName("left-bottom")[0];
    let middleBottom = document.getElementsByClassName("middle-bottom")[0];
    let rightBottom = document.getElementsByClassName("right-bottom")[0];

    if (leftTop === player && middleTop === player && rightTop === player) {
      return true;
    } else if (
      leftCenter === player &&
      middleCenter === player &&
      rightCenter === player
    ) {
      return true;
    } else if (
      leftBottom === player &&
      middleBottom === player &&
      rightBottom === player
    ) {
      return true;
    }
    return false;
  };

  column = (player) => {
    let leftTop = document.getElementsByClassName("left-top")[0];
    let middleTop = document.getElementsByClassName("middle-top")[0];
    let rightTop = document.getElementsByClassName("right-top")[0];

    let leftCenter = document.getElementsByClassName("left-center")[0];
    let middleCenter = document.getElementsByClassName("middle-center")[0];
    let rightCenter = document.getElementsByClassName("right-center")[0];

    let leftBottom = document.getElementsByClassName("left-bottom")[0];
    let middleBottom = document.getElementsByClassName("middle-bottom")[0];
    let rightBottom = document.getElementsByClassName("right-bottom")[0];

    if (leftTop === player && leftCenter === player && leftBottom === player) {
      return true;
    } else if (
      middleTop === player &&
      middleCenter === player &&
      middleBottom
    ) {
      return true;
    } else if (
      rightTop === player &&
      rightCenter === player &&
      rightBottom === player
    ) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className="board">
        <div id="1" className="tile left-top" onClick={this.handleClick}></div>
        <div
          id="2"
          className="tile middle-top"
          onClick={this.handleClick}
        ></div>
        <div id="3" className="tile right-top" onClick={this.handleClick}></div>

        <div
          id="4"
          className="tile left-center"
          onClick={this.handleClick}
        ></div>
        <div
          id="5"
          className="tile middle-center"
          onClick={this.handleClick}
        ></div>
        <div
          id="6"
          className="tile right-center"
          onClick={this.handleClick}
        ></div>

        <div
          id="7"
          className="tile left-bottom"
          onClick={this.handleClick}
        ></div>
        <div
          id="8"
          className="tile middle-bottom"
          onClick={this.handleClick}
        ></div>
        <div
          id="9"
          className="tile right-bottom"
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default Board;
