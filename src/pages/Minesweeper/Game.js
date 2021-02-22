import React from 'react';
import Board from './Board';

import Logic from "./Logic";
import Status from "./Status";

import './Game.css';

export default class Game extends React.Component {
  state = {
    board: Logic.initBoard(+this.props.width, +this.props.height, +this.props.bombsCount),
  }

  handleLeftClick = square => {
    const { board, status } = Logic.openSquare(this.state.board, square);
    this.setState({ board }, () => this.callbackGameOver(status));
  }

  handleRightClick = square => {
    const { board, status } = Logic.setMark(this.state.board, square);
    this.setState({ board }, () => this.callbackGameOver(status));
  }

  handleBothClick = square => {
    const { board, status } = Logic.tryOpenNearSquares(this.state.board, square);
    this.setState({ board }, () => this.callbackGameOver(status));
  }

  callbackGameOver(status) {
    if (status)
      this.props.onGameOver(status === Status.IsWin);
  }

  render() {
    return (
      <div className="container">
        <Board
          data={this.state.board}
          onLeftClick={this.handleLeftClick}
          onRightClick={this.handleRightClick}
          onBothClick={this.handleBothClick}
        />
      </div>
    );
  }
}
