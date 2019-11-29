import React, { Component } from 'react'
import * as actions from './redux/actions'

export default class App extends Component {

  increment = () => {
    const num = this.refs.numSelect.value * 1
    // 调用store的dispatch方法更新状态
    this.props.store.dispatch(actions.increment(num))
  }

  decrement = () => {
    const num = this.refs.numSelect.value * 1
    this.props.store.dispatch(actions.decrement(num))
  }

  incrementIfOdd = () => {
    const count = this.props.store.getState()
    if (count % 2 === 1) {
      const num = this.refs.numSelect.value * 1
      this.props.store.dispatch(actions.increment(num))
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.refs.numSelect.value * 1
      this.props.store.dispatch(actions.increment(num))
    }, 1000)
  }

  render() {
    const count = this.props.store.getState()

    return (
      <div>
        <p>
          click {count} times {' '}
        </p>
        <select ref="numSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>{' '}
        <button onClick={this.decrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

