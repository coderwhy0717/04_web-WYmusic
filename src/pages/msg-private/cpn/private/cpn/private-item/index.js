import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { getSizeImage } from '../../../../../../utils/format-utils'
import { PrivateItemWarpper } from './style'
import { NavLink, useHistory, useLocation } from 'react-router-dom'

import dayjs from 'dayjs'
const PrivateItem = memo((props) => {
  const { itemData = {} } = props
  const lastMsg = JSON.parse(itemData.user.lastMsg)
  const msg = JSON.parse(lastMsg.msg)
  // console.log(lastMsg)
  // console.log(msg)
  // console.log(itemData)
  const history = useHistory()
  const changeGoPrivate = (e, item) => {
    // console.log(item, 'id,nickname,count  ,noticeaccountflag')
    // console.log(
    //   item.fromUser.userId,
    //   item.fromUser.nickname,
    //   item.newMsgCount,
    //   item.noticeAccountFlag
    // )
    const itemd = {
      id: item.fromUser.userId,
      nickname: item.fromUser.nickname,
      count: item.newMsgCount,
      noticeAccountFlag: item.noticeAccountFlag
    }
    history.push(`/msg/private/detail/${JSON.stringify(itemd)}`)
  }
  // useEffect(() => {
  //   // console.log(state)
  // }, [state])
  const changeGo = (e, id) => {
    console.log(id, 'id')
    e.stopPropagation()
    history.push(`/user/home/${id}`)
  }
  return (
    <PrivateItemWarpper>
      <div
        className="private-item-box"
        onClick={(e) => changeGoPrivate(e, itemData)}
      >
        <div className="p-img">
          {!!itemData.newMsgCount && (
            <span className="msg_icon msg_index1">{itemData.newMsgCount}</span>
          )}

          <img
            onClick={(e) => changeGo(e, itemData?.user?.fromUserId)}
            src={getSizeImage(itemData.fromUser.avatarUrl, 50, 'y')}
            alt=""
          />
        </div>
        <div className="p-conent">
          <div className="pc-top">
            <div className="name">
              {/* <NavLink to={`/user/home/${itemData?.user?.fromUserId}`}>
                {itemData.fromUser.nickname}
              </NavLink> */}
              <div
                className="a"
                onClick={(e) => changeGo(e, itemData?.user?.fromUserId)}
              >
                {itemData.fromUser.nickname}
              </div>
              {itemData?.fromUser?.avatarDetail?.identityIconUrl && (
                <img
                  className="img-icon"
                  src={getSizeImage(
                    itemData?.fromUser?.avatarDetail?.identityIconUrl,
                    5
                  )}
                  alt=""
                />
              )}
            </div>
            <div className="p-time">
              <span className="time">
                {
                  // dayjs(itemData?.lastMsgTime).calendar(null, {
                  //   sameDay: 'HH:mm ', // 同一天 (sameDay)	今天 2:30
                  //   nextDay: '[明天] HH:mm', // 下一天 (nextDay)	明天 2:30
                  //   nextWeek: '[下星期日] HH:mm', // 下个星期 (nextWeek)	星期日 2:30
                  //   lastDay: '[昨天] HH:mm', // 前一天 (lastDay)	昨天 2:30
                  //   lastWeek: '[上星期一] HH:mm', //上个星期 (lastWeek)	上星期一 2:30
                  //   sameElse: 'YYYY-MM-DD' // 其他 (sameElse)	2011-7-10
                  // })
                  //
                  dayjs().isAfter(dayjs(itemData?.lastMsgTime).add(1, 'hour'))
                    ? dayjs().isAfter(
                        dayjs(itemData?.lastMsgTime).add(1, 'day')
                      ) // 判断与今天的时间相比如果 超过了1天
                      ? dayjs().isAfter(dayjs(itemData?.lastMsgTime), 'year')
                        ? dayjs(itemData?.lastMsgTime).format('YYYY年M月DD日')
                        : dayjs(itemData?.lastMsgTime).format('M月D日 HH:mm') // 月日 加 时间
                      : `${dayjs(itemData?.lastMsgTime)
                          .locale('zh-cn')
                          .calendar(null, {
                            sameDay: '[今天] HH:mm ', // The same day ( Today at 2:30 AM )
                            lastDay: '[昨天] HH:mm' // The day before ( Yesterday at 2:30 AM )
                          })} `
                    : dayjs(itemData?.lastMsgTime).locale('zh-cn').fromNow() // 不超过一小时 几秒前

                  // dayjs(itemData?.lastMsgTime).format('HH:mm')
                }
              </span>
              <span className="time-icon sprite_icon2"></span>
            </div>
          </div>
          <div className="box-textd">
            <p className="p-c-text  text-nowrap">{msg.msg}</p>
            <div className="remoe">删除</div>
          </div>
        </div>
      </div>
    </PrivateItemWarpper>
  )
})

PrivateItem.propTypes = {
  itemData: PropTypes.object
}

export default PrivateItem
