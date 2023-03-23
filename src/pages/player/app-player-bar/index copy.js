import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import {
  AppPlayerBarWrapper,
  PlayerBarCenter,
  PlayerBarLeft,
  PlayerBarRight
} from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  changePlayNextSongAndSequenceAction,
  changeSequenceAction,
  getPlaySongDetailAction
} from '../store/actionCreators'
import { getPlayUrl } from '@/utils/format-utils'
import { formatDate } from '@/utils/format-utils'
import { getSizeImage } from '../../../utils/format-utils'

export default memo(function WYAppPlayerBar() {
  const audioRef = useRef()
  const [isPlaying, setisPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(true)
  const { currentSong, playList, sequence } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
      sequence: state.getIn(['player', 'sequence'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlaySongDetailAction(556673324))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current
      .play()
      .then((res) => {
        setisPlaying(true)
      })
      .catch((err) => {
        setisPlaying(false)
      })
  }, [currentSong])

  //数据初始化
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''

  const showCurrentTime = formatDate(currentTime, 'mm:ss')
  const time = currentSong.dt || 0
  const songTime = formatDate(time, 'mm:ss')
  // 点击播放
  const changePlayer = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setisPlaying(!isPlaying)
  }, [isPlaying])
  // 组件的回调函数 进度条滑动/进度条点击
  const upChange = useCallback(
    (value) => {
      setIsChanging(false)
      setCurrentTime((value / 100) * time)
      setProgress(value)
    },
    [time]
  )
  const changeAfter = useCallback(
    (value) => {
      // vlue / 100 * time  得到的是毫秒 设置歌曲的时间是秒 /1000
      const currentTime = ((value / 100) * time) / 1000
      audioRef.current.currentTime = currentTime
      setIsChanging(true)
      if (!isPlaying) {
        changePlayer()
      }
    },
    [time, isPlaying, changePlayer]
  )
  //audioRef 回调函数
  const changeCurrentTime = (e) => {
    if (isChanging) {
      setCurrentTime(audioRef.current.currentTime * 1000)
      setProgress(((audioRef.current.currentTime * 1000) / time) * 100)
    }
  }
  // 播放结束
  const changeEnded = (e) => {
    console.log(e, '播放结束', isPlaying)
    setisPlaying(!isPlaying)
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      setTimeout(() => {
        audioRef.current.play()
        setisPlaying(isPlaying)
      }, 300)
    } else {
      playnext(1)
    }
  }
  // 切换上下首歌曲
  const playnext = (tag) => {
    dispatch(changePlayNextSongAndSequenceAction(tag))
  }
  // 循环 单曲 随机
  const changeSequence = () => {
    let newSequence = sequence + 1
    if (newSequence > 2) {
      newSequence = 0
    }
    dispatch(changeSequenceAction(newSequence))
  }
  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="wrap wrap-v2">
        <PlayerBarLeft isPlaying={isPlaying}>
          <div
            className="rwa prev sprite_player"
            title="上一首(ctrl+<)"
            onClick={(e) => playnext(-1)}
          ></div>
          <div
            className="play sprite_player"
            title="播放/暂停(p)"
            onClick={(e) => changePlayer()}
          >
            {' '}
          </div>
          <div
            className="rwa next sprite_player"
            title="下一首(ctrl+>)"
            onClick={(e) => playnext(1)}
          >
            {' '}
          </div>
        </PlayerBarLeft>
        <PlayerBarCenter>
          <div className="image">
            <img src={getSizeImage(picUrl, 35)} alt=""></img>
            <a href="/#" className="image-a sprite_player">
              {' '}
              a
            </a>
          </div>
          <div className="content">
            <div className="content-top">
              <a
                href="/#"
                className="title text-nowrap"
                title={currentSong.name}
              >
                {currentSong.name}
              </a>
              <div className="name text-nowrap">
                <span>
                  {currentSong.ar
                    ? currentSong.ar.map((item) => {
                        return (
                          <span key={item.id}>
                            <a href="/#" title={item.name}>
                              {item.name}
                            </a>
                            {currentSong.ar.length >= 2 ? <i>/</i> : ''}
                          </span>
                        )
                      })
                    : '未知歌手'}
                </span>
                <a href="/#" className="link sprite_player" title="来自歌单">
                  {' '}
                </a>
              </div>
            </div>
            <div className="content-footer">
              <Slider
                min={0}
                max={100}
                step={0.01}
                defaultValue={30}
                value={progress}
                onChange={upChange}
                onAfterChange={changeAfter}
              />
              <div className="time">
                <span className="time-left">{showCurrentTime}</span>
                <span>&nbsp;/&nbsp;</span>
                <span>{songTime}</span>
              </div>
            </div>
          </div>
        </PlayerBarCenter>
        <PlayerBarRight sequence={sequence}>
          <div className="left">
            <div className="pip btn" title="画中画歌词"></div>
            <div className="collect btn sprite_player" title="收藏"></div>
            <div className="share btn sprite_player" title="分享"></div>
          </div>
          <div className="right sprite_player">
            <div className="voice btn sprite_player"></div>
            <div
              className="cycle btn sprite_player"
              title="循环"
              onClick={(e) => changeSequence()}
            ></div>
            <div className="playlist btn sprite_player" title="播放列表">
              {playList.length}
            </div>
          </div>
        </PlayerBarRight>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={changeCurrentTime}
        onEnded={changeEnded}
      />
    </AppPlayerBarWrapper>
  )
})
