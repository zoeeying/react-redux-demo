import React from 'react'
import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addComment, deleteComment} from '../../redux/actions'


class App extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  componentDidMount() {

  }


  render() {
    const { comments, addComment, deleteComment } = this.props
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={addComment} />
          <CommentList comments={comments} delete={deleteComment} />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ comments: state }), // state就是一个comments数组
  { addComment, deleteComment }
)(App)