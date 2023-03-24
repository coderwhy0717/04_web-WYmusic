import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LoginWrapper } from './style'

import LoginCover from './cpn/login-cover'
const Login = memo((props) => {
  return (
    <LoginWrapper>
      <div className="login wrap-v2">
        <div className="title">请用你的云音乐帐号登录</div>
        <LoginCover />
      </div>
    </LoginWrapper>
  )
})

Login.propTypes = {}

export default Login
