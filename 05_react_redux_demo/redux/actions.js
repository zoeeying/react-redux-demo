// 包含了所有的action creator（action的工厂函数）
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-types'

// 同步添加
export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment })

// 同步删除
export const deleteComment = (index) => ({ type: DELETE_COMMENT, data: index })

//同步接收comments，不需要暴露出去，只是内部使用
const receiveComments = (comments) => ({ type: RECEIVE_COMMENTS, data: comments })

// 异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    // 模拟发送异步请求获取数据
    setTimeout(()=>{
      const comments = [
        { username: 'Tyler', content: '你是谁啊，快告诉我' },
        { username: 'Zoe', content: '我是谁你不知道吗' },
      ]
      // 分发一个同步的action
      dispatch(receiveComments(comments))
    }, 1000)
  }
}