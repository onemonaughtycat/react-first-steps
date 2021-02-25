import React from 'react';

import Status from './Status';
import Difficulty from './Difficulty';

import './Bar.css';

export default class Bar extends React.Component {
  state = {
    width: '9',
    height: '9',
    bombsCount: '10',
    expanded: false,
  }

  handleRestartClick = e => {
    const { width, height, bombsCount } = this.state;
    this.props.onRestartClick({ width, height, bombsCount });

    this.setState({ expanded: false });
  }

  handleOptionsClick = e => {
    this.setState({ expanded: !this.state.expanded });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectChange = e => {
    const { width, height, bombsCount } = Difficulty.filter(it => it.id === +e.target.value)[0].options;
    this.setState({ width, height, bombsCount });
  }

  render() {
    let message = '';

    switch (this.props.status) {
      case Status.win:
        message = 'Победа!';
        break;
      case Status.lose:
        message = 'Игра окончена';
        break;
      default:
        break;
    }

    const expandable = 'expandable' + (this.state.expanded ? ' open' : '')

    return (
      <div className="bar">
        <div className="main">
          <div className="main-item button" onClick={this.handleRestartClick}>↻</div>
          <div className="main-item message">{message}</div>
          <div className="main-item button expander" onClick={this.handleOptionsClick}>⚙</div>
        </div>
        <div className={expandable}>
          <label>Пресет</label>
          <select onChange={this.handleSelectChange}>
          {Difficulty.map(it => (
            <option key={it.id} value={it.id}>{it.name}</option>
          ))}
          </select>
          <br/>
          <label>Ширина поля</label>
          <input type="text" name="width" value={this.state.width} onChange={this.handleInputChange}/>
          <br/>
          <label>Высота поля</label>
          <input type="text" name="height" value={this.state.height} onChange={this.handleInputChange}/>
          <br/>
          <label>Количество бомб</label>
          <input type="text" name="bombsCount" value={this.state.bombsCount} onChange={this.handleInputChange}/>
          <br/>
          <button onClick={this.handleRestartClick}>Принять</button>
        </div>
      </div>
    );
  }
}
