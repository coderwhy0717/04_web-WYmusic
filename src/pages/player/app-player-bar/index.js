import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { Slider, message, Progress, Space } from 'antd'

import {
  changePlayingAction,
  changePlayLyrics,
  changePlayNextSongAndSequenceAction,
  changeSequenceAction,
  getPlaySongDetailAction,
  getMaskCoverAction,
  changePlayLyricsAction,
  getScrobbleAction
} from '../store/actionCreators'
import { formatDate, getPlayUrl, getSizeImage } from '@/utils/format-utils'
import { ifCheckMusic } from '../../../services/player'

import WYPlayDetail from './c-cpns/play-detail'

import {
  AppPlayerBarWrapper,
  PlayerBarCenter,
  PlayerBarLeft,
  PlayerBarRight
} from './style'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import AppYidMusicCover from './c-cpns/app-yid-music-cover'
import PlayBtn from './c-cpns/play-btn'
// import { objectChange } from '../../../utils/format-utils'
export default memo(function WYAppPlayerBar() {
  const audioRef = useRef()
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(true)
  const [isPlayLength, setIsPlayLength] = useState(false)
  const [playListLength, setplayListLength] = useState(0)
  const {
    currentSong,
    playList,
    sequence,
    playLyrics,
    lyricsIndex,
    onplaying,
    maskCover
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
      sequence: state.getIn(['player', 'sequence']),
      playLyrics: state.getIn(['player', 'playLyrics']),
      lyricsIndex: state.getIn(['player', 'lyricsIndex']),
      onplaying: state.getIn(['player', 'onplaying']),
      maskCover: state.getIn(['player', 'maskCover'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getPlaySongDetailAction(1060914))
    // dispatch(getPlaySongDetailAction(1813864802))
    // dispatch(getPlaySongDetailAction(33162226))
    // dispatch(getPlaySongDetailAction(1484537845))
    // 首次播放 2049512697
    // dispatch(getPlaySongDetailAction(1973414736))
    // dispatch(getPlaySongDetailAction(2049512697))
    dispatch(getPlaySongDetailAction(1299889486))
  }, [dispatch])
  useEffect(() => {
    // 音乐是否可用
    ifCheckMusic(currentSong.id).then((res) => {
      console.log(res.success, 'aaa')

      if (res.success) return
      // console.log(res.response.data, '检查播放')
      const info = res?.response?.data
      // console.log(res, info, 'datra')
      dispatch(
        changePlayLyricsAction([
          { time: 0, content: info?.message, play: false }
        ])
      )
    })
    // console.log(audioRef.current,"aaaaaaaaaa")

    // 首次 进来 切换歌曲 播放当前音乐
    getPlayUrl(currentSong.id).then((res) => {
      console.log(res, 'yij')
      // 获取歌曲链接 失败 赋值空 暂停播放
      if (res === undefined || res === null) {
        audioRef.current.src = null
        audioRef.current.pause()
        dispatch(changePlayingAction(false))
        let BugText = `api有问题等一会儿播放或者再刷新(${res})`
        if (res === null) {
          BugText = `播放歌曲url为空(${res})`
        }
        dispatch(
          changePlayLyricsAction([
            {
              time: 0,
              content: BugText,
              play: false
            }
          ])
        )
        return
      }
      audioRef.current.src = res
      audioRef.current
        .play()
        .then((res) => {
          dispatch(changePlayingAction(true))
        })
        .catch((err) => {
          dispatch(changePlayingAction(false))
        })
    })
  }, [currentSong, dispatch])
  // 播放的多少歌曲
  useEffect(() => {
    setplayListLength(playList.length)
    setTimeout(() => {
      setIsPlayLength(true)
    })
    setTimeout(() => {
      setIsPlayLength(false)
    }, 2000)
  }, [playList])
  //数据初始化
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''

  const showCurrentTime = formatDate(currentTime, 'mm:ss')
  const time = currentSong.dt || 0
  const songTime = formatDate(time, 'mm:ss')
  // 点击播放歌曲
  const playMusic = useCallback(() => {
    onplaying ? audioRef.current.pause() : audioRef.current.play()
    console.log(audioRef.current.src)
    if (audioRef.current.src === null) {
      console.log('audioRef.current.res')
    }
    dispatch(changePlayingAction(!onplaying))
  }, [dispatch, onplaying])
  // 关键 监听onplaying的状态如果是暂停的状态 就让他播放
  useEffect(() => {
    if (onplaying) {
      audioRef.current.play()
    }
  }, [onplaying])
  // 播放歌曲就触发

  const changeCurrentTime = (e) => {
    // *该歌词不支持自动滚动* 求滚动歌词
    if (playLyrics[0].key === 0) {
      dispatch(
        changePlayLyricsAction([
          { time: 999999999999, content: '*该歌词不支持自动滚动* 求滚动歌词' },
          ...playLyrics
        ])
      )
      return
    }
    const currentTime = audioRef.current.currentTime * 1000

    if (isChanging) {
      setCurrentTime(currentTime)
      setProgress((currentTime / time) * 100)
    }
    // 歌词
    let index = 0 //36
    for (let i = 0; i < playLyrics.length; i++) {
      if (currentTime < playLyrics[i].time) {
        //37
        index = i - 1
        break
      }
      // 获取到最后的歌词显示
      if (i === playLyrics.length - 1) {
        index = i
        break
      }
    }
    // 获取到最前面的歌词显示
    if (index === 0) {
      // console.log('歌词')
      const lr = playLyrics[0] && playLyrics[0].content
      // console.log(lr, '歌词')
      message.open({
        key: 'lyrics',
        duration: 0,
        content: lr,
        className: 'lyrics-message'
      })
    }
    // 获取到最后的歌词显示
    if (index !== lyricsIndex) {
      //*该歌词不支持自动滚动* 求滚动歌词
      if (playLyrics[1] && playLyrics[1].key === 0) {
        message.open({
          key: 'lyrics',
          duration: 0,
          content: '*该歌词不支持自动滚动* 求滚动歌词',
          className: 'lyrics-message'
        })
        return
      }
      // 歌词index lyricsIndex歌词滚动根据这个index滚动  36 滚动的歌词
      dispatch(changePlayLyrics(index))
      const lr = playLyrics[index] && playLyrics[index].content
      message.open({
        key: 'lyrics',
        duration: 0,
        content: lr,
        className: 'lyrics-message'
      })
    }
  }
  // 播放结束
  const changeEnded = () => {
    console.dir(audioRef.current, 'audioRef.current')
    // getScrobbleAction
    console.log(audioRef.current.currentTime * 1000, 'first 听歌打卡')
    dispatch(
      getScrobbleAction(
        currentSong.id,
        currentSong.al.id,
        audioRef.current.currentTime * 1000
      )
    )
    dispatch(changePlayingAction(false))
    if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      dispatch(changePlayingAction(true))
    } else {
      playNext(1)
    }
  }
  // 切换歌曲
  const playNext = useCallback(
    (tag) => {
      dispatch(changePlayNextSongAndSequenceAction(tag))
    },
    [dispatch]
  )
  // 改变循环
  const changeCycle = () => {
    console.log(sequence)
    let newSequence = sequence + 1
    if (newSequence > 2) {
      newSequence = 0
    }
    dispatch(changeSequenceAction(newSequence))
  }

  // 进度条组件的函数
  // 点击进度条 改变进度条
  const upChanfe = useCallback(
    (value) => {
      setIsChanging(false)
      const currenttime = (value * time) / 100
      setCurrentTime(currenttime)
      setProgress(value)
    },
    [time]
  )
  // 滑动进度条  改变播放歌曲
  const changeAfter = useCallback(
    (value) => {
      const currentTime = ((value / 100) * time) / 1000
      audioRef.current.currentTime = currentTime
      setIsChanging(true)
      // 播放歌曲
      if (!onplaying) {
        playMusic()
      }
    },
    [time, onplaying, playMusic]
  )
  // 遮罩层
  const changeCover = () => {
    dispatch(getMaskCoverAction(false))
    console.log('flaseeeee')
  }

  const changeMaskCover = () => {
    console.log('first')

    dispatch(getMaskCoverAction(!maskCover))
  }
  // 移动端 点击进入歌曲详情页面
  const MusicMessage = (event) => {
    console.log('dainji')
  }
  return (
    <AppPlayerBarWrapper
      className="sprite_player"
      maskCover={maskCover}
      isPlaying={onplaying}
    >
      <div className="wrap wrap-v2">
        {/* 播放歌曲的展示列表 */}
        <WYPlayDetail />
        {/* 播放按钮 */}
        <PlayBtn
          playNext={playNext}
          playMusic={playMusic}
          onplaying={onplaying}
        />
        {/* 移动端播放按钮主页 */}
        <div className="yi-dong">
          <Space size={30}>
            <Progress
              showInfo={false}
              type="circle"
              percent={progress}
              size={35}
              strokeColor={{ '100%': '#fff' }}
              trailColor="#464650"
            />
          </Space>
          <div
            className="yi-play sprite_player"
            title="播放/暂停(p)"
            onClick={(e) => playMusic()}
          ></div>
          <div className="yi-play-caid" onClick={(e) => changeMaskCover()}>
            <MenuUnfoldOutlined />
          </div>
        </div>
        {/* 图片 */}
        <PlayerBarCenter>
          <div className="image">
            <img src={getSizeImage(picUrl, 35)} alt=""></img>
            {currentSong.id && (
              <NavLink
                to={`/discover/playSong/${currentSong.id}`}
                className="image-a sprite_player"
              ></NavLink>
            )}
          </div>

          <div className="content">
            <div className="content-top">
              <NavLink
                to={`/discover/playSong/${currentSong.id}`}
                className="title text-nowrap"
                title={currentSong.name}
              >
                {currentSong.name}
              </NavLink>
              <div className="name text-nowrap">
                <span>
                  {currentSong.ar
                    ? currentSong.ar.map((item) => {
                        return (
                          <span key={item.id}>
                            <NavLink
                              to={`/discover/artist/${item.id}`}
                              title={item.name}
                            >
                              {item.name}
                            </NavLink>
                            {currentSong.ar.length >= 2 ? <i>/</i> : ''}
                          </span>
                        )
                      })
                    : '未知歌手'}
                </span>

                {currentSong.ar && (
                  <NavLink
                    to={`/discover/artist/${currentSong?.ar[0]?.id}`}
                    className="link sprite_player"
                    title="来自歌手"
                  ></NavLink>
                )}
              </div>
            </div>
            {/* 进度条 */}
            <div className="content-footer">
              <Slider
                min={0}
                max={100}
                step={0.01}
                defaultValue={30}
                value={progress}
                onChange={upChanfe}
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
        {/* 移动端 */}
        <div className="yid-music-cover">
          <AppYidMusicCover
            progress={progress}
            changeAfter={changeAfter}
            upChanfe={upChanfe}
            playNext={playNext}
            playMusic={playMusic}
            onplaying={onplaying}
            showCurrentTime={showCurrentTime}
            songTime={songTime}
            changeCycle={changeCycle}
            sequence={sequence}
          />
        </div>
        <PlayerBarRight sequence={sequence} isPlayLength={isPlayLength}>
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
              onClick={changeCycle}
            ></div>
            <div
              className="playlist btn sprite_player"
              title="播放列表"
              onClick={(e) => changeMaskCover()}
            >
              {playListLength}
            </div>
            <div className="hint sprite_player">已开始播放</div>
          </div>
        </PlayerBarRight>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={changeCurrentTime}
        onEnded={changeEnded}
      />
      {/* 遮罩层 */}
      <div className="cover" onClick={(e) => changeCover()} />
    </AppPlayerBarWrapper>
  )
})
