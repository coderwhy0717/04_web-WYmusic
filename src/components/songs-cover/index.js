import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage, formatNumber } from '../../utils/format-utils'

import { SongsCoverWrapper } from './style'

export default memo(function WYSongsCover(props) {
  const { info = {}, types = true, showBy = true } = props

  return (
    <SongsCoverWrapper typesa={types}>
      <div className="cover-top">
        <img
          src={getSizeImage(types ? info.picUrl : info.coverImgUrl, 140)}
          alt=""
        />
        <i className={info.highQuality ? 'crown sprite_titleicon2' : ''}></i>
        <NavLink
          className="cover sprite_covor"
          to={`/discover/songListDetail/${info.id}`}
        ></NavLink>
        <div className="info sprite_covor">
          <span>
            <i className="sprite_icon erji"></i>
            {formatNumber(info.playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <div className={`cover-bottom  ${types ? '' : 'text-nowrap'}`}>
        <NavLink
          className={types ? 'texts-nowrap' : ''}
          to={`/discover/songListDetail/${info.id}`}
        >
          {/* 电台节目logo */}
          {/* <i className="icon sprite_icon_v2"></i> */}
          {info.name}
        </NavLink>
        {types || showBy ? (
          ''
        ) : (
          <div className="bys">
            by
            <div className="a  text-nowrap">
              <NavLink to={`/user/home/${info.id}`} className="">
                {info?.creator?.nickname}
              </NavLink>
            </div>
            <img
              className="image"
              src={getSizeImage(
                info?.creator?.avatarDetail?.identityIconUrl,
                13
              )}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="cover-source"></div>
    </SongsCoverWrapper>
  )
})
