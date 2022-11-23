import React, { memo } from 'react'
import {SongListTitleWrapper} from './style'
export default memo(function WYSongListTitleCover(props) {
    const { title="歌曲列表",trackIds = 0,playCount = 0,showPlay = true,showCount = true} = props
  return (
    <SongListTitleWrapper>
            <div className='left'>
              <h2>{title}</h2>
              <span>{trackIds}首歌</span>
            </div>
            <div className='right'>
             {
                 showPlay ? <div className='link'>
                                <span className='icon sprite_icon2'></span> 
                                <a href='/#'>生成外链播放器</a>
                            </div> :''
             }
             {
               showCount ? <div className='playcount'>播放：<i>{playCount}</i>次</div> : ''
             }
              
            </div>
    </SongListTitleWrapper>
  )
})
