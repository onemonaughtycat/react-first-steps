import React from 'react';
import Board from './Board';

import Logic from "./Logic";

import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board: Logic.initBoard(+this.props.width, +this.props.height, +this.props.bombsCount),
    };

    Logic.logBoard(this.state.board);
  }

  handleLeftClick = square => {
    this.setState({
      board: Logic.openSquare(this.state.board, square),
    });
  }

  handleRightClick = square => {
    this.setState({
      board: Logic.setMark(this.state.board, square),
    });
  }

  handleBothClick = square => {
    this.setState({
      board: Logic.tryOpenNearSquares(this.state.board, square),
    });
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
