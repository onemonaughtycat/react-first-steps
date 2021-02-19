import React from 'react';
import './Game.css';
import Board from './Board';
import Types from "./Types";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleSquareClick = this.handleSquareClick.bind(this);

    this.mainBoard = Array(+this.props.height).fill().map(() => Array(+this.props.width).fill(Types.EMPTY));
    this.viewBoard = Array(+this.props.height).fill().map(() => Array(+this.props.width).fill(Types.CLOSED));

    for (let i = 0; i < +this.props.bombsCount; i++) {
      const x = Math.floor(Math.random() * +this.props.width);
      const y = Math.floor(Math.random() * +this.props.height);

      if (this.mainBoard[y][x] === Types.BOMB)
        i--;
      else {
        this.mainBoard[y][x] = Types.BOMB;
      }
    }

    for (let y = 0; y < +this.props.height; y++) {
      for (let x = 0; x < +this.props.width; x++) {
        if (this.mainBoard[y][x] === Types.BOMB)
          continue;

        let count = 0;
  
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++)
            if (this.mainBoard[y + dy] && this.mainBoard[y + dy][x + dx] === Types.BOMB)
              count++;

        if (count)
          this.mainBoard[y][x] = String(count);
      }
    }
  }

  handleSquareClick(button, pos) {
    console.log(button, pos);
  }

  render() {
    return (
      <div className="mineswepper">
        <Board data={this.mainBoard} onSquareClick={this.handleSquareClick}/>
      </div>
    );
  }
}
