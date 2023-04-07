import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import MeItem from './cpn/me-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { MeWrapper } from './style'
import { objectChange } from '../../../../utils/format-utils'
import {
  atMeAction,
  chechCookieAction
} from '../../../discover/other-pages/store/loginAction'
import LoadingAnimation from '../../../../components/loading'
import { useHistory } from 'react-router-dom'
// 做了懒加载
const Comment = memo((props) => {
  const { msgMe } = useSelector(
    (state) => ({
      msgMe: state.getIn(['otherPages', 'msgMe'])
    }),
    shallowEqual
  )
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    // 发送网络请求  @我的
    dispatch(chechCookieAction(1))
      .then((res) => {
        setLoading(false)
        // 要是cookie没有或者过期 通过返回的路径 跳转到登录页面
        if (res) {
          history.push(res)
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [dispatch, history])
  // 偏移几条数据
  let MeOffset = useRef(0)
  const changeMeOffset = () => {
    console.log(msgMe?.more)
    if (msgMe?.more) {
      MeOffset.current += 1
      console.log(MeOffset.current, 'MeOffset')
      // 网络请求
      dispatch(atMeAction(MeOffset.current * 20))
    }
  }
  return (
    <MeWrapper>
      <button onClick={(e) => changeMeOffset()}>+1</button>
      {loading ? (
        <LoadingAnimation />
      ) : (
        objectChange(msgMe?.forwards) &&
        msgMe.forwards.map((item, index) => {
          return (
            <MeItem
              key={index}
              itemData={item}
              index={index}
              newCount={msgMe?.newCount}
            />
          )
        })
      )}
    </MeWrapper>
  )
})

Comment.propTypes = {}

export default Comment
