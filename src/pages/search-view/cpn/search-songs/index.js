import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { formatMinuteSecond } from '@/utils/format-utils'
import { FormDetailWrapper } from './style'
import PlayIcon from '@/components/play-icon'
// 歌曲
const SearchSongs = memo((props) => {
  const { item = {} } = props

  return (
    <FormDetailWrapper>
      {/* icon 播放组件 */}
      <PlayIcon id={item.id} />
      <div className="name">
        <NavLink
          to={`/discover/playSong/${item.id}`}
          className="text-nowrap"
          title={item.name}
        >
          {item.name}
        </NavLink>
        {item.mvid ? (
          <NavLink
            to={`/discover/mv/${item.id}`}
            className="mv sprite_table"
            title="MV"
          ></NavLink>
        ) : (
          ''
        )}
      </div>
      {/*  <a href={} className="name" title={item.name}>*/}
      <div className="artist text-nowrap">
        {item?.artists.map((artist) => {
          return (
            <span key={artist.id} className="box-art">
              <NavLink className="a-link" to={`/discover/artist/${artist.id}`}>
                {artist.name}
              </NavLink>
              <span>&nbsp;{item?.artists.length > 1 ? '/' : ''}&nbsp;</span>
            </span>
          )
        })}
      </div>
      <div className="album text-nowrap">
        <NavLink
          to={`/discover/albumDetail/${item?.album?.id}`}
          title={item?.album?.name}
        >
          《{item?.album?.name}》
        </NavLink>
      </div>
      <div className="time">{formatMinuteSecond(item.duration)}</div>
    </FormDetailWrapper>
  )
})

SearchSongs.propTypes = {
  item: PropTypes.object
}

export default SearchSongs
