import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { CommentItemWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { getSizeImage, objectChange } from '../../../../../utils/format-utils'
import dayjs from 'dayjs'
import { Input } from 'antd'
import { useEffect } from 'react'

const CommentItem = memo((props) => {
  const { item = {} } = props
  const [value, setValue] = useState('')
  const [showHui, setShowHui] = useState(false)
  const inputRef = useRef(null)
  const data = objectChange(item) && JSON.parse(item.resourceJson)
  console.log(item)
  const { TextArea } = Input
  console.log(data)
  // 点击回复
  const changeHui = (item) => {
    console.log(item.content)
    setShowHui(!showHui)

    setValue(`@${item.user.nickname}:`)
  }
  useEffect(() => {
    if (showHui) {
      inputRef?.current.focus({
        cursor: 'end'
      })
    }
  }, [showHui])

  const changeMe = () => {
    setValue(`${value}@`)
    inputRef?.current.focus({
      cursor: 'end'
    })
  }

  return (
    <CommentItemWrapper>
      <NavLink to={`/user/home/${item.user.userId}`}>
        <img src={getSizeImage(item.user.avatarUrl, 50)} alt="" />
      </NavLink>
      <div className="text-right">
        <div className="top-name-time">
          <NavLink to={`/user/home/${item.user.userId}`}>
            {item.user.nickname}
          </NavLink>
          <div className="right-time">
            {
              dayjs().isAfter(dayjs(item?.time).add(1, 'hour'))
                ? dayjs().isAfter(dayjs(item?.time).add(1, 'day')) // 判断与今天的时间相比如果 超过了1天
                  ? dayjs().isAfter(dayjs(item?.time), 'year')
                    ? dayjs(item?.time).format('YYYY年M月D日 HH:mm')
                    : dayjs(item?.time).format('M月D日 HH:mm') // 月日 加 时间
                  : `${dayjs(item?.time).locale('zh-cn').calendar(null, {
                      sameDay: '[今天] HH:mm ', // The same day ( Today at 2:30 AM )
                      lastDay: '[昨天] HH:mm' // The day before ( Yesterday at 2:30 AM )
                    })} `
                : dayjs(item?.time).locale('zh-cn').fromNow() // 不超过一小时 几秒前

              // dayjs(itemData?.lastMsgTime).format('HH:mm')
            }
            <span className="time-icon sprite_icon2"></span>
          </div>
        </div>
        <div className="huifu">回复我：{item.content}</div>
        <div className="footer">
          <div className="footer-top">
            <NavLink
              to={`/discover/playSong/${data.id}`}
              className="me-comment"
            >
              {item.beRepliedContent}
            </NavLink>
            <span className="on-hui" onClick={(e) => changeHui(item)}>
              回复
            </span>
          </div>
          {showHui && (
            <div className="show-huifu">
              <div className="text">
                <TextArea
                  ref={inputRef}
                  value={value}
                  maxLength={140}
                  onChange={(e) => setValue(e.target.value)}
                  autoSize={{
                    minRows: 2,
                    maxRows: 2
                  }}
                  TextArea="aaa"
                  // defaultValue="Ant Design love you!"
                />
              </div>
              <div className="huifu-btn">
                <ul>
                  <li className="x sprite_icon2"></li>
                  <li className="me sprite_icon2" onClick={changeMe}></li>
                </ul>
                <div className="hui-btn">
                  <span className="number">
                    {value.length !== 0 ? 140 - value.length : 140}
                  </span>
                  <span className="btn-h">回复</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <i className="corr"></i>
      </div>
    </CommentItemWrapper>
  )
})

CommentItem.propTypes = {
  item: PropTypes.object
}

export default CommentItem
