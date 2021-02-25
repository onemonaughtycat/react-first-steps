import React from 'react';
import Board from './Board';

import Logic from './Logic';
import ClickType from './ClickType';
import Status from './Status';

import './Game.css';

export default class Game extends React.Component {
  state = this.restart();

  handleRestartClick = e => {
    this.setState(this.restart());
  }

  handleSquareClick = (clickType, square) => {
    if (this.state.status) return;

    let board;

    switch (clickType) {
      case ClickType.openSquare:
        board = Logic.openSquare(this.state.board, square)
        break;
      case ClickType.setMark:
        board = Logic.setMark(this.state.board, square)
        break;
      case ClickType.openNearSquares:
        board = Logic.openNearSquares(this.state.board, square)
        break;
      default:
        break;
    }

    if (!board) return;

    const status = Logic.getStatus(board, board[square.y][square.x]);

    this.setState({ board, status });
  }

  restart() {
    return {
      board: Logic.initBoard(+this.props.width, +this.props.height, +this.props.bombsCount),
      status: 0,
    };
  }

  render() {
    let message = '';

    switch (this.state.status) {
      case Status.win:
        message = 'Победа!';
        break;
      case Status.lose:
        message = 'Игра окончена';
        break;
      default:
        break;
    }

    return (
      <div className="container">
        <div className="helpers">
          <button onClick={this.handleRestartClick}>Начать заново</button>
          <span className="message">{message}</span>
        </div>
        <Board data={this.state.board} onSquareClick={this.handleSquareClick}/>
      </div>
    );
  }
}
