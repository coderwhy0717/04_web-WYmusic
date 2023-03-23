import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlayIconWrapper } from './style'
import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { getSongListDetailAction } from '../../pages/discover/other-pages/store/actionCreators'
import { getPlaySongListAction } from '@/pages/player/store/actionCreators'

const PlayIcon = memo((props) => {
  const { id = 0, songList = false } = props
  const { currentSong, songListDetail } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      songListDetail: state.getIn(['otherPages', 'songListDetail'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const changePlayMusic = () => {
    // 是歌单播放
    if (songList) {
      console.log('点击播放歌单')
      //1. 获取歌单所有的数据
      dispatch(getSongListDetailAction(id))
      // 2. 从获取歌单所有的数据里 取得tracks 所有的播放歌曲 [歌曲] 进行推送播放
      dispatch(getPlaySongListAction(songListDetail.tracks))
      return
    }
    dispatch(getPlaySongDetailAction(id))
  }
  return (
    <PlayIconWrapper>
      <div
        className={classNames('icon sprite_table', {
          activeIcon: id === currentSong.id
        })}
        title="播放"
        onClick={changePlayMusic}
      />
    </PlayIconWrapper>
  )
})

PlayIcon.propTypes = {
  id: PropTypes.number,
  songList: PropTypes.bool
}

export default PlayIcon
