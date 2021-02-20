import React from 'react';
import Icons from "./Icons";

import './Square.css';

export default class Square extends React.Component {
  handleContextMenu = (e) => {
    e.preventDefault();
  }

  handleMouseDown = (e) => {
    this._buttons = e.buttons;
  }

  handleMouseUp = (e) => {
    if (!this._buttons) return;

    switch (this._buttons) {
      case 1:
        this.props.onLeftClick(this.props);
        break;
      case 2:
        this.props.onRightClick(this.props);
        break;
      case 3:
        this.props.onBothClick(this.props);
        break;
      default:
        break;
    }

    this._buttons = null;
  }

  render() {
    const className = ['square'];
    let value = '';

    if (this.props.isOpened) {
      className.push('opened');

      if (this.props.withBomb)
        value = Icons.bomb;

      if (this.props.nearBombsCount) {
        value = this.props.nearBombsCount;
        className.push('number');
      }
    } else {
      if (this.props.isMarked)
        value = Icons.mark;

      if (this.props.isHelper)
        value = Icons.helper;
    }

    return (
      <div
        className={className.join(' ')}
        onContextMenu={this.handleContextMenu}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {value}
      </div>
    );
  }
}
