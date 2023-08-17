import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { InformItemWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../../../../utils/format-utils'
import dayjs from 'dayjs'
const InformItem = memo((props) => {
  const { itemData = {} } = props
  console.log(itemData)
  const data = JSON.parse(itemData.notice)
  console.log(data)
  const changeGoto = (type) => {
    switch (type) {
      case 6:
        return
      default:
    }
  }
  return (
    <InformItemWrapper>
      <div className="inform-box" onClick={(e) => changeGoto(data.type)}>
        <NavLink to={`/user/home/${data.user.userId}`} className="a-img">
          <img src={getSizeImage(data.user.avatarUrl, 40)} alt="" />
        </NavLink>
        <div className="conent">
          <div className="name-time">
            <div className="name">
              <NavLink
                to={`/user/home/${data.user.userId}`}
                className="nikname"
              >
                {data.user.nickname}
              </NavLink>
              &nbsp;&nbsp;
              {data.type === 6 && <span className="good">赞了你的评论</span>}
              {data.type === 10 && (
                <span className="good">{data.generalNotice.actionDesc}</span>
              )}
            </div>
            <div className="time">
              <span className="time-text">
                {
                  dayjs().isAfter(dayjs(itemData?.time).add(1, 'hour'))
                    ? dayjs().isAfter(dayjs(itemData?.time).add(1, 'day')) // 判断与今天的时间相比如果 超过了1天
                      ? dayjs().isAfter(dayjs(itemData?.time), 'year')
                        ? dayjs(itemData?.time).format('YYYY年M月DD日')
                        : dayjs(itemData?.time).format('M月D日 HH:mm') // 月日 加 时间
                      : `${dayjs(itemData?.time)
                          .locale('zh-cn')
                          .calendar(null, {
                            sameDay: '[今天] HH:mm ', // The same day ( Today at 2:30 AM )
                            lastDay: '[昨天] HH:mm' // The day before ( Yesterday at 2:30 AM )
                          })} `
                    : dayjs(itemData?.time).locale('zh-cn').fromNow() // 不超过一小时 几秒前

                  // dayjs(itemData?.time).format('HH:mm')
                }
              </span>
              <span className="time-icon sprite_icon2"></span>
            </div>
          </div>
          {data.type === 6 && (
            <span className="text">{data.comment.content}</span>
          )}
          {data.type === 10 && (
            <div className="text">{data.generalNotice.content}</div>
          )}
        </div>
      </div>
    </InformItemWrapper>
  )
})

InformItem.propTypes = {
  itemData: PropTypes.object
}

export default InformItem
