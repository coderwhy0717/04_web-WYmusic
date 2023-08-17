import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel, Slider } from 'antd'
import { AppYidMusicCoverWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { changePlayNextSongAndSequenceAction } from '../../../store/actionCreators'
import {
  DownOutlined,
  ShareAltOutlined,
  RightOutlined,
  HeartFilled,
  CloudDownloadOutlined,
  AudioOutlined,
  MessageOutlined,
  MoreOutlined,
  PlayCircleFilled
} from '@ant-design/icons'
import { objectChange } from '../../../../../utils/format-utils'
import PlayBtn from '../play-btn'
const AppYidMusicCover = memo((props) => {
  const {
    progress = 0,
    showCurrentTime = 0,
    songTime = 0,
    upChanfe,
    changeAfter,
    playNext,
    playMusic
  } = props
  const dispatch = useDispatch()

  const onChange = (currentSlide) => {
    // 搜索歌曲点击播放 有bug
    if (currentSlide === 0 && currentSongIndex !== 0) {
      PlayRef.current.goTo(currentSongIndex, true)
    }
    console.log(currentSlide, '之后')
  }

  // 移动端 左右滑动 切歌 有bug 传参进去
  const onchangebefore = (currentSlide, newt) => {
    console.log(currentSlide, newt, playList.length - 1, '之前')
    dispatch(changePlayNextSongAndSequenceAction(newt, true))
  }
  const PlayRef = useRef()
  const { playList, currentSong, currentSongIndex, onplaying } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
      currentSong: state.getIn(['player', 'currentSong']),
      onplaying: state.getIn(['player', 'onplaying'])
    }),
    shallowEqual
  )
  const [imgUrl, setImgUrl] = useState('false')

  // 1. 原本歌单里有的是可以控制index的
  // 2. 如果歌单里 没有 需要添加进去就会引起Carousel组件的刷新 index会重置 采用了最上面有bug的做法
  useEffect(() => {
    // 可有优化  控制次数
    PlayRef.current.goTo(currentSongIndex, true)
    setImgUrl(currentSong?.al?.picUrl)
  }, [currentSongIndex, currentSong])

  //
  const [open, setOpen] = useState(false)
  const onClose = () => {
    // getOpenAction
    // dispatch(getOpenAction(!open))
    setOpen(!open)
  }

  const alialength =
    objectChange(currentSong?.alia) && currentSong?.alia[0].length
  const length = objectChange(currentSong) && currentSong?.name.length

  return (
    <AppYidMusicCoverWrapper open={open} anim={onplaying}>
      {/* 手机端 播放器 */}
      <Carousel
        afterChange={onChange}
        beforeChange={onchangebefore}
        dots={false}
        ref={PlayRef}
      >
        {/* 2.因为  playList 发生了改变 */}
        {
          // objectChange
          objectChange(playList) &&
            playList.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="yid-app-play-box"
                  onClick={(e) => onClose()}
                >
                  <div className="yid-app-play-bgimg ">
                    {/*手机端 style行内样式 控制旋转个数 区分开来 不然有小bug */}
                    <img
                      className="yid-music-img"
                      style={{
                        animation:
                          currentSongIndex === index
                            ? 'musicImg 16s linear infinite'
                            : ''
                      }}
                      src={item.al.picUrl}
                      alt=""
                    ></img>
                  </div>
                  <div className="yid-app-name">
                    <div>{item.name}</div>
                  </div>
                </div>
              )
            })
        }
      </Carousel>
      {/* 点击详情页 */}
      <div className="yid-open">
        {/* 1. 手机端 播放页面 头部 */}
        <div className="yid-open-head">
          <DownOutlined
            onClick={(e) => onClose()}
            style={{ fontSize: '28px', color: '#fff', padding: '12px 15px' }}
          />
          {/* 点击进入艺人页面 */}
          <div className="yid-center">
            <div
              className="text"
              onClick={(e) => console.log('点击进入 艺人页面')}
            >
              {open && (
                <div
                  className="yid-song-name"
                  style={{
                    animation:
                      length + alialength > 11
                        ? '10s linear 2s infinite move_eye'
                        : ''
                  }}
                >
                  {currentSong?.name}
                  {objectChange(currentSong?.alia) && (
                    <i>&nbsp;(&nbsp;{currentSong?.alia[0]})</i>
                  )}
                </div>
              )}

              <div className="yid-ar-name">
                {objectChange(currentSong) && currentSong?.ar[0]?.name}
                <RightOutlined
                  style={{
                    fontSize: '14px',
                    color: '#ccc'
                  }}
                />
              </div>
            </div>
          </div>
          <ShareAltOutlined
            style={{ fontSize: '28px', color: '#fff', padding: '12px 15px' }}
          />
        </div>
        {/* 2. 手机端 播放页面 内容 */}
        {objectChange(currentSong) && (
          <div className="yid-open-center">
            <div className="yid-open-music-img">
              <img
                style={{
                  animation:
                    open && onplaying ? 'musicImg 16s linear 1s infinite' : ''
                }}
                src={currentSong.al.picUrl}
                alt=""
              ></img>
            </div>
          </div>
        )}

        {/* 3. 手机端 播放页面 底部播放器 */}
        <div className="yid-open-footer">
          {/* 按钮 */}
          <div className="yid-open-btns">
            <HeartFilled style={{ color: 'red' }} />
            <CloudDownloadOutlined />
            <AudioOutlined />
            <MessageOutlined />
            <MoreOutlined />
          </div>
          {/* 进度条 */}
          <div className="yid-open-slider">
            <i>{showCurrentTime}</i>
            <Slider
              min={0}
              max={100}
              step={0.01}
              defaultValue={30}
              value={progress}
              onChange={upChanfe}
              onAfterChange={changeAfter}
              className="slider"
            />
            <i>{songTime}</i>
          </div>
          {/* 手机端 播放按钮 */}
          <PlayBtn
            playNext={playNext}
            playMusic={playMusic}
            onplaying={onplaying}
            open={open}
          />
        </div>
        {/* 4. 高斯模糊 背景 手机端 */}
        <img
          className="yid-bg-img"
          src={getSizeImage(imgUrl, 100)}
          alt=""
        ></img>
        <div className="yid-bg-cover"></div>
      </div>
    </AppYidMusicCoverWrapper>
  )
})

AppYidMusicCover.propTypes = {
  progress: PropTypes.number,
  showCurrentTime: PropTypes.number,
  songTime: PropTypes.number,
  changeAfter: PropTypes.func,
  upChanfe: PropTypes.func,
  playNext: PropTypes.func,
  playMusic: PropTypes.func
}

export default AppYidMusicCover
