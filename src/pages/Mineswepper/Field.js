import React from 'react';
import "./Field.css";

export default class Field extends React.Component {
  render() {
    const rows = [];

    for (let i = 0; i < this.props.height; i++) {
      const row = [];
      
      for (let j = 0; j < this.props.width; j++)
        row.push(<div key={j} className="field-cell">{j + (i * this.props.height) + 1}</div>);

      rows.push(<div key={i} className="field-row">{row}</div>);
    }

    return <div className="field">{rows}</div>;
  }
}
