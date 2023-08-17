import React, { memo, useEffect, useState } from 'react'

import { headerLinks } from '@/common/local.data'

import {
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import SearchCpn from '../search-cpn'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeLoginShowAction } from '../../pages/user-home/store/actionCreators'
import LoginCover from '../../pages/login/cpn/login-cover'
import {
  chechCookieAction,
  getMessageNewCountAction
} from '../../pages/discover/other-pages/store/loginAction'
import Cookie from '../../utils/cookie'
import Localcache from '../../utils/cache'
import { getSizeImage, objectChange } from '../../utils/format-utils'
import { headBtnInfo, headBtnSet } from '../../common/local.data'

// import axios from 'axios'

export default memo(function WYAppHeader(props) {
  // useEffect(() =>{
  //   console.log("first")
  //   axios.request({
  //     url:'http://123.207.32.32:9001/banner',
  //     method:"get",

  //   }).then(res => {
  //     console.log(res)
  //   })
  // },[])
  // 页面代码

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  // 控制 消息图标

  const { LoginShowWindow, newMessageCount, MsgIcon } = useSelector(
    (state) => ({
      LoginShowWindow: state.getIn(['userHome', 'LoginShowWindow']),
      MsgIcon: state.getIn(['otherPages', 'MsgIcon']),
      newMessageCount: state.getIn(['otherPages', 'newMessageCount'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const changeLoginShow = () => {
    dispatch(changeLoginShowAction(true))
  }
  // cookie
  const cookie = Cookie.get('_cookie')
  const routeUrl = useLocation()
  const [count, setCount] = useState(0)
  useEffect(() => {
    // dispatch(chechCookieAction())
    // dispatch(chechCookieAction(2))
    // dispatch(chechCookieAction(3))
    // dispatch(chechCookieAction(4))
    // 通过路由改变去请求用户 我的消息 所有通知 最新消息 getMessageNewCount
    dispatch(getMessageNewCountAction(cookie)).then((res) => {
      // console.log(res, 'res')
      // 判断是否 无网络  ERR_NETWORK
      if (res === 'ERR_NETWORK') {
        history.push(`/${res}`)
      }
    })

    // setCount()
  }, [dispatch, routeUrl, cookie, history])
  useEffect(() => {
    let counts =
      newMessageCount.msg +
      newMessageCount.comment +
      newMessageCount.notice +
      newMessageCount.forward
    setCount(counts)
  }, [newMessageCount])
  // 获取本地数据
  const info = Localcache.getCache('userInfo')
  // 点击跳转 页面
  const changeGoToUrl = (url, id) => {
    if (url === '/user/home/') {
      history.push(`${url}${id}`)
      return
    } else {
      // 首次进入判断 定位到有消息的页面
      if (!!newMessageCount?.forward) {
        history.push('/msg/me')
        return
      } else if (!!newMessageCount?.msg) {
        history.push('/msg/private')
        return
      } else if (!!newMessageCount?.comment) {
        history.push('/msg/comment')
        return
      } else if (!!newMessageCount?.notice) {
        history.push('/msg/inform')
        return
      }
    }
    history.push('/msg/me')

    console.log(url, id)
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight MsgIcon={MsgIcon}>
          {/* 封装的搜索 组件 */}
          <SearchCpn />

          <div className="creation">
            <NavLink to={'/login'}>创作者中心</NavLink>
          </div>
          {objectChange(info) ? (
            <div className="info">
              <div>
                <img src={getSizeImage(info?.avatarUrl, 32)} alt=""></img>
                {count > 0 && <span className="msg_icon img_msg">{count}</span>}
              </div>
              <div className="sanj"></div>
              <div className="btn-info">
                <ul>
                  {headBtnInfo.map((item, index) => {
                    return (
                      <li
                        className="infoac"
                        key={item.title}
                        onClick={(e) => changeGoToUrl(item.link, info?.userId)}
                      >
                        <span
                          className={`info${index}  left_icon toplist_icon`}
                        ></span>
                        <span>{item.title}</span>
                        {index === 1 && count > 0 && (
                          <span className="msg_icon msg_index1">{count}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
                <ul className="ul_gang">
                  {headBtnSet.map((item, index) => {
                    return (
                      <li
                        className="infoac"
                        key={item.title}
                        onClick={(e) => changeGoToUrl(item.link, info?.userId)}
                      >
                        <span
                          className={`conter${index} left_icon toplist_icon`}
                        ></span>
                        <span>{item.title}</span>
                      </li>
                    )
                  })}
                </ul>
                <div className="infoac">
                  <span className="out_go left_icon toplist_icon"></span>
                  <span>退出</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="login">
              {/* <NavLink to={'/login'}>登录</NavLink> */}
              <p onClick={changeLoginShow}>登录</p>
            </div>
          )}
        </HeaderRight>
      </div>
      {/* 推荐 排行榜 歌单 主播电台 .... 的红色背景 */}
      <div className="divider"></div>
      {LoginShowWindow && (
        <div className="loginCover">
          <LoginCover />
        </div>
      )}
    </HeaderWrapper>
  )
})
