// 包含n个reducer函数
// 根据老的state和action返回一个新的state
import { ADD_COMMENT, DELETE_COMMENT } from './action-types'
const initComments = [
  { username: 'Tyler', content: '你是谁啊，快告诉我' },
  { username: 'Zoe', content: '我是谁你不知道吗' },
]

export function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((item, key) => action.data !== key)
    default: // 进来第一次会走default
      return state
  }
}