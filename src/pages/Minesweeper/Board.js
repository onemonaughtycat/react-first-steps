import React from 'react';
import Square from './Square';

import './Board.css';

export default class Board extends React.Component {
  handleLeftClick = square => {
    this.props.onLeftClick(square);
  }

  handleRightClick = square => {
    this.props.onRightClick(square);
  }

  handleBothClick = square => {
    this.props.onBothClick(square);
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
                isHelper={square.isHelper}
                onLeftClick={this.handleLeftClick}
                onRightClick={this.handleRightClick}
                onBothClick={this.handleBothClick}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
