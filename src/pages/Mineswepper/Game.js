import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.mainBoard = Array(+this.props.height).fill().map(() => Array(+this.props.width).fill(''));
    this.viewBoard = Array(+this.props.height).fill().map(() => Array(+this.props.width).fill(' '));

    for (let i = 0; i < +this.props.bombsCount; i++) {
      const x = Math.floor(Math.random() * +this.props.width);
      const y = Math.floor(Math.random() * +this.props.height);

      if (this.mainBoard[y][x] === '💣')
        i--;
      else {
        this.mainBoard[y][x] = '💣';
      }
    }

    for (let y = 0; y < +this.props.height; y++) {
      for (let x = 0; x < +this.props.width; x++) {
        if (this.mainBoard[y][x] === '💣')
          continue;

        let count = 0;
  
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++)
            if (this.mainBoard[y + dy] && this.mainBoard[y + dy][x + dx] === '💣')
              count++;

        if (count)
          this.mainBoard[y][x] = String(count);
      }
    }
  }

  render() {
    return <Board data={this.mainBoard}/>
  }
}
