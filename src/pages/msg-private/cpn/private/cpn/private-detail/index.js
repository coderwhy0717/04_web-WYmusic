import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getPrivateConentAction,
  getSendPrivateAction
} from '../../../../../discover/other-pages/store/loginAction'
import { PrivateConentWrapper } from './style'
import { objectChange } from '../../../../../../utils/format-utils'
import { useRef } from 'react'
import ChatCover from '../../../../../../components/chat-cover'
import { useState } from 'react'
import LoadingAnimation from '../../../../../../components/loading'
import { throttle, debounce } from 'underscore'
import { Input } from 'antd'
const PrivateDetail = memo((props) => {
  const ConentRef = useRef()
  const { TextArea } = Input
  const dispatch = useDispatch()
  const { PrivateConent } = useSelector(
    (state) => ({
      PrivateConent: state.getIn(['otherPages', 'PrivateConent'])
    }),
    shallowEqual
  )
  const pa = useParams()

  const headTop = useRef(true) //变量 控制 到顶的次数
  const PrivateInputRef = useRef()

  const [showCaht, setShowChat] = useState(true)
  const [value, setValue] = useState('')
  const [fdatas, setFdatas] = useState()
  const [userId, setUserId] = useState(0)
  useEffect(() => {
    const pas = JSON.parse(pa?.data)
    // 获取私信内容 /msg/private/history?uid=9003
    dispatch(getPrivateConentAction(pas.id)).then((res) => {
      setShowChat(false)
    })
    console.log(pa, '执行1')
  }, [dispatch, pa])

  // useEffect(() => {
  //   if (!showCaht) {
  //     // 初始化 滚动的位置
  //     ConentRef.current.scrollTo({
  //       top: ConentRef.current.scrollHeight,
  //       behavior: 'instant'
  //     })
  //     console.log(ConentRef.current.scrollHeight, 'cahng')
  //   }
  // }, [showCaht, pa])

  // 初始化 滚动的位置
  useEffect(() => {
    ConentRef.current.scrollTo({
      top: ConentRef.current.scrollHeight,
      behavior: 'instant'
    })
  })

  // 聊天数据反过来
  useEffect(() => {
    console.log(PrivateConent, '执行3')
    let fdata = objectChange(PrivateConent?.msgs)
      ? [...PrivateConent?.msgs]
      : []
    console.log(fdata?.reverse())
    setFdatas(fdata)
    console.log(fdata, '数据反过来')
    const userinfo = JSON.parse(localStorage.getItem('userInfo')) ?? 0
    setUserId(userinfo.userId)

    // const end = PrivateConent.msgs.slice(-1)
    // const endTime = PrivateConent?.msgs[PrivateConent?.msgs?.length - 1]?.time
  }, [PrivateConent])

  // 监听滚动 加载数据

  const fn = debounce(() => {
    console.log(headTop.current, 'headTop.current')
    if (
      ConentRef.current.scrollTop === 0 &&
      headTop.current &&
      PrivateConent.more
    ) {
      headTop.current = false
      console.log('网络请求')
      console.log(PrivateConent.msgs, '数据2')
      // const end = PrivateConent.msgs.slice(-1)[0].time
      // console.log(end, '时间1')
      const pas = JSON.parse(pa?.data)
      dispatch(getPrivateConentAction(pas.id, 1)).then((res) => {
        console.log(res, '加载更多')
        if (res) {
          ConentRef.current.scrollTo({
            top: 10,
            behavior: 'instant'
          })
          headTop.current = true
        }
      })
    }
  })
  useEffect(() => {
    // 判断是否还是有数据 是否还能请求数据
    console.log(PrivateConent?.more, 'PrivateConent?.more')
    if (PrivateConent?.more) {
      // console.log(PrivateConent.more, 'PrivateConent.more')
      console.dir(ConentRef.current)
      ConentRef.current.addEventListener('scroll', fn)
      // console.dir(ConentRef.current, '滚动')
      return () => {
        document.removeEventListener('scroll', fn)
      }
    }
    // console.log(PrivateConent?.msgs, '执行3')
  }, [ConentRef, PrivateConent, fn])
  // 点击 发送 send 聊天内容
  const sendChat = () => {
    console.log('send')
    const pas = JSON.parse(pa?.data)
    // send 网络请求发送私信 getSendPrivateAction
    dispatch(getSendPrivateAction(pas.id, value)).then((res) => {
      if (res.code === 200) {
        dispatch(getPrivateConentAction(pas.id))
      }
    })
    setValue('')
  }

  return (
    <PrivateConentWrapper>
      <div className="private-conent" ref={ConentRef}>
        {showCaht ? (
          <LoadingAnimation />
        ) : (
          objectChange(fdatas) &&
          fdatas.map((item) => {
            return (
              <ChatCover key={item.id} item={item} userId={userId}></ChatCover>
            )
          })
        )}
      </div>
      <div className="footer-chat">
        <div className="text-input">
          <TextArea
            ref={PrivateInputRef}
            value={value}
            maxLength={200}
            onChange={(e) => setValue(e.target.value)}
            autoSize={{
              minRows: 2.5,
              maxRows: 3
            }}
            // TextArea="aaa"
            // defaultValue="Ant Design love you!"
          />
        </div>
        <div className="chat-footer-btn">
          <p className="x sprite_icon2"></p>
          <div className="send-btn">
            <span className="number">{200 - value.length}</span>
            <span className="btn-h" onClick={sendChat}>
              发送
            </span>
          </div>
        </div>
      </div>
    </PrivateConentWrapper>
  )
})

PrivateDetail.propTypes = {}

export default PrivateDetail
