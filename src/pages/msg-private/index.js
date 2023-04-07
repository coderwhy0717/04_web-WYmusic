import PropTypes from 'prop-types'
import React, { memo, Suspense, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  changeMsgIconAction,
  chechCookieAction
} from '../discover/other-pages/store/loginAction'
import { renderRoutes } from 'react-router-config'
import classNames from 'classnames'

import { MsgPrivateWrapper } from './style'
import { MsgBtnText } from '../../common/local.data'
import { NavLink, useHistory } from 'react-router-dom'
import { changeLoginShowAction } from '../user-home/store/actionCreators'
import LoadingAnimation from '../../components/loading'
const MsgPrivate = memo((props) => {
  const { route } = props
  const [indexs, setIndexs] = useState(0)
  const [name, setName] = useState('@我的')
  const { msgMe, msgPrivate, msgComment, msgInform } = useSelector(
    (state) => ({
      msgMe: state.getIn(['otherPages', 'msgMe']),
      msgPrivate: state.getIn(['otherPages', 'msgPrivate']),
      msgComment: state.getIn(['otherPages', 'msgComment']),
      msgInform: state.getIn(['otherPages', 'msgInform'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const history = useHistory()

  // 检查登录状态 成功 发送网络请求  通知  我的 - 私信 - 评论 - 通知 getMsgPrivate
  useEffect(() => {
    // 里面检测 cookie是否过期 过期了就跳转登录页面
    console.log(
      dispatch(chechCookieAction()).then((res) => {
        console.log(res, 'msg')
        if (res) {
          history.push(res)
        }
      }),
      '调用'
    )

    // icon 通知-私信-消息 是否显示 使用raudx
    dispatch(changeMsgIconAction(false))
    return () => {
      dispatch(changeMsgIconAction(true))
    }
    // dispatch(changeLoginShowAction(false))
  }, [dispatch, history])
  // useEffect(() => {

  // }, [dispatch])

  const changeGoToUrl = (url, index, name) => {
    console.log(url)
    history.push(url)
    setIndexs(index)
    if (name === '我的') {
      setName('@我的')
    } else {
      setName(name)
    }
  }

  return (
    <MsgPrivateWrapper>
      <div className="msg_private wrap-v2 ">
        <div className="left">
          <div className="title">我的消息</div>
          <ul>
            {MsgBtnText.map((item, index) => {
              return (
                <NavLink
                  className={classNames({ bgAcive: index === indexs })}
                  to={item.link}
                  key={item.title}
                >
                  <span
                    className={`t_icon${index} msg_me-icon sprite_icon_v2`}
                  ></span>
                  <span className="item">{item.title}</span>
                  {0 === index && !!msgMe?.newCount && (
                    <span className="msg_icon msg_index1 s">
                      {msgMe?.newCount}
                    </span>
                  )}
                  {1 === index && !!msgPrivate?.newMsgCount && (
                    <span className="msg_icon msg_index1">
                      {msgPrivate?.newMsgCount}
                    </span>
                  )}
                  {2 === index && !!msgComment?.newCount && (
                    <span className="msg_icon msg_index1">
                      {msgComment?.newCount}
                    </span>
                  )}
                  {3 === index && !!msgInform?.newCount && (
                    <span className="msg_icon msg_index1">
                      {msgInform?.newCount}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </ul>
          <div className="read">
            <p>一键已读</p>
          </div>
        </div>
        <div className="right">
          <div className="top-name">{name}</div>
          {/* 做了加载动画 */}
          {/* {msgPrivate?.code === 200 ? ( */}
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(route.routes)}
          </Suspense>
          {/* ) : (
            <LoadingAnimation />
          )} */}
        </div>
      </div>
    </MsgPrivateWrapper>
  )
})

MsgPrivate.propTypes = {}

export default MsgPrivate
