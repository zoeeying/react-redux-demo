// 包含n个reducer函数
// 根据老的state和action返回一个新的state
import { combineReducers } from 'redux'
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS, INCREMENT, DECREMENT } from './action-types'

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((item, key) => action.data !== key)
    case RECEIVE_COMMENTS:
      return action.data
    default: // 进来第一次会走default
      return state
  }
}

export default combineReducers({ counter, comments })

// 如果不止一个reducer，redux向外暴露的state的数据结构？
// { counter: 12, comments: [] }