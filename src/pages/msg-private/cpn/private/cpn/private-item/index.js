import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { getSizeImage } from '../../../../../../utils/format-utils'
import { PrivateItemWarpper } from './style'
const PrivateItem = memo((props) => {
  const { itemData = {} } = props
  // const lastMsg = JSON.parse(itemData.user.lastMsg)
  // const msg = JSON.parse(lastMsg.msg)
  // console.log(msg)

  return (
    <PrivateItemWarpper>
      <div className="private-item-box">
        <div className="p-img">
          <img
            src={getSizeImage(itemData.fromUser.avatarUrl, 50, 'y')}
            alt=""
          />
        </div>
        <div className="p-conent">{itemData.fromUser.nickname}</div>
        <div className="p-time-ohter"></div>
      </div>
    </PrivateItemWarpper>
  )
})

PrivateItem.propTypes = {
  itemData: PropTypes.object
}

export default PrivateItem
