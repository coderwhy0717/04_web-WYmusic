import React, { memo } from 'react'
import { UserLongWrapper } from './style'

export default memo(function WYUserLogin() {
  return (
    <UserLongWrapper className='sprite_02'>
      <div className='text'> 登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div className='btn-login sprite_02'>用户登录</div>
    </UserLongWrapper>
  )
})
