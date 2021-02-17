import React from 'react';
import Menu from './Menu';
import Page from './Page';
import { ids } from "./pages";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '' };

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(id) {
    if (this.state.id !== id)
      this.setState({ id });
  }

  render() {
    const id = this.state.id;

    return (
      <div>
        <Menu ids={ids} onItemClick={this.handleMenuItemClick}/>
        <Page id={id}/>
      </div>
    );
  }
}
