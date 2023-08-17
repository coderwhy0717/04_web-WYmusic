import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EventItemWrapper } from './style'
import dayjs from 'dayjs'
import { getSizeImage, objectChange } from '@/utils/format-utils'
import { Image } from 'antd'

import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { getPlaySongListAction } from '../../../../../player/store/actionCreators'
import WYUserNameSort from '../../../../../../components/user-name-sort'
import { formatMinuteSecond } from '../../../../../../utils/format-utils'
const EventItem = memo((props) => {
  const { item = {} } = props
  const typeName = {
    18: '分享单曲',
    19: '分享专辑',
    17: '分享电台节目',
    28: '分享电台节目',
    22: '转发',
    39: '发布视频',
    35: '分享歌单',
    13: '分享歌单',
    24: '分享专栏文章',
    41: '分享视频',
    21: '分享视频'
  }
  const json = objectChange(item) && JSON.parse(item?.json)
  console.log(json)
  console.log(item.pics)
  const dispatch = useDispatch()
  // 点击播放音乐
  const changePlayMusicSong = (id) => {
    // 这个方法 分辨数组还是id getPlaySongListAction
    dispatch(getPlaySongListAction(id))
  }
  return (
    <EventItemWrapper>
      <NavLink to={`/user/home/${item.user.userId}`} className="a-img">
        <img
          className="userimg"
          src={getSizeImage(item.user.avatarUrl, 45)}
          alt=""
        />
      </NavLink>
      <div className="right">
        <div className="name-top">
          <NavLink to={`/user/home/${item.user.userId}`} className="name">
            {item.user.nickname}
          </NavLink>
          {objectChange(item?.user?.avatarDetail?.identityIconUrl) && (
            <img
              className="identityIconUrl"
              src={getSizeImage(item?.user?.avatarDetail?.identityIconUrl, 15)}
              alt=""
            />
          )}

          <div className="type">{typeName[item.type]}</div>
        </div>
        <NavLink to={`/#`} className="time">
          {dayjs(item?.eventTime).format('YYYY年M月D日')}
        </NavLink>
        {/* 内容 */}
        <div className="text">{json.msg}</div>
        {objectChange(item.actName) && (
          <NavLink className="name" to={`/#`}>
            #{item.actName}#
          </NavLink>
        )}
        {/* song 歌曲 */}
        {item.type === 18 && (
          <div className="song-info">
            <div className="img-song ">
              <img src={json.song.album.picUrl ?? json.song.img80x80} alt="" />
              <div
                className="icon at_btn"
                onClick={(e) => changePlayMusicSong(json?.song?.id)}
              ></div>
            </div>
            <div className="play-song">
              <div className="music-name">
                <NavLink to={`/discover/playSong/${json.song.id}`}>
                  {json.song.name}
                </NavLink>
              </div>
              <div className="artist text-nowrap">
                {/* WYUserNameSort */}
                <WYUserNameSort artists={json.song.artists} />
                {/* <NavLink to={`/discover/artist/${json.song.artists[0].id}`}>
                  {json.song.artists[0].name}
                </NavLink> */}
              </div>
            </div>
          </div>
        )}
        {item.type === 39 && (
          <div className="video">
            <img src={getSizeImage(json.video.coverUrl, 338)} alt="" />
            <div className="info-cover">
              <div className="top text-nowrap u-dicn-17">
                {json.video.title}
                <span> - by {json.video.creator.nickname}</span>
              </div>
              {/* 播放视频按钮 */}
              <div className="video-play at_btn" />
              <div className="bottom">
                <div className="playTime">
                  <i className="at_btn"></i>
                  {json.video.playTime}
                </div>
                <div className="durationms ">
                  <i className="at_btn"></i>
                  {formatMinuteSecond(json.video.durationms)}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="song-box"></div> */}
        <div className="img-box">
          {objectChange(item.pics) && item.pics.length > 1 ? (
            <div
              className={classNames('images-box', {
                item4: item.pics.length === 4
              })}
            >
              <Image.PreviewGroup>
                {item?.pics.map((itemm, index) => {
                  return (
                    <Image
                      key={index}
                      width={110}
                      height={110}
                      rootClassName="image"
                      src={itemm.originUrl}
                      preview={{
                        mask: '预览'
                      }}
                      fallback={
                        'data:image/png;base64,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'
                      }
                      alt="看"
                    />
                  )
                })}
              </Image.PreviewGroup>
            </div>
          ) : (
            item.pics.length === 1 && (
              <Image
                rootClassName="image"
                src={getSizeImage(item.pics[0]?.originUrl, 250)}
                preview={{
                  src: item.pics[0]?.originUrl,
                  mask: '预览'
                }}
                alt=""
              />
            )
          )}
          {/* <img src={getSizeImage(item.pics[0]?.originUrl, 300)} alt="" /> */}
        </div>
      </div>
    </EventItemWrapper>
  )
})

EventItem.propTypes = {
  item: PropTypes.object
}

export default EventItem
