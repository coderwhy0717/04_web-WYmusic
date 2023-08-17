import React, { memo, Suspense, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  changeMsgIconAction,
  chechCookieAction
} from '../discover/other-pages/store/loginAction'
import { renderRoutes } from 'react-router-config'
import { Breadcrumb, Modal } from 'antd'

import { MsgPrivateWrapper } from './style'
import { MsgBtnText } from '../../common/local.data'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
const MsgPrivate = memo((props) => {
  const { route } = props
  const { pathname } = useLocation()

  const [name, setName] = useState()
  const { newMessageCount } = useSelector(
    (state) => ({
      newMessageCount: state.getIn(['otherPages', 'newMessageCount'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const history = useHistory()

  // 检查登录状态 成功 发送网络请求  通知  我的 - 私信 - 评论 - 通知 getMsgPrivate
  useEffect(() => {
    // 里面检测 cookie是否过期 过期了就跳转登录页面

    // dispatch(chechCookieAction()).then((res) => {
    //   console.log(res, 'msg')
    //   if (res) {
    //     history.push(res)
    //   }
    // })

    // head头部上的 icon 通知-私信-消息 是否显示 使用raudx
    dispatch(changeMsgIconAction(false))
    return () => {
      dispatch(changeMsgIconAction(true))
    }
    // dispatch(changeLoginShowAction(false))
  }, [dispatch, history])

  useEffect(() => {
    console.log('aaaaa')
    console.log(pathname, 'his')

    switch (pathname) {
      case '/msg/me':
        return setName([{ title: '@我的' }])
      case '/msg/private':
        return setName([{ title: '私信' }])
      case '/msg/comment':
        return setName([{ title: '评论' }])
      case '/msg/inform':
        return setName([{ title: '通知' }])
      default:
        // 通过 路由传参 去设置值
        const data = pathname.indexOf('{"')
        if (!data) return
        const a = JSON.parse(pathname.slice(data))
        setName([
          { title: '私信', path: '/msg/private' },
          { title: a.nickname }
        ])
    }
  }, [pathname])
  const [modal2Open, setModal2Open] = useState(false)
  const changeOk = (e) => {
    console.log(e)

    setModal2Open(false)
  }
  const changeCancel = (e) => {
    console.log(e)

    setModal2Open(false)
  }
  return (
    <MsgPrivateWrapper>
      <div className="msg_private wrap-v2 ">
        <div className="left">
          <div className="title">我的消息</div>
          <ul>
            {MsgBtnText.map((item, index) => {
              return (
                <NavLink to={item.link} key={item.title}>
                  <span
                    className={`t_icon${index} msg_me-icon sprite_icon_v2`}
                  ></span>
                  <span className="item">{item.title}</span>
                  {0 === index && !!newMessageCount?.forward && (
                    <span className="msg_icon msg_index1 s">
                      {newMessageCount?.forward}
                    </span>
                  )}

                  {1 === index && !!newMessageCount?.msg && (
                    <span className="msg_icon msg_index1">
                      {newMessageCount?.msg}
                    </span>
                  )}
                  {2 === index && !!newMessageCount?.comment && (
                    <span className="msg_icon msg_index1">
                      {newMessageCount?.comment}
                    </span>
                  )}
                  {3 === index && !!newMessageCount?.notice && (
                    <span className="msg_icon msg_index1">
                      {newMessageCount?.notice}
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
          <div className="top-name">
            <Breadcrumb separator=">" items={name} />
            {name?.length > 1 && (
              <div className="rome" onClick={(e) => setModal2Open(true)}>
                <span className="shan sprite_icon2"></span>
                <span>清除对话</span>
              </div>
            )}
          </div>
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
      <Modal
        title="提示"
        centered
        open={modal2Open}
        onOk={changeOk}
        onCancel={changeCancel}
        cancelText="取消"
        okText="确认"
      >
        <p>确定删除与该组用户的对话？</p>
        <p>暂时没有对应删除api，感谢使用!</p>
      </Modal>
    </MsgPrivateWrapper>
  )
})

export default MsgPrivate
