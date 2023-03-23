import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getPlaySongListAction } from '@/pages/player/store/actionCreators'

import { PlayBtnWrapper } from './style'

export default memo(function WYPlayBtn(props) {
  const { collect = '收藏', share = '分享', comment = '0', tracksOrId } = props //tracks是单个歌曲id 也是所有歌曲[]

  const dispatch = useDispatch()
  const playMusic = () => {
    console.log(tracksOrId, 'a')

    dispatch(getPlaySongListAction(tracksOrId))
  }

  return (
    <PlayBtnWrapper>
      <button className="play sprite_btn" onClick={(e) => playMusic()}>
        播放
      </button>
      <button className="join sprite_btn"> a</button>
      <button className="common collect sprite_btn">{collect}</button>
      <button className="common share sprite_btn">{share}</button>
      <button className="common download sprite_btn">下载</button>
      <button className="common comment sprite_btn">({comment})</button>
    </PlayBtnWrapper>
  )
})
