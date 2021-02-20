import React from 'react';
import Square from './Square';

import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    const width = +this.props.width;
    const height = +this.props.height;

    const bombs = [];
    const isBomb = (x, y) => bombs.filter(bomb => bomb.x === x && bomb.y === y).length;

    for (let i = 0; i < this.props.bombsCount; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      if (isBomb(x, y))
        i--;
      else
        bombs.push({ x, y });
    }

    const nearBombs = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (isBomb(x, y)) continue;

        let count = 0;
  
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++)
            if (isBomb(x - dx, y - dy))
              count++;

        if (count)
          nearBombs.push({ x, y, count });
      }
    }

    const board = Array(height).fill()
      .map((_, y) => Array(width).fill()
        .map((_, x) => {
          const filtered = nearBombs.filter(cell => cell.x === x && cell.y === y);

          return {
            pos: { x, y },
            withBomb: Boolean(isBomb(x, y)),
            nearBombsCount: filtered.length ? filtered[0].count : 0,
            isOpened: false,
            isMarked: false,
            isHelper: false,
          };
        })
      );

    this.state = { board };

    console.log(
      this.state.board.map(row => (
        row.map(sqr => (
          sqr.withBomb ? 'Q' : sqr.nearBombsCount ? sqr.nearBombsCount + '' : ' '
        ))
      ))
    );
  }

  handleLeftClick = (square) => {
    this.setState({
      board: this.openCell(square),
    });
  }

  handleRightClick = (square) => {
    if (square.isOpened)
      return;

    this.setState({
      board: this.state.board.map(row => (
        row.map(sqr => {
          if (!(sqr.pos.x === square.pos.x && sqr.pos.y === square.pos.y))
            return sqr;

          if (!sqr.isMarked && !sqr.isHelper)
            sqr = { ...sqr, isMarked: true };
          else if (sqr.isMarked && !sqr.isHelper)
            sqr = { ...sqr, isMarked: false, isHelper: true };
          else if (!sqr.isMarked && sqr.isHelper)
            sqr = { ...sqr, isHelper: false };

          return sqr;
        })
      ))
    });
  }

  handleBothClick = (square) => {
    
  }

  openCell(square) {
    const board = this.state.board.map(row => row.map(sqr => sqr));

    const openCellRec = (x, y) => {
      if (!(board[y] && board[y][x]))
        return;

      const sqr = board[y][x];

      if (sqr.isOpened || sqr.isMarked)
        return;

      sqr.isOpened = true;

      if (sqr.withBomb || sqr.nearBombsCount)
        return;

      openCellRec(x - 1, y - 1);
      openCellRec(x    , y - 1);
      openCellRec(x + 1, y - 1);
      openCellRec(x + 1, y    );
      openCellRec(x + 1, y + 1);
      openCellRec(x    , y + 1);
      openCellRec(x - 1, y + 1);
      openCellRec(x - 1, y    );
    };

    openCellRec(square.pos.x, square.pos.y);

    return board;
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((row, y) => (
          <div key={y}>
            {row.map((item, x) => (
              <Square
                key={x}
                pos={item.pos}
                withBomb={item.withBomb}
                nearBombsCount={item.nearBombsCount}
                isOpened={item.isOpened}
                isMarked={item.isMarked}
                isHelper={item.isHelper}
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
