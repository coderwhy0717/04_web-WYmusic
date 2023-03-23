import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../../../../../utils/format-utils'
import { RadioCoverWrapper } from './style'

const RadioCover = memo((props) => {
  const { item = {}, index = 0 } = props
  return (
    <RadioCoverWrapper>
      {/* 跳转到电台页面 */}
      <div className={classNames('radio-box', { djbgc: index % 2 !== 0 })}>
        <NavLink to={`/#`} className="img-box">
          <img src={getSizeImage(item?.picUrl, 50)} alt="" />
        </NavLink>
        <div className="name text-nowrap">
          <NavLink to={`/#`}>{item?.name}</NavLink>
        </div>
        <div className="dis">订阅{item.subCount}次</div>
        <div className="term">{item?.programCount}期</div>
      </div>
    </RadioCoverWrapper>
  )
})

RadioCover.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}

export default RadioCover
