import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoadingAnimation from '../../../../components/loading'
import { objectChange } from '../../../../utils/format-utils'
import {
  chechCookieAction,
  getPrivateAction
} from '../../../discover/other-pages/store/loginAction'
import PrivateItem from './cpn/private-item'
import { PrivateWrapper } from './style'
const Comment = memo((props) => {
  const { msgPrivate } = useSelector(
    (state) => ({
      msgPrivate: state.getIn(['otherPages', 'msgPrivate'])
    }),
    shallowEqual
  )
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    // 发送网络请求 私信
    dispatch(chechCookieAction(2))
      .then((res) => {
        setLoading(false)
        console.log(res, 'res')

        history.push(res)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [dispatch, history])
  return (
    <PrivateWrapper>
      {/* {msgPrivate?.msgs[0].lastMsg} */}
      {loading ? (
        <LoadingAnimation />
      ) : (
        objectChange(msgPrivate?.msgs) &&
        msgPrivate.msgs.map((item, index) => {
          return <PrivateItem itemData={item} key={item.user.id} />
        })
      )}
    </PrivateWrapper>
  )
})

Comment.propTypes = {}

export default Comment
