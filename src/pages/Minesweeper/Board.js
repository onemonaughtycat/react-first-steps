import React from 'react';
import Square from './Square';

import './Board.css';

export default class Board extends React.Component {
  handleSquareClick = (clickType, square) => {
    this.props.onSquareClick(clickType, square);
  }

  render() {
    return (
      <div className="board">
        {this.props.data.map((row, y) => (
          <div key={y} className="row">
            {row.map((square, x) => (
              <Square
                key={x}
                x={square.x}
                y={square.y}
                withBomb={square.withBomb}
                nearBombsCount={square.nearBombsCount}
                isOpened={square.isOpened}
                isMarked={square.isMarked}
                onSquareClick={this.handleSquareClick}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
