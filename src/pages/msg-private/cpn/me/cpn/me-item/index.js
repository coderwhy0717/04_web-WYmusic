import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import {
  getSizeImage,
  objectChange
} from '../../../../../../utils/format-utils'
import { MeItemWrapper } from './style'
import dayjs from 'dayjs'

import { useDispatch } from 'react-redux'
import { getUserIdAction } from '../../../../../discover/other-pages/store/loginAction'
import { getPlaySongDetailAction } from '../../../../../player/store/actionCreators'

const MeItem = memo((props) => {
  // index newCount 都是控制红点
  const { itemData = {}, index = -1, newCount = -1 } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const data = JSON.parse(itemData?.json)

  // console.log(data)

  //  对@ at的数据提取处理
  const text = objectChange(data?.comment) && data?.comment?.content.split(' ')
  //提取 @文字 改变原数组 text
  const newUserId = text.pop()

  // 不能名字搜索 用户主页 只能搜索第一个用户获取userId取跳转
  const changeGoToName = (name) => {
    const newName = name.split('@')
    dispatch(getUserIdAction(newName[1])).then((res) => {
      console.log(res, 'return')
      history.push(`/user/home/${res}`)
    })
  }
  // msgMe?.newCount 2 index = 0
  // 点击播放音乐
  const changePlayMusic = (id) => {
    dispatch(getPlaySongDetailAction(id))
  }
  // 最新的 红标点
  const [arr, setArr] = useState([])
  useEffect(() => {
    const shu = []
    for (let i = 0; i < newCount; i++) {
      shu.push(i)
    }
    setArr(shu)
  }, [newCount])
  console.log()
  console.log()
  // .utcOffset(8) new Date().getTime() -
  // dayjs().isAfter(dayjs(data?.comment?.time).add(1, 'day'))

  return (
    <MeItemWrapper>
      {arr.includes(index) && <i className="red_dian"></i>}
      <NavLink to={`/user/home/${data?.comment?.user?.userId}`}>
        <img
          src={getSizeImage(data?.comment?.user?.avatarUrl, 50, 'y')}
          alt=""
        />
      </NavLink>
      <div className="conent">
        <div className="title-id-time">
          {/* userId */}
          <p>
            <NavLink
              to={`/user/home/${data?.comment?.user?.userId}`}
              className="name-t"
            >
              {data?.comment?.user?.nickname}
            </NavLink>
            <span>&nbsp;评论</span>
          </p>
          {/* <span>{data?.comment?.time}</span> */}
          {/* 超过一小时后 转变 */}
          <NavLink to={`/discover/playSong/${data?.resource?.id}`}>
            {/*dayjs().isAfter(dayjs(data?.comment?.time).add(1, 'hour') 判断 与 当前的时间相比如果 超过了一小时后  */}
            {
              dayjs().isAfter(dayjs(data?.comment?.time).add(0, 'hour'))
                ? dayjs().isAfter(dayjs(data?.comment?.time).add(1, 'day')) // 判断与今天的时间相比如果 超过了1天
                  ? dayjs(itemData?.time).format('M月D日 HH:mm') // 月日 加 时间
                  : `${dayjs(data?.comment?.time)
                      .locale('zh-cn')
                      .calendar(null, {
                        sameDay: '[今天] HH:mm ', // The same day ( Today at 2:30 AM )
                        lastDay: '[昨天] HH:mm' // The day before ( Yesterday at 2:30 AM )
                      })} `
                : dayjs(data?.comment?.time).locale('zh-cn').fromNow() // 不超过一小时 几秒前
            }
          </NavLink>
        </div>
        <div className="uid-conent">
          {text.map((item, index) => {
            return (
              <span
                key={index}
                className="uid-name"
                onClick={(e) => changeGoToName(item)}
              >
                {item}&nbsp;
              </span>
            )
          })}
          <span className="uid-text">&nbsp;{newUserId}</span>
        </div>
        <div className="music-conent">
          <div className="music-play">
            <img
              src={getSizeImage(data?.resource?.album?.picUrl, 40, 'y')}
              alt=""
            />
            <div
              className="play at_btn"
              onClick={(e) => changePlayMusic(data?.resource?.id)}
            ></div>
          </div>
          <div className="music-t">
            <NavLink to={`/discover/playSong/${data?.resource?.id}`}>
              {data?.resource?.name}
            </NavLink>
            <div className="artists">
              {objectChange(data?.resource?.artists) &&
                data?.resource?.artists.map((item) => {
                  return (
                    <span key={item.id} className="ar-a">
                      <NavLink to={`/discover/artist/${item.id}`}>
                        {item.name}
                      </NavLink>
                      {data?.resource?.artists.length > 1 && <i> / </i>}
                    </span>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="btn-footer">
          <NavLink to={`/discover/playSong/${data?.resource?.id}`}>
            查看音乐
          </NavLink>
          <span>|</span>
          <i>回复</i>
        </div>
      </div>
    </MeItemWrapper>
  )
})

MeItem.propTypes = {
  itemData: PropTypes.object,
  index: PropTypes.number,
  newCount: PropTypes.number
}

export default MeItem
