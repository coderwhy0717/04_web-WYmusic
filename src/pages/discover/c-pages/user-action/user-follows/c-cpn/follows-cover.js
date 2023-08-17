import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FollowsCoverWrapper } from './style'
import { getSizeImage } from '../../../../../../utils/format-utils'
import { NavLink } from 'react-router-dom'
const FollowsCover = memo((props) => {
  const { follows = {} } = props
  console.log(follows, 'aaaa')

  return (
    <FollowsCoverWrapper sum={follows?.follow.length}>
      {follows?.follow.map((item, index) => {
        return (
          <div key={item.userId} className="item-cover">
            <NavLink to={`/user/home/${item.userId}`}>
              <img src={getSizeImage(item.avatarUrl, 60)} alt="" />
            </NavLink>
            <div className="left-follows">
              <NavLink to={`/user/home/${item.userId}`}>
                <div className="name text-nowrap">{item.nickname}</div>
              </NavLink>
            </div>
          </div>
        )
      })}
    </FollowsCoverWrapper>
  )
})

FollowsCover.propTypes = {
  follows: PropTypes.object
}

export default FollowsCover
