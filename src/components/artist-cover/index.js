import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../utils/format-utils'
import { ArtistCoverWrapper } from './style'

const ArtistCover = memo((props) => {
  const { item = {} } = props
  console.log(item)

  return (
    <ArtistCoverWrapper>
      <div className="box-img">
        {item.img1v1 !== -1 ? (
          <img src={getSizeImage(item.img1v1Url, 130)} alt="" />
        ) : (
          <img
            src="http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=130y130"
            alt=""
          />
        )}

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
        {item?.accountId && (
          <NavLink
            to={`/user/home/${item.accountId}`}
            className="bgcicon sprite_icon2"
          ></NavLink>
        )}
      </div>
    </ArtistCoverWrapper>
  )
})

ArtistCover.propTypes = {
  item: PropTypes.object
}

export default ArtistCover
