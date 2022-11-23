import React, { memo } from 'react'

import WYLabelCover from 'components/label-cover'
import {DownWrapper} from './style'
export default memo(function WYDownloadApp() {
  return (
    <DownWrapper >
      <WYLabelCover title="网易云音乐多端下载" />
      <div className='dow '>
        <a href='https://apps.apple.com/cn/app/id590338362' 
           rel="noopener noreferrer" 
           target="_blank" 
           className='iphone sprite_download'>iPhone</a>
        <a href='https://music.163.com/api/pc/download/latest' 
           rel="noopener noreferrer" 
           target="_blank"
           className='pc sprite_download'>pc</a>
        <a href='https://music.163.com/api/android/download/latest2'
           rel="noopener noreferrer" 
           target="_blank"
           className='and sprite_download'>Android</a>
      </div>
      <span>同步歌单，随时畅听320k好音乐</span>
    </DownWrapper>
  )
})
