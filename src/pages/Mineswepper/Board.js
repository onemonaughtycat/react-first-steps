import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];

    for (let y = 0; y < this.props.data.length; y++) {
      const row = [];

      for (let x = 0; x < this.props.data[y].length; x++) {
        const char = this.props.data[y][x];

        row.push(<Square key={x}>{char}</Square>);
      }

      rows.push(<div key={y}>{row}</div>);
    }

    return <div>{rows}</div>
  }
}
