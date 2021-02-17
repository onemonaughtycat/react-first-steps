import React from 'react';
import { pages } from "./pages";

export default class Page extends React.Component {
  render() {
    const SomePage = pages[this.props.id];

    if (!SomePage)
      return null;

    return <SomePage/>;
  }
}
