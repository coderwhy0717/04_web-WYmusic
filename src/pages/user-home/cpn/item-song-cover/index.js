import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import PlayIcon from '@/components/play-icon'

import { ItemSongCoverWrapper } from './style'
import { objectChange } from '../../../../utils/format-utils'

const ItemSongCover = memo((props) => {
  const { index = 1, item = {} } = props
  return (
    <ItemSongCoverWrapper score={item.score}>
      <div className={classNames('item-song-box', { bgc: index % 2 === 0 })}>
        <div className="left">
          <span className="index">{index}.</span>
          {/* icon 播放组件 */}
          <PlayIcon id={item.song.id} />
          <div className="text text-nowrap">
            <NavLink
              className="songname"
              to={`/discover/playSong/${item.song.id}`}
            >
              {item.song.name}
            </NavLink>
            <div className="name text-nowrap">
              &nbsp;&nbsp;-&nbsp;&nbsp;
              {item.song.ar.map((items) => {
                return (
                  <span key={items.id}>
                    <NavLink to={`/discover/artist/${items.id}`}>
                      {items.name}
                    </NavLink>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bg"></div>
          {item?.playCount > 0 && (
            <div className="playCount">{item.playCount}次</div>
          )}
        </div>
      </div>
    </ItemSongCoverWrapper>
  )
})

ItemSongCover.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
}

export default ItemSongCover
