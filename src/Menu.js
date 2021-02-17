import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: -1 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    for (let i = 0; i < e.target.parentNode.children.length; i++)
      if (e.target === e.target.parentNode.children[i])
        this.setState({ selected: i });

    this.props.onItemClick(e.target.outerText);
  }

  render() {
    const ids = this.props.ids.map((id, i) => {
      let className = 'system-menu-item';

      if (i === this.state.selected)
        className += ' selected';

      return <li key={i} className={className} onClick={this.handleClick}>{id}</li>
    });

    return (
      <div className="system-menu-wrapper">
        <ul className="system-menu-container">{ids}</ul>
      </div>
    );
  }
}
