import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { TitleCoverWrapper } from './style'

const TitleCover = memo((props) => {
  const { title = '默认标题' } = props
  return (
    <TitleCoverWrapper>
      <div className="title">{title}</div>
    </TitleCoverWrapper>
  )
})

TitleCover.propTypes = {
  title: PropTypes.string
}

export default TitleCover
