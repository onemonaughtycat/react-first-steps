import React from 'react';
import Game from "./Game";

export default class Minesweeper extends React.Component {
  handleGameOver = isWin => {
    alert(isWin ? 'Ты победил' : 'Игра окончена');
  }

  render() {
    return <Game width="9" height="9" bombsCount="10" onGameOver={this.handleGameOver}/>;
  }
}
