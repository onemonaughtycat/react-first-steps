import React from 'react';
import './Square.css';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = ['square'];

    if (this.props.children === '💣')
      className.push('bomb');

    if (1 <= this.props.children && this.props.children <= 8)
      className.push('number');

    return (
      <div className={className.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
