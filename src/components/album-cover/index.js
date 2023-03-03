import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import WYUserNameSort from 'components/user-name-sort'

import { AlbumWrapper } from './style'
import { getSizeImage } from '../../utils/format-utils'
export default memo(function WYAlbumCover(props) {
  const { info = {}, size = 130, width = 153, bgp = '-845px' } = props
  // console.log(info)
  return (
    <AlbumWrapper size={size} bgp={bgp} width={width}>
      <div className="album-image">
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
        <WYUserNameSort artists={info.artists} />
      </div>
    </AlbumWrapper>
  )
})
