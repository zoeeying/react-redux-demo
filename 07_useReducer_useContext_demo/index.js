import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './Buttons'
import ShowText from './ShowText'
import { Color } from './redux'

const App = () => {
  return (
    <Color>
      <ShowText />
      <Buttons />
    </Color>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))