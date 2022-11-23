import React, { memo, useCallback, useEffect, useRef,useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import {Slider,message} from 'antd'

import { changePlayingAction,
         changePlayLyrics,
         changePlayNextSongAndSequenceAction,
         changeSequenceAction,
         getPlaySongDetailAction,
         getMaskCoverAction} from '../store/actionCreators'
import { formatDate,
         getPlayUrl, 
         getSizeImage } from '@/utils/format-utils'

import WYPlayDetail from './c-cpns/play-detail'

import {  AppPlayerBarWrapper, 
          PlayerBarCenter, 
          PlayerBarLeft, 
          PlayerBarRight } from './style'
export default memo(function WYAppPlayerBar() {
  const audioRef = useRef()
  const [currentTime,setCurrentTime] = useState(0)
  const [progress,setProgress] = useState(0)
  const [isChanging,setIsChanging] = useState(true)
  const [isPlayLength,setIsPlayLength] = useState(false)
  const [playListLength,setplayListLength] = useState(0)
  const { currentSong,
          playList,
          sequence,
          playLyrics,
          lyricsIndex,
          onplaying,
          maskCover} = useSelector(state => ({
      currentSong: state.getIn(['player','currentSong']),
      playList: state.getIn(['player','playList']),
      sequence: state.getIn(['player','sequence']),
      playLyrics: state.getIn(['player','playLyrics']),
      lyricsIndex: state.getIn(['player','lyricsIndex']),
      onplaying: state.getIn(['player','onplaying']),
      maskCover: state.getIn(['player','maskCover'])
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getPlaySongDetailAction(1060914))
    // dispatch(getPlaySongDetailAction(1813864802))
    // dispatch(getPlaySongDetailAction(33162226))
    // dispatch(getPlaySongDetailAction(1484537845))
    dispatch(getPlaySongDetailAction(1933602285))
  },[dispatch])
  useEffect(() => {
    // console.log(audioRef.current,"aaaaaaaaaa")
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current.play().then(res => {
      dispatch(changePlayingAction(true))
    }).catch(err => {
      dispatch(changePlayingAction(false))
    })
  },[currentSong,dispatch])
  // 播放的多少歌曲
  useEffect(() => {
    setplayListLength(playList.length)
    setTimeout(() => {
      setIsPlayLength(true)
    })
    setTimeout(() => {
      setIsPlayLength(false)
    },2000)
  },[playList])
  //数据初始化 
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''

  const showCurrentTime = formatDate(currentTime,'mm:ss')
  const time = currentSong.dt || 0
  const songTime = formatDate(time,'mm:ss')
    // 点击播放歌曲
  const playMusic = useCallback(() => {
    onplaying ? audioRef.current.pause() : audioRef.current.play()
      dispatch(changePlayingAction(!onplaying))
  },[dispatch,onplaying])
// 关键 监听onplaying的状态如果是暂停的状态 就让他播放
  useEffect(() => {
    if(onplaying) {
      audioRef.current.play()
    }
  },[onplaying])
  // 播放歌曲就触发
  const changeCurrentTime = (e) => {
    const currentTime = audioRef.current.currentTime * 1000
    if(isChanging) {
      setCurrentTime(currentTime)
      setProgress(currentTime / time * 100)
    }
    // 歌词
    let index = 0 //36
    for(let i = 0; i < playLyrics.length; i++) {
      if( currentTime < playLyrics[i].time) {//37
          index = i - 1
          break
      }
      // 获取到最后的歌词显示
      if(i === playLyrics.length - 1) {
        index = i
        break
      }
    }
    // 获取到最前面的歌词显示
    if(index === 0) {
      const lr = playLyrics[0] && playLyrics[0].content
      message.open({
        key:'lyrics',
        duration:0,
        content:lr,
        className:'lyrics-message'
      })
    }
    if(index !== lyricsIndex) {// 36
      dispatch(changePlayLyrics(index))
      const lr = playLyrics[index] && playLyrics[index].content
      message.open({
        key:'lyrics',
        duration:0,
        content:lr,
        className:'lyrics-message'
      })
    }
   
  }
    // 播放结束
    const changeEnded = () => {
      dispatch(changePlayingAction(false))
      if(sequence === 2) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
        dispatch(changePlayingAction(true))
      }else {
        playNext(1)
      }
    }
  // 切换歌曲
  const playNext = (tag) => {
      dispatch(changePlayNextSongAndSequenceAction(tag))
  }
  // 改变循环
  const changeCycle = () => {
    console.log(sequence)
    let newSequence = sequence + 1
    if(newSequence > 2) {
      newSequence = 0
    }
    dispatch(changeSequenceAction(newSequence))
  }

  // 进度条组件的函数
  // 点击进度条 改变进度条
  const upChanfe = useCallback((value) => {
      setIsChanging(false)
      const currenttime = value * time / 100
      setCurrentTime(currenttime)
      setProgress(value)
  },[time])
  // 滑动进度条  改变播放歌曲
  const changeAfter = useCallback((value) => {
    const currentTime = value / 100 * time / 1000
    audioRef.current.currentTime = currentTime
    setIsChanging(true)
    // 播放歌曲
    if(!onplaying) {
      playMusic()
    }
  },[time,onplaying,playMusic])
  // 遮罩层
  const changeCover = () => {
    dispatch(getMaskCoverAction(false))
    console.log("flaseeeee")
  }
  const changeMaskCover = () => {
    dispatch(getMaskCoverAction(!maskCover))
  }
  // 遮罩层
  return (
    <AppPlayerBarWrapper className='sprite_player' maskCover={maskCover}>
      <div className='wrap wrap-v2'>
        {/* 播放歌曲的展示列表 */}
            <WYPlayDetail />
        <PlayerBarLeft isPlaying = {onplaying}>
          <div className='rwa prev sprite_player' title="上一首(ctrl+<)" onClick={e => playNext(-1)}></div>
          <div className='play sprite_player' title="播放/暂停(p)" onClick={e => playMusic()}> </div>
          <div className='rwa next sprite_player' title="下一首(ctrl+>)" onClick={e => playNext(1)} > </div>
        </PlayerBarLeft>
        <PlayerBarCenter>
          <div  className='image'>
          <img  src={getSizeImage(picUrl,35)} alt=''></img>
          <NavLink to={`/discover/playSong/${currentSong.id}`} className='image-a sprite_player'></NavLink>
          </div>
          <div className='content'>
            <div className='content-top'>
              <NavLink to={`/discover/playSong/${currentSong.id}`} className='title text-nowrap' title={currentSong.name}>
                {currentSong.name}
              </NavLink>
              <div className='name text-nowrap'>
                  <span>
                    {
                      currentSong.ar ? currentSong.ar.map(item => {
                          return (
                            
                            <span  key={item.id} >
                                <NavLink to={`/discover/artistDetail/${item.id}`} title={item.name}>
                                  {item.name}
                                </NavLink>
                              {
                                currentSong.ar.length >= 2 ? <i>/</i> : '' 
                              }
                            </span>
                          )
                        }) : '未知歌手'
                    }
                  </span>
                <a href='/#' className='link sprite_player' title="来自歌单"> </a>
              </div>
              
            </div>
            <div className='content-footer'>
              <Slider 
                      min={0}
                      max={100}
                      step={0.01}
                      defaultValue={30} 
                      value={progress}
                      onChange={upChanfe}
                      onAfterChange={changeAfter}
                      />
              <div className='time'>
                <span className="time-left">{showCurrentTime}</span>
                <span>&nbsp;/&nbsp;</span>
                <span>{songTime}</span>
              </div>
            </div>
          </div>
        </PlayerBarCenter>
        <PlayerBarRight sequence={sequence} isPlayLength ={isPlayLength}>
          <div className='left'>
            <div  className="pip btn" title="画中画歌词"></div>
            <div  className="collect btn sprite_player" title="收藏"></div>
            <div className="share btn sprite_player" title="分享"></div>
          </div>
          <div className='right sprite_player'>
            <div className="voice btn sprite_player"></div>
            <div className="cycle btn sprite_player" title="循环" onClick={changeCycle}></div>
            <div className="playlist btn sprite_player" title="播放列表" onClick={e => changeMaskCover()}>{playListLength}</div>
            <div className='hint sprite_player'>已开始播放</div>
          </div>
        </PlayerBarRight>
      </div>
      <audio ref={audioRef}
              onTimeUpdate={changeCurrentTime}
              onEnded={changeEnded}
             />
      {/* 遮罩层 */}
      <div className='cover' onClick={e => changeCover()} />
    </AppPlayerBarWrapper>
  )
})