import React from 'react';
import './Square.css';
import Types from "./Types";

export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleContextMenu(e) {
    e.preventDefault();
  }

  handleMouseDown(e) {
    this._buttons = e.buttons;
  }

  handleMouseUp() {
    if (!this._buttons) return;

    switch (this._buttons) {
      case 1:
        this.props.onSquareClick('left');
        break;
      case 2:
        this.props.onSquareClick('right');
        break;
      case 3:
        this.props.onSquareClick('both');
        break;
      default:
        break;
    }

    this._buttons = null;
  }

  render() {
    const className = ['square'];

    if (this.props.children === Types.CLOSED)
      className.push('closed');

    if (1 <= this.props.children && this.props.children <= 8)
      className.push('number');

    return (
      <div
        className={className.join(' ')}
        onContextMenu={this.handleContextMenu}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {this.props.children}
      </div>
    );
  }
}
