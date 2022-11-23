import React, { memo } from 'react'
import WYLabelCover from 'components/label-cover'
import { UserWrapper } from './style'
export default memo(function WYUser() {
  return (
    <UserWrapper>
      <WYLabelCover title="用户wiki" />
      <div className='modify'>
        <img src='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138582886/9567/5afa/307c/a6ba8934ef3b36208786e4445e054e04.png' alt=''></img>
        <a href='/#'>补充或修改歌曲资料</a>
      </div>
      <div className='userCentre'>
        <img src='https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/13138667740/2d69/e968/aac8/79d601b88b5bde7f850f090db9a3f820.png' alt=''></img>
        <a href='/#'>用户wiki任务中心</a>
      </div>
    </UserWrapper>
  )
})
