import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { formatMinuteSecond } from '@/utils/format-utils'
import { FormDetailWrapper } from './style'
import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
import classNames from 'classnames'

const SearchSongs = memo((props) => {
  const { item = {} } = props
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const changePlayMusic = () => {
    dispatch(getPlaySongDetailAction(item.id))
  }
  return (
    <FormDetailWrapper>
      <div
        className={classNames('icon sprite_table', {
          activeIcon: item.id === currentSong.id
        })}
        title="播放"
        onClick={changePlayMusic}
      />
      <div className="name">
        <NavLink
          to={`/discover/playSong/${item.id}`}
          className="text-nowrap"
          title={item.name}
        >
          {item.name}
        </NavLink>
        {item.mvid ? <button className="mv sprite_table"></button> : ''}
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
