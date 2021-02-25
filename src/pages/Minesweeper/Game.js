import React from 'react';
import Bar from './Bar';
import Board from './Board';

import Logic from './Logic';
import Click from './Click';
import Status from './Status';

import './Game.css';

export default class Game extends React.Component {
  state = {
    board: Logic.initBoard(9, 9, 10),
    status: Status.running,
  };

  handleRestartClick = ({ width, height, bombsCount }) => {
    this.setState({
      board: Logic.initBoard(width, height, bombsCount),
      status: Status.running,
    });
  }

  handleSquareClick = (click, square) => {
    if (this.state.status !== Status.running) return;

    let board;

    switch (click) {
      case Click.openSquare:
        board = Logic.openSquare(this.state.board, square)
        break;
      case Click.setMark:
        board = Logic.setMark(this.state.board, square)
        break;
      case Click.openNearSquares:
        board = Logic.openNearSquares(this.state.board, square)
        break;
      default:
        break;
    }

    if (!board) return;

    const status = Logic.getStatus(board, board[square.y][square.x]);

    this.setState({ board, status });
  }

  render() {
    return (
      <div className="container">
        <Bar status={this.state.status} onRestartClick={this.handleRestartClick}/>
        <Board data={this.state.board} onSquareClick={this.handleSquareClick}/>
      </div>
    );
  }
}
