import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ErrorCoverWrapper } from './style'
export default memo(function WYErrorCover() {
  const { err } = useSelector(
    (state) => ({
      err: state.getIn(['otherPages', 'err'])
    }),
    shallowEqual
  )
  useEffect(() => {}, [])
  //   if(err !== 'ERR_NETWORK') {
  //     return <Redirect to={'/discover/recommend'}></Redirect>
  // }
  return (
    <ErrorCoverWrapper err={err}>
      {err === 'ERR_NETWORK' ? '网络错误,请检查网络！！！' : ' 加载中...'}
    </ErrorCoverWrapper>
  )
})
