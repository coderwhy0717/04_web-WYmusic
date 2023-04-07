import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { LoginWrapper } from './style'

import LoginCover from './cpn/login-cover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { chechCookieAction } from '../discover/other-pages/store/loginAction'
import { useHistory } from 'react-router-dom'
const Login = memo((props) => {
  console.log(props)
  const dispatch = useDispatch()
  // 暂时 使用这个达到 路由拦截
  const history = useHistory()
  dispatch(chechCookieAction()).then((res) => {
    if (res === undefined) {
      history.go(-1)
    }
  })
  //
  const { LoginShowWindow } = useSelector(
    (state) => ({
      LoginShowWindow: state.getIn(['userHome', 'LoginShowWindow'])
    }),
    shallowEqual
  )

  return (
    <LoginWrapper>
      <div className="login wrap-v2">
        <div className="title">请用你的云音乐帐号登录</div>
        <LoginCover showX={false} LoginShowWindow={LoginShowWindow} />
      </div>
    </LoginWrapper>
  )
})

Login.propTypes = {}

export default Login
