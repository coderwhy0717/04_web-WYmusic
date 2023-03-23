import PropTypes from 'prop-types'
import React, { memo } from 'react'
import PlayIcon from '@/components/play-icon'

import { ItemSongWrapper } from './style'
import { formatMinuteSecond } from '../../../../../../utils/format-utils'
import { NavLink } from 'react-router-dom'

const ItemSong = memo((props) => {
  const { item = {}, indexx = 0 } = props
  return (
    <ItemSongWrapper>
      <i className="index">{indexx}</i>
      <PlayIcon id={item.id} />
      <div className="name">
        <div className="songname text-nowrap">
          <NavLink to={`/discover/playSong/${item.id}`} title={item.name}>
            {item.name}
          </NavLink>
          {item.alia[0] && (
            <span className="songtitle " title={item.alia[0]}>
              &nbsp;-&nbsp;({item.alia[0]})
            </span>
          )}
        </div>
        {item.mv ? (
          <NavLink
            to={`/discover/mv/${item.mv}`}
            className="mv sprite_table"
            title="MV"
          ></NavLink>
        ) : (
          ''
        )}
      </div>
      <div className="time">{formatMinuteSecond(item.dt)}</div>
      <NavLink
        to={`/discover/albumDetail/${item.al.id}`}
        className="album text-nowrap"
      >
        {item.al.name}
      </NavLink>
    </ItemSongWrapper>
  )
})

ItemSong.propTypes = {
  item: PropTypes.object,
  indexx: PropTypes.number
}

export default ItemSong
