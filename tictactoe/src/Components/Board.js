import React from "react";

class Board extends React.Component {
  handleClick = (event) => {
    const { player1, player2, turn, handleScore } = this.props;
    let tile = event.target;

    if (tile.innerHTML === "") {
      if (player1) {
        tile.innerHTML += "X";
        tile.classList.remove("played");
        turn("player2", true, "player1", false);
        if (this.diagonal("X") || this.row("X") || this.column("X")) {
          handleScore("player1");
          this.reset();
        }
      }
      if (player2) {
        tile.innerHTML += "O";
        tile.classList.remove("played");
        turn("player1", true, "player2", false);
        if (this.diagonal("O") || this.row("O") || this.column("O")) {
          handleScore("player2");
          this.reset();
        }
      }
    }

    let allTiles = document.getElementsByClassName("played");
    if (allTiles.length < 1) {
      handleScore("ties");
      this.reset();
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
      topRight.innerHTML === player &&
      middleCenter.innerHTML === player &&
      bottomLeft.innerHTML === player
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

    if (
      leftTop.innerHTML === player &&
      middleTop.innerHTML === player &&
      rightTop.innerHTML === player
    ) {
      return true;
    } else if (
      leftCenter.innerHTML === player &&
      middleCenter.innerHTML === player &&
      rightCenter.innerHTML === player
    ) {
      return true;
    } else if (
      leftBottom.innerHTML === player &&
      middleBottom.innerHTML === player &&
      rightBottom.innerHTML === player
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

    if (
      leftTop.innerHTML === player &&
      leftCenter.innerHTML === player &&
      leftBottom.innerHTML === player
    ) {
      return true;
    } else if (
      middleTop.innerHTML === player &&
      middleCenter.innerHTML === player &&
      middleBottom.innerHTML === player
    ) {
      return true;
    } else if (
      rightTop.innerHTML === player &&
      rightCenter.innerHTML === player &&
      rightBottom.innerHTML === player
    ) {
      return true;
    }

    return false;
  };

  reset = () => {
    let allTiles = document.getElementsByClassName("tile");

    for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].innerHTML = "";
      allTiles[i].classList.add("played");
    }
  };
  render() {
    return (
      <div className="board">
        <div
          id="1"
          className="tile left-top played"
          onClick={this.handleClick}
        ></div>
        <div
          id="2"
          className="tile middle-top played"
          onClick={this.handleClick}
        ></div>
        <div
          id="3"
          className="tile right-top played"
          onClick={this.handleClick}
        ></div>

        <div
          id="4"
          className="tile left-center played"
          onClick={this.handleClick}
        ></div>
        <div
          id="5"
          className="tile middle-center played"
          onClick={this.handleClick}
        ></div>
        <div
          id="6"
          className="tile right-center played"
          onClick={this.handleClick}
        ></div>

        <div
          id="7"
          className="tile left-bottom played"
          onClick={this.handleClick}
        ></div>
        <div
          id="8"
          className="tile middle-bottom played"
          onClick={this.handleClick}
        ></div>
        <div
          id="9"
          className="tile right-bottom played"
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default Board;
