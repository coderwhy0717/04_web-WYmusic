import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { LoginWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getKeyAction } from '../discover/other-pages/store/loginAction'
import { Input, Select, Space } from 'antd'
const Login = memo((props) => {
  const { LoginQRCode, QRCode } = useSelector(
    (state) => ({
      LoginQRCode: state.getIn(['userHome', 'LoginQRCode']),
      QRCode: state.getIn(['userHome', 'QRCode'])
    }),
    shallowEqual
  )
  //1. 改 true
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState(false)
  // 3. 改 fasle
  const [phone, setPhone] = useState(true)
  const display = useDispatch()
  //2. 打开
  useEffect(() => {
    // 获取 key 和 二维码img等 状态
    // display(getKeyAction())
  }, [display])
  const changeLogin = (value) => {
    setShowLogin(!showLogin)
    if (value === 1) {
      // 得取消上一次定时器
      display(getKeyAction(2))
    }
  }
  // 刷新 二维码
  const changeQRcode = () => {
    display(getKeyAction())
  }
  // 点击密码登录
  const Login = () => {
    setPhone(!phone)
  }
  const options = [
    {
      label: '中国大陆 +86',
      value: '+86'
    },
    {
      value: '+886',
      label: '中国台湾 +886'
    }
  ]
  return (
    <LoginWrapper>
      <div className="login wrap-v2">
        <div className="title">请用你的云音乐帐号登录</div>
        {showLogin ? (
          <div className="login-box">
            {QRCode.code === 802 ? (
              <div className="code802">
                <img
                  className="img802"
                  src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9765284460/1b1d/9f46/2fa3/2d5d07bb5fcf8c24c1ad788c923ef313.png"
                  alt=""
                />
                <div className="sao">扫描成功</div>
                <div className="saoq">请在手机上确认登录</div>
              </div>
            ) : (
              <div>
                <div className="login-titles">登录</div>
                <div className="top">
                  <img
                    src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
                    alt=""
                  />
                  <ul className="saom">
                    <li className="title-s">扫描登录</li>
                    <li className="ma">
                      <img src={LoginQRCode} alt="" />
                      {QRCode.code === 800 && (
                        <div className="bgc">
                          <div className="bgc-bgc"></div>
                          <ul>
                            <li className="title-bgc">二维码已失效</li>
                            <li className="btn" onClick={changeQRcode}>
                              点击刷新
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li className="link">
                      使用 <a href="/#">网易云音乐APP</a> 扫码登录
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className="footer" onClick={(e) => changeLogin(1)}>
              选择其他登录模式
            </div>
          </div>
        ) : (
          <div className="login-box">
            <div className="login-titles">手机号登录</div>
            {phone ? (
              <div className="phone">
                <ul>
                  <li>
                    <Space.Compact>
                      <Select
                        defaultValue="+86"
                        options={options}
                        dropdownStyle=""
                        listHeight={150}
                        defaultActiveFirstOption={false}
                        dropdownMatchSelectWidth={false}
                      />
                      <Input placeholder="请输入手机号" />
                    </Space.Compact>
                  </li>
                  <li className="code">
                    <Input placeholder="请输入短信验证码" />
                    <span>获取验证码</span>
                  </li>
                  <li>登录</li>
                  <li>密码登录</li>
                </ul>
                <div className="phone-footer">
                  <p>《 其他登录方式</p>
                  <p>《 没有帐号？免费注册</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="conter-box">
                  <div className="left">
                    <img
                      src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9647707645/c8e7/4d8d/1895/6dff82b63181104bbac7cf3743c8b613.png"
                      alt=""
                    />
                    <ul>
                      <li className="li1 sprite_btn" onClick={Login}>
                        手机号登录
                      </li>
                      <li className="li2 sprite_btn">注册</li>
                    </ul>
                  </div>
                  <div className="right">right</div>
                </div>
                <div className="other">
                  <img
                    className="qrcode"
                    src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9656441793/9f07/c197/3af2/f07b8d6ef20964be159ce812841fc9d2.png"
                    alt=""
                    onClick={(e) => changeLogin(1)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </LoginWrapper>
  )
})

Login.propTypes = {}

export default Login
