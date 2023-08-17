import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { UserEventWrapper } from './style'
import { getSizeImage, objectChange } from '../../../../../utils/format-utils'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import UserInfo from '../../../../../components/user-info'
import {
  getConcernAction,
  getUserEventListAction,
  getUserEventListArrAction,
  getUserInfoAction
} from '../../../../user-home/store/actionCreators'
import TitleCover from '../../../../user-home/cpn/title-cover'
import EventItem from './cpn-item'
import { useScrollHooks } from '../../../../../hooks/scroll-hooks'

import LoadingAnimation from '../../../../../components/loading'
import { useState } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const UserEvent = memo((props) => {
  const dispatch = useDispatch()
  const { userInfo, EventList, FollowsList } = useSelector(
    (state) => ({
      userInfo: state.getIn(['userHome', 'userInfo']),
      EventList: state.getIn(['userHome', 'EventList']),
      FollowsList: state.getIn(['userHome', 'FollowsList'])
    }),
    shallowEqual
  )
  console.log(userInfo)

  useEffect(() => {
    // 用户信息 getUserInfoAction
    dispatch(getUserInfoAction(props.match.params.id))
    // 网络请求 ta的动态 getUserEventListAction
    dispatch(getUserEventListAction(props.match.params.id))
    // 获取 Ta的前6个关注
    dispatch(getConcernAction(props.match.params.id, 6))
  }, [dispatch, props.match.params.id])
  const { isReach } = useScrollHooks()
  console.log(isReach)
  // const [isVar, setIsVar] = useState(true)
  const isVar = useRef(true)
  useEffect(() => {
    if (EventList?.size === 0) return
    if (isVar.current && isReach) {
      isVar.current = false
      setTimeout(() => {
        console.log('网络请求')
        // getUserEventListArrAction
        dispatch(
          getUserEventListAction(props.match.params.id, 15, EventList.lasttime)
        )
        isVar.current = true
      }, 3000)
    }
  }, [isReach, dispatch, EventList, props.match.params.id])

  return (
    <UserEventWrapper>
      <div className="box-user-event wrap-v2">
        {objectChange(userInfo) && (
          <UserInfo userInfo={userInfo} id={props.match.params.id} />
        )}

        {objectChange(EventList) ? (
          <>
            <TitleCover title={`TA的动态（${EventList?.size}）`} />

            <div className="conent">
              <div className="left">
                {objectChange(EventList?.events) &&
                  EventList?.events.map((item, index) => {
                    return <EventItem key={index} item={item} />
                    // return <div key={item.id}>index:{item.id}</div>
                  })}
                {/* 滚动底部加载 loading 根据变量来显示 */}
                {
                  isVar.current ? (
                    EventList?.size === 0 && (
                      <>
                        <h2>暂时还没有动态</h2>
                      </>
                    )
                  ) : (
                    // 加载 中 封装
                    <div className="loading">
                      <LoadingAnimation />
                    </div>
                  )

                  // EventList?.size !== 0 ?: (
                  //   '暂时还没有动态'
                  // )
                }
              </div>
              <div className="right-a">
                {FollowsList.code === 200 &&
                  objectChange(FollowsList.follow) && (
                    <div>
                      <div className="top-Ta">Ta的关注</div>
                      <ul className="ul-six">
                        {FollowsList.follow.map((item) => {
                          return (
                            <li key={item.userId}>
                              <NavLink to={`/user/home/${item.userId}`}>
                                <img
                                  src={getSizeImage(item.avatarUrl, 64)}
                                  alt=""
                                />
                              </NavLink>
                              <div className="name-box ">
                                <NavLink
                                  to={`/user/home/${item.userId}`}
                                  className="name-six text-nowrap"
                                >
                                  {item.nickname}
                                </NavLink>
                                <span className="icon-six">
                                  <img
                                    src={getSizeImage(
                                      item?.avatarDetail?.identityIconUrl,
                                      13
                                    )}
                                    alt=""
                                  />
                                </span>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </>
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </UserEventWrapper>
  )
})

UserEvent.propTypes = {}

export default UserEvent
