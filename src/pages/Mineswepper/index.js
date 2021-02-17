import React from 'react';
import './index.css';

const params = {
  width: 9,
  height: 9,
  // bombs: 10,
};

const cellValues = {
  bomb: 'Q',
  mark: '!',
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '', isRevealed: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleClick(e) {
    if (this.state.value === cellValues.bomb) {
      alert("you've been blowed...");
      return;
    }

    this.setState({ value: this.props.value, isRevealed: true });
  }

  handleContextMenu(e) {
    e.preventDefault();

    if (this.state.value === cellValues.bomb)
      return;

    const value = this.state.value === '' ? cellValues.mark : '';

    this.setState({ value });
  }

  render() {
    const className = ['cell'];

    if (this.state.isRevealed)
      className.push('revealed');

    return (
      <div className={className.join(' ')} onClick={this.handleClick} onContextMenu={this.handleContextMenu}>
        {this.state.value}
      </div>
    );
  }
}

function Row(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  );
}

export default class Mineswepper extends React.Component {
  render() {
    const rows = [];

    for (let i = 0; i < params.height; i++) {
      const row = [];

      for (let j = 0; j < params.width; j++) {
        const value = !!Math.floor(Math.random() * 2) ? cellValues.bomb : '';

        row.push(<Cell key={j} value={value}/>);
      }

      rows.push(<Row key={i}>{row}</Row>);
    }

    return (
      <div className="field">
        {rows}
      </div>
    );
  }
}
