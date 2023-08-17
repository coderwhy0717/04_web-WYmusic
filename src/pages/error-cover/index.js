import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { ErrorCoverWrapper } from './style'
export default memo(function WYErrorCover() {
  const { err, newMessageCount } = useSelector(
    (state) => ({
      err: state.getIn(['otherPages', 'err']),
      newMessageCount: state.getIn(['otherPages', 'newMessageCount'])
    }),
    shallowEqual
  )
  const history = useHistory()
  // 判断否 有网络了
  // useEffect(() => {
  //   if (newMessageCount?.code === 200) {
  //     console.log('first')

  //     history.go(-1)
  //   }
  // })
  //   if(err !== 'ERR_NETWORK') {
  //     return <Redirect to={'/discover/recommend'}></Redirect>
  // }
  return (
    <ErrorCoverWrapper err={err}>
      {err === 'ERR_NETWORK'
        ? '网络错误 api不稳定出现异常，刷新或者稍后刷新 再次尝试,谢谢！！！'
        : ' 加载中...'}
    </ErrorCoverWrapper>
  )
})
