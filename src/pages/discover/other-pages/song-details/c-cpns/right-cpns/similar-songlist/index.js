import React, { memo } from 'react'
import WYLabelCover from 'components/label-cover'

import { SimilarSongListWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function WYSimilarSongList(props) {
  const { songList = [] } = props
  return (
    <SimilarSongListWrapper>
      <WYLabelCover title="包含这首歌的歌单" />
      {songList.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <img src={getSizeImage(item.plcUrl, 50)} alt=""></img>
            <div className="content">
              <div className="title text-nowrap">
                <a href="/#" title="">
                  好【毒 • 魇 • 瘾】箱底私【毒 • 魇 • 瘾】箱底私【毒 • 魇 •
                  瘾】箱底私
                </a>
              </div>
              <div className="by">
                <span>by</span>
                <a href="/#">LE_CHAT</a>
              </div>
            </div>
          </div>
        )
      })}
    </SimilarSongListWrapper>
  )
})
