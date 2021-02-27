import React from 'react'
import Bar from './Bar'
import Board from './Board'

import Logic from './Logic'
import Click from './Click'
import Status from './Status'

import './Game.css'

export default class Game extends React.Component {
  state = this.restart()

  render() {
    return (
      <div className="container">
        <Bar 
          options={this.state.options}
          status={this.state.status}
          onRestartClick={this.handleRestartClick}
        />
        <Board
          data={this.state.board}
          onSquareClick={this.handleSquareClick}
        />
      </div>
    )
  }

  handleRestartClick = options => {
    this.setState(this.restart(options))
  }

  handleSquareClick = (click, square) => {
    if (this.isGameOver) return

    let board

    switch (click) {
      case Click.openSquare:
        if (this.state.status === Status.prepared)
          board = Logic.generateBombs(this.state.board, square, this.state.options.bombsCount)
        board = Logic.openSquare(board || this.state.board, square)
        break
      case Click.setMark:
        board = Logic.setMark(this.state.board, square)
        break
      case Click.openNearSquares:
        board = Logic.openNearSquares(this.state.board, square)
        break
      default:
        break
    }

    if (!board) return

    const status = Logic.getStatus(board, board[square.y][square.x])

    this.setState({ board, status })
  }

  restart(options) {
    const { width = 9, height = 9, bombsCount = 10 } = options || (this.state && this.state.options) || {}

    return {
      options: { width, height, bombsCount },
      board: Logic.initBoard(width, height, bombsCount),
      status: Status.prepared
    }
  }

  get isGameOver() {
    const { status } = this.state

    return status === Status.win || status === Status.lose
  }
}