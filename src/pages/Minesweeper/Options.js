import React from 'react'
import Difficulty from './Difficulty'

import './Options.css'

export default class Options extends React.Component {
  state = {
    options: { ...this.props.options }
  }

  render() {
    return (
      <div className="options">
        <label>Пресет</label>
        <select onChange={this.handleSelectChange}>
        {Difficulty.map(it => (
          <option key={it.id} value={it.id}>{it.name}</option>
        ))}
        </select>
        <br/>
        <label>Ширина поля</label>
        <input type="text" name="width" value={this.state.options.width} onChange={this.handleInputChange}/>
        <br/>
        <label>Высота поля</label>
        <input type="text" name="height" value={this.state.options.height} onChange={this.handleInputChange}/>
        <br/>
        <label>Количество бомб</label>
        <input type="text" name="bombsCount" value={this.state.options.bombsCount} onChange={this.handleInputChange}/>
        <br/>
        <button onClick={this.handleClick}>Принять</button>
      </div>
    )
  }

  handleSelectChange = ({ target }) => {
    const filtered = Difficulty
      .filter(({ id }) => +id === +target.value)

    if (!filtered.length)
      return

    const options = { ...filtered[0].options }

    this.setState({ options });
  }

  handleInputChange = ({ target }) => {
    const options = {
      ...this.state.options,
      [target.name]: target.value
    }

    this.setState({ options });
  }

  handleClick = () => {
    for (const key in this.state.options)
      if (!this.state.options[key])
        return;

    this.props.onApplyClick(this.state.options);
  }
}