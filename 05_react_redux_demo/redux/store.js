import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)), // 应用上异步的中间件
) // 内部会第一次调用reducer函数得到初始state
