import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import TitleCover from '../title-cover'
import RadioCover from './cpn/radio-cover'
import { RadioWrapper } from './style'
const Radio = memo((props) => {
  const { list = [], name = '' } = props
  return (
    <RadioWrapper>
      <TitleCover title={`${name}创建的电台`} />
      <div className="radio">
        {list.map((item, index) => {
          return <RadioCover key={item.id} item={item} index={index} />
        })}
      </div>
    </RadioWrapper>
  )
})

Radio.propTypes = {
  list: PropTypes.array,
  name: PropTypes.string
}

export default Radio
