import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { MvCoverWrapper } from './style'

const MvCover = memo((props) => {
  const { item = {} } = props
  return (
    <MvCoverWrapper>
      <NavLink to={`/discover/mv/${item.id}`}>
        <div className="mv-img">
          <img src={`${item.imgurl16v9}?param=137y103`} alt="" />
          <div className="cover sprite_covor"></div>
          <div className="icon-play sprite_icon"></div>
        </div>
      </NavLink>

      <div className="name text-nowrap">
        <NavLink to={`/discover/mv/${item.id}`}>{item.name}</NavLink>
      </div>
    </MvCoverWrapper>
  )
})

MvCover.propTypes = {
  item: PropTypes.object
}

export default MvCover
