import React from 'react';
import Icons from './Icons';
import Click from './Click';

import './Square.css';

export default class Square extends React.Component {
  handleContextMenu = e => {
    e.preventDefault();
  }

  /* Нажатие ЛКМ и ПКМ одновременно используется для безопасного открытия ячеек.
   * Разделение на onMouseDown и onMouseUp сделано для следующего:
   * если была нажата одна из кнопок (1 - ЛКМ, 2 - ПКМ), то будет вызвано событие одной из этих кнопок,
   * иначе будет считаться нажатие двух кнопок (3).
   * Грубо говоря, игрок не проиграет, если даже случайно нажмет обе кнопки на клетку, где есть бомба. */

  handleMouseDown = e => {
    this.buttons = e.buttons;
  }

  handleMouseUp = e => {
    if (!this.buttons) return;

    switch (this.buttons) {
      case 1:
        this.props.onSquareClick(Click.openSquare, this.props);
        break;
      case 2:
        this.props.onSquareClick(Click.setMark, this.props);
        break;
      case 3:
        this.props.onSquareClick(Click.openNearSquares, this.props);
        break;
      default:
        break;
    }

    this.buttons = null;
  }

  handleTouchStart = e => {
    this._timeStamp = e.timeStamp;
  }

  handleTouchEnd = e => {
    e.preventDefault();

    const diff = e.timeStamp - this._timeStamp;

    if (!this.props.isOpened && diff < 500)
      this.props.onSquareClick(Click.openSquare, this.props);

    if (!this.props.isOpened && diff >= 500)
      this.props.onSquareClick(Click.setMark, this.props);

    if (this.props.isOpened)
      this.props.onSquareClick(Click.openNearSquares, this.props);
  }

  render() {
    const className = ['square'];
    let value = '';

    if (this.props.isOpened) {
      className.push('opened');

      if (this.props.withBomb)
        value = Icons.bomb;

      if (this.props.nearBombsCount)
        value = this.props.nearBombsCount;
    } else {
      if (this.props.isMarked)
        value = Icons.mark;
    }

    return (
      <div
        className={className.join(' ')}
        onContextMenu={this.handleContextMenu}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="value">
          {value}
        </div>
      </div>
    );
  }
}
