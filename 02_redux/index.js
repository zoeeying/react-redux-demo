import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'

import App from './App'


const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}
// 初始化渲染
render()
// 订阅监听，store中的状态改变了，就会自动调用进行重绘
store.subscribe(render)

