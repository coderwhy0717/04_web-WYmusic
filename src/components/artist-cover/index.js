import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../utils/format-utils'
import { ArtistCoverWrapper } from './style'

const ArtistCover = memo((props) => {
  const { item = {} } = props
  return (
    <ArtistCoverWrapper>
      <div className="box-img">
        <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
        <NavLink to={`/discover/artist/${item.id}`}>
          <div className="cover sprite_covor"></div>
        </NavLink>
      </div>
      <div className="artist">
        <NavLink
          to={`/discover/artist/${item.id}`}
          className="name text-nowrap"
        >
          {item.name}
        </NavLink>
        <NavLink
          to={`/user/home/${item.id}`}
          className="bgcicon sprite_icon2"
        ></NavLink>
      </div>
    </ArtistCoverWrapper>
  )
})

ArtistCover.propTypes = {
  item: PropTypes.object
}

export default ArtistCover
