import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SearchSongListWarpper } from './style'
import PlayIcon from '@/components/play-icon'
import { formatNumber, getSizeImage } from '../../../../utils/format-utils'
import { NavLink } from 'react-router-dom'

// 歌单
const SearchSongList = memo((props) => {
  const { item = {} } = props

  return (
    <SearchSongListWarpper>
      {/* icon 播放组件 */}
      <PlayIcon id={item.id} songList={true} />
      <NavLink to={`/discover/songListDetail/${item.id}`} className="img">
        <img src={getSizeImage(item.coverImgUrl, 50)} alt=""></img>
        <div className="bgc sprite_covor"></div>
      </NavLink>
      <div className="name text-nowrap">
        <NavLink to={`/discover/songListDetail/${item.id}`}>
          {item.name}
        </NavLink>
      </div>
      <div className="info text-nowrap">
        <span>{item.trackCount}首&nbsp;&nbsp;&nbsp;&nbsp;by&nbsp;&nbsp;</span>
        <span>
          <NavLink to={`/user/home/${item.creator.userId}`}>
            {item.creator.nickname}
          </NavLink>
        </span>
      </div>
      <div className="collect">收藏 ：{formatNumber(item.bookCount)}</div>
      <div className="listen">收听 ：{formatNumber(item.playCount)}</div>
    </SearchSongListWarpper>
  )
})

SearchSongList.propTypes = {}

export default SearchSongList
