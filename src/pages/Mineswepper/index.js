import React from 'react';
import Game from "./Game";

export default class Mineswepper extends React.Component {
  render() {
    return <Game width="9" height="9" bombsCount="10"/>;
  }
}
