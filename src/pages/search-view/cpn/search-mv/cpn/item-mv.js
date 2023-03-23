import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {
  formatMinuteSecond,
  formatNumber
} from '../../../../../utils/format-utils'
import { ItemMvWrapper } from './style'

const ItemMv = memo((props) => {
  const { item = {} } = props
  return (
    <ItemMvWrapper>
      <NavLink to={`/discover/mv/${item.vid}`}>
        <div className="mv-bgc">
          <img src={`${item.coverUrl}?param=159y90`} alt="" />

          <div className="top">
            <div className="mv-icon sprite_titleicon2"></div>
            {formatNumber(item.playTime)}
            <div className="bgc mask"></div>
          </div>
          <div className="time mask">{formatMinuteSecond(item.durationms)}</div>
        </div>
      </NavLink>

      <div className="title ">
        <div className="name ">
          {!item.type && <div className="mv sprite_titleicon2" />}
          <NavLink
            to={`/discover/mv/${item.vid}`}
            className="names text-nowrap"
            title={item.title}
          >
            {item.title}
          </NavLink>
        </div>
        <div className="names">
          {!!item.type && <span>by &nbsp;</span>}
          {item.creator.map((items) => {
            return (
              <span key={items.userId} className="names-item">
                {!item.type ? (
                  <NavLink
                    to={`/discover/artist/${items.userId}`}
                    className="text-nowrap"
                  >
                    {items.userName}
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/user/home/${items.userId}`}
                    className="text-nowrap"
                  >
                    {items.userName}
                  </NavLink>
                )}
                <span>&nbsp;/&nbsp;</span>
              </span>
            )
          })}
        </div>
      </div>
    </ItemMvWrapper>
  )
})

ItemMv.propTypes = {
  item: PropTypes.object
}

export default ItemMv
