import React from 'react';
import Board from './Board';

import './Game.css';

export default class Game extends React.Component {
  render() {
    return (
      <div className="mineswepper">
        <Board
          width="9"
          height="9"
          bombsCount="10"
        />
      </div>
    );
  }
}
