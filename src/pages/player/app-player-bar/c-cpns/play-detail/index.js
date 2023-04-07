import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { formatDate } from '@/utils/format-utils'
import WYUserNameSort from 'components/user-name-sort'

import { PlayDetailWrapper } from './style'
import {
  getPlaySongDetailAction,
  getMaskCoverAction
} from '../../../store/actionCreators'
export default memo(function WYPlayDetail() {
  const [iscurrentplay, setIscurrentplay] = useState(0)
  const [isImage, setImage] = useState('')
  const lyConentRef = useRef()

  // maskCover 显示播放列表隐藏
  const { maskCover, playList, currentSong, playLyrics, lyricsIndex } =
    useSelector(
      (state) => ({
        maskCover: state.getIn(['player', 'maskCover']),
        playList: state.getIn(['player', 'playList']),
        currentSong: state.getIn(['player', 'currentSong']),
        playLyrics: state.getIn(['player', 'playLyrics']),
        lyricsIndex: state.getIn(['player', 'lyricsIndex'])
      }),
      shallowEqual
    )
  // 歌词滚动
  useEffect(() => {
    const distance =
      lyConentRef.current?.children[lyricsIndex]?.offsetTop -
      lyConentRef.current?.clientHeight / 2.5

    lyConentRef.current.scrollTo({
      top: distance,
      behavior: 'smooth'
    })
  }, [lyricsIndex])
  useEffect(() => {
    // 图片替换背景
    setImage(currentSong?.al?.picUrl + '?imageView&blur=40x30')
    const indexs = playList.findIndex((song) => song.id === currentSong.id)
    setIscurrentplay(indexs)
  }, [playList, currentSong])
  const changeScroll = (e) => {
    // console.log(e, '滚动')
  }
  const dispatch = useDispatch()
  // 播放歌曲
  const changePlayMusic = (id) => {
    dispatch(getPlaySongDetailAction(id, false))
  }
  //
  const changeClose = () => {
    dispatch(getMaskCoverAction(false))
  }
  return (
    <PlayDetailWrapper maskCover={maskCover}>
      <div className="maskCoverConent">
        <div className="covertop playlist_bg">
          <div className="title-left">
            <div className="playlist-title">播放列表({playList.length})</div>
            <div className="right-c">
              <div className="div-collect">
                <div className="collect-c playlist-c"></div>
                <NavLink to="/#">收藏全部</NavLink>
              </div>
              <div className="icon-c"></div>
              <div className="div-clear">
                <div className="clear-c playlist-c"></div>
                <NavLink to="/#">清除</NavLink>
              </div>
            </div>
          </div>
          <div className="title-right">
            <div className="name-c text-nowrap">{currentSong.name}</div>
            <div
              className="close playlist-c"
              onClick={(e) => changeClose()}
            ></div>
          </div>
        </div>
        <div className="center playlist_bg">
          <img src={isImage} alt=""></img>
          <div className="songConent" onScrollCapture={changeScroll}>
            {playList
              ? playList.map((item, index) => {
                  return (
                    <div
                      className={`song-detail ${
                        index === iscurrentplay ? 'actives' : ''
                      }`}
                      key={item.id}
                      onClick={(e) => changePlayMusic(item.id)}
                    >
                      <div
                        className={`play-icon ${
                          index === iscurrentplay ? 'playlist-c' : ''
                        }`}
                      ></div>
                      <div className="song-conent">
                        <div className="name">{item.name}</div>
                        <div className="user-name text-nowrap">
                          <WYUserNameSort artists={item.ar} />
                        </div>
                        <div className="time">
                          {formatDate(item.dt, 'mm:ss')}
                        </div>
                      </div>
                      <div className="share playlist-c "></div>
                    </div>
                  )
                })
              : '没有数据'}
          </div>
          <div className={`${playList.length > 9 ? '' : 'din'}`}></div>
          <div className="lyConent" ref={lyConentRef}>
            {playLyrics.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`lyitem ${
                    lyricsIndex === index ? 'lyactive' : ''
                  }`}
                >
                  {item.content}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PlayDetailWrapper>
  )
})
