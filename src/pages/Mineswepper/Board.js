import React from 'react';
import './Board.css';
import Square from './Square';

export default class Board extends React.Component {
  render() {
    const rows = [];

    for (let y = 0; y < this.props.data.length; y++) {
      const row = [];

      for (let x = 0; x < this.props.data[y].length; x++) {
        const char = this.props.data[y][x];

        row.push(
          <Square key={x} onSquareClick={button => this.props.onSquareClick(button, { x, y })}>
            {char}
          </Square>
        );
      }

      rows.push(<div key={y}>{row}</div>);
    }

    return <div className="board">{rows}</div>
  }
}
