import React from 'react'
import Options from './Options'
import Status from './Status'

import './Bar.css'

export default class Bar extends React.Component {
  state = {
    expanded: false
  }

  render() {
    return (
      <div className="bar">
        <div className="main">
          <div className="main-item button" onClick={this.handleRestartClick}>↻</div>
          <div className="main-item message">{this.message}</div>
          <div className="main-item button expander" onClick={this.handleOptionsClick}>⚙</div>
        </div>
        <div className={this.expandable}>
          <Options options={this.props.options} onApplyClick={this.handleApplyClick}/>
        </div>
      </div>
    );
  }

  handleRestartClick = () => {
    this.props.onRestartClick();
  }

  handleOptionsClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  handleApplyClick = options => {
    this.props.onRestartClick(options);
  }

  get message() {
    switch (this.props.status) {
      case Status.win:
        return 'Победа!'
      case Status.lose:
        return 'Игра окончена'
      default:
        return ''
    }
  }

  get expandable() {
    return 'expandable' + (this.state.expanded ? ' open' : '')
  }
}