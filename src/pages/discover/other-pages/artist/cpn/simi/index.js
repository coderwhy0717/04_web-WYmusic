import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../../../../../utils/format-utils'
import { SimiWrapper } from './style'

const Simi = memo((props) => {
  const { list = [] } = props

  return (
    <SimiWrapper>
      {list.map((item) => {
        return (
          <NavLink
            to={`/discover/artist/${item.id}`}
            key={item.id}
            className="item-artist"
          >
            <img
              src={getSizeImage(item.img1v1Url, 50)}
              alt=""
              title={item.name}
            />
            <div className="name text-nowrap" title="item.name">
              {item.name}
            </div>
          </NavLink>
        )
      })}
    </SimiWrapper>
  )
})

Simi.propTypes = {
  list: PropTypes.array
}

export default Simi
