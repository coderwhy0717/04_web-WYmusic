import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CommentWrapper } from './style'
import { NavLink, useHistory } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { chechCookieAction } from '../../../discover/other-pages/store/loginAction'
import LoadingAnimation from '../../../../components/loading'
import CommentItem from './cpn/comment-item'
import { objectChange } from '../../../../utils/format-utils'
const Comment = memo((props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const { msgComment } = useSelector(
    (state) => ({
      msgComment: state.getIn(['otherPages', 'msgComment'])
    }),
    shallowEqual
  )
  // 进来网络请求
  useEffect(() => {
    // chechCookieAction
    dispatch(chechCookieAction(3)).then((res) => {
      setLoading(false)
      // console.log(res, 'res')
      // 失败 跳转登录页面
      history.push(res)
    })
  }, [dispatch, history])
  return (
    <CommentWrapper>
      {loading ? (
        <LoadingAnimation />
      ) : (
        objectChange(msgComment?.comments) &&
        msgComment.comments.map((item) => {
          return <CommentItem key={item.combindId} item={item} />
        })
      )}
    </CommentWrapper>
  )
})

Comment.propTypes = {}

export default Comment
