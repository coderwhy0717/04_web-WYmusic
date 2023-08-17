import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import LoadingAnimation from '../../../../components/loading'
import { objectChange } from '../../../../utils/format-utils'
import { chechCookieAction } from '../../../discover/other-pages/store/loginAction'
import PrivateItem from './cpn/private-item'
import { renderRoutes } from 'react-router-config'

import { PrivateWrapper } from './style'
import { Suspense } from 'react'
const Comment = memo((props) => {
  const { route } = props

  const { msgPrivate } = useSelector(
    (state) => ({
      msgPrivate: state.getIn(['otherPages', 'msgPrivate'])
    }),
    shallowEqual
  )
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()
  // 获取当前路径
  const { pathname } = useLocation()
  useEffect(() => {
    console.log('private 执行')
    // 里面检测 cookie是否过期 过期了就跳转登录页面
    // 发送网络请求 私信
    dispatch(chechCookieAction(2))
      .then((res) => {
        setLoading(false)
        // console.log(res, 'res')
        // 失败 跳转登录页面
        history.push(res)
      })
      .catch((err) => {
        setLoading(false)
      })
    console.log('第一次')
  }, [dispatch, history])

  return (
    <PrivateWrapper>
      {/* {msgPrivate?.msgs[0].lastMsg} */}
      {loading ? (
        <LoadingAnimation />
      ) : pathname === '/msg/private' ? (
        objectChange(msgPrivate?.msgs) &&
        msgPrivate.msgs.map((item, index) => {
          return <PrivateItem itemData={item} key={item.user.id} />
        })
      ) : (
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(route.routes)}
        </Suspense>
      )}
    </PrivateWrapper>
  )
})

Comment.propTypes = {}

export default Comment
