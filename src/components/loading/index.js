import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Spin } from 'antd'
import { LoadingWrapper } from './style'

const LoadingAnimation = memo((props) => {
  // const { showLoading = false } = props
  return (
    <LoadingWrapper>
      <div className="example">
        <Spin />
        &nbsp;&nbsp;加载中...
      </div>
    </LoadingWrapper>
  )
})

LoadingAnimation.propTypes = {
  // showLoading: PropTypes.bool
}

export default LoadingAnimation
