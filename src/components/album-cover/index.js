import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import WYUserNameSort from 'components/user-name-sort'

import { AlbumWrapper } from './style'
import { formatYearMonthDay, getSizeImage } from '../../utils/format-utils'
export default memo(function WYAlbumCover(props) {
  const {
    info = {},
    size = 130,
    width = 153,
    bgp = '-845px',
    showName = true
  } = props
  // console.log(info)
  return (
    <AlbumWrapper size={size} bgp={bgp} width={width}>
      <div className="album-image" title={info.name}>
        <img src={getSizeImage(info.picUrl, size)} alt=""></img>
        <NavLink
          className="cover image_cover"
          to={`/discover/albumDetail/${info.id}`}
        ></NavLink>
        <i className="play sprite_icon"></i>
      </div>
      <div className="album-info text-nowrap">
        <NavLink
          className="name text-nowrap"
          to={`/discover/albumDetail/${info.id}`}
        >
          {info.name}
        </NavLink>

        {showName && <WYUserNameSort artists={info.artists} />}
        {!showName && (
          <div className="publishTime">
            {formatYearMonthDay(info.publishTime, '.')}
          </div>
        )}
      </div>
    </AlbumWrapper>
  )
})
