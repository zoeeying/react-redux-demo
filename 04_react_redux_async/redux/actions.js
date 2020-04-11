/**
 * 包含所有action creator
 * 同步的action返回一个对象
 * 异步的action返回一个函数
 **/
import { INCREMENT, DECREMENT } from './action-types'

export const increment = (number) => ({ type: INCREMENT, data: number })
export const decrement = (number) => ({ type: DECREMENT, data: number })
/**
 * 异步action
 * 在store.js中应用异步的中间件applyMiddleware(thunk)，才可以返回一个函数，默认只能返回对象
 */
export const incrementAsync = (number) => (dispatch) => {
  // 异步的代码
  setTimeout(() => {
    // 1秒后才去分发一个同步的action
    dispatch(increment(number))
  }, 1000)
}
