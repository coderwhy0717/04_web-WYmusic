import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ChatCoverWrapper } from './style'
import dayjs from 'dayjs'
import { getSizeImage } from '../../utils/format-utils'
import { NavLink } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPlaySongListAction } from '../../pages/player/store/actionCreators'
import {
  getCurrentAlbumDetailAction,
  getSongListDetailAction
} from '../../pages/discover/other-pages/store/actionCreators'
const ChatCover = memo((props) => {
  const { item = {}, userId = 0 } = props

  const dispatch = useDispatch()

  // const { albumDetail } = useSelector(
  //   (state) => ({
  //     albumDetail: state.getIn(['otherPages', 'albumDetail'])
  //   }),
  //   shallowEqual
  // )

  console.log(item)
  const data = JSON.parse(item?.msg)
  console.log(data)
  // console.log(dayjs(item?.time).format('YYYY-MM-DD HH:mm'))
  // 点击播放专辑音乐
  const changePlayMusic = (id) => {
    //1. 专辑播放 获取专辑数据后
    dispatch(getCurrentAlbumDetailAction(id)).then((res) => {
      // dispatch(getPlaySongListAction(tracksOrId))
      // 2. 把 返回的res 专辑的歌曲list 给播放
      dispatch(getPlaySongListAction(res.songs))
    })
  }
  // 点击播放音乐
  const changePlayMusicSong = (id) => {
    // 这个方法 分辨数组还是id
    dispatch(getPlaySongListAction(id))
  }
  // 点击播放歌单
  const changePlaylistMusic = (id) => {
    //1. 获取歌单信息 getSongListDetailAction
    dispatch(getSongListDetailAction(id)).then((res) => {
      console.log(res, '返回的歌单')
      // 2. 把 返回的res 歌单的歌曲list 给播放
      dispatch(getPlaySongListAction(res.tracks))
    })
  }

  return (
    <ChatCoverWrapper>
      <div className="chat-time">
        {
          dayjs().isAfter(dayjs(item?.time).add(1, 'hour'))
            ? dayjs().isAfter(dayjs(item?.time).add(1, 'day')) // 判断与今天的时间相比如果 超过了1天
              ? dayjs().isAfter(dayjs(item?.time), 'year')
                ? dayjs(item?.time).format('YYYY-MM-DD HH:mm')
                : dayjs(item?.time).format('YY-MM-DD HH:mm') // 月日 加 时间
              : `${dayjs(item?.time).locale('zh-cn').calendar(null, {
                  sameDay: '[今天] HH:mm ', // The same day ( Today at 2:30 AM )
                  lastDay: '[昨天] HH:mm' // The day before ( Yesterday at 2:30 AM )
                })} `
            : dayjs(item?.time).locale('zh-cn').fromNow() // 不超过一小时 几秒前

          // dayjs(itemData?.lastMsgTime).format('HH:mm')
        }
      </div>
      {userId === item.fromUser.userId ? (
        // 我的发言
        <div className="chat-conent me">
          <div className="chat-text me-text">
            {/*
                12 活动
                2  分享专辑
                4  分享歌单
                1  分享单曲
                23 普通的 带图片的通知
                6  普通的文字通知
              */}
            {data?.type === 12 && (
              <p className="s">{data?.promotionUrl?.text}</p>
            )}
            {data?.type === 2 && <p className="s">分享专辑</p>}
            {/* 分享单曲 */}
            {data?.type === 1 && <p className="s">{data.title}</p>}
            {data?.type === 4 && <p className="s">{data.title}</p>}
            <p className="msg">{data?.msg}</p>
            {data?.type === 23 && (
              <div className="type23">
                <a href={data?.generalMsg?.webUrl} className="img-a">
                  <img
                    className="img23"
                    src={getSizeImage(data?.generalMsg?.cover, 60, 'y')}
                    alt=""
                  />
                  <div className="icon-a sprite_covor"></div>
                </a>
                <a className="a" href={data?.generalMsg?.webUrl}>
                  {data?.generalMsg?.title}
                </a>
              </div>
            )}
            {data?.type === 12 && (
              <div className="type23">
                <a href={data?.promotionUrl?.url} className="img-a">
                  <img
                    className="img12"
                    src={`${data?.promotionUrl?.coverUrl}?param=90y60`}
                    alt=""
                  />
                </a>
                <a href={data?.promotionUrl?.url} className="a">
                  {data?.promotionUrl?.title}
                </a>
              </div>
            )}
            {data?.type === 2 && (
              <div className="type23">
                <div className="img-a">
                  <img
                    className="img23"
                    src={`${data?.album?.blurPicUrl}?param=60y60`}
                    alt=""
                  />

                  <NavLink to={`/#`} className="icon-a sprite_covor"></NavLink>

                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlayMusic(data?.album?.id)}
                  ></div>
                </div>
                <div>
                  <NavLink
                    className="a"
                    to={`/discover/albumDetail/${data?.album?.id}`}
                  >
                    {data?.album?.name}
                  </NavLink>
                  <br />
                  <div className="a-name">
                    {data?.album?.artists.map((item) => {
                      return (
                        <NavLink
                          key={item.id}
                          to={`/discover/artist/${item.id}`}
                        >
                          {item.name}
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
            {data?.type === 1 && (
              <div className="type23">
                <div className="img-a">
                  <img
                    className="img23"
                    src={`${data?.song?.album?.blurPicUrl}?param=60y60`}
                    alt=""
                  />

                  <NavLink
                    to={`/discover/playSong/${data?.song?.id}`}
                    className="icon-a sprite_covor"
                  ></NavLink>
                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlayMusicSong(data?.song?.id)}
                  ></div>
                </div>
                <div>
                  <NavLink
                    className="a"
                    to={`/discover/playSong/${data?.song?.id}`}
                  >
                    {data?.song?.name}
                  </NavLink>
                  <br />
                  <div className="a-name text-nowrap">
                    {data?.song?.artists.map((item) => {
                      return (
                        <span key={item.id}>
                          <NavLink to={`/discover/artist/${item.id}`}>
                            {item.name}
                          </NavLink>
                          <span>/</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
            {data?.type === 4 && (
              <div className="type23">
                <div className="img-a">
                  <NavLink
                    to={`/discover/songListDetail/${data?.playlist?.id}`}
                  >
                    <img
                      className="img23"
                      src={`${data?.playlist?.coverImgUrl}?param=60y60`}
                      alt=""
                    />
                  </NavLink>

                  <div className="icon-a sprite_covor"></div>
                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlaylistMusic(data?.playlist?.id)}
                  ></div>
                </div>

                <div>
                  <NavLink
                    className="a"
                    to={`/discover/songListDetail/${data?.playlist?.id}`}
                  >
                    {data?.playlist?.name}
                  </NavLink>
                  <br />
                  <div className="a-name">
                    by&nbsp;
                    <NavLink
                      to={`/user/home/${data?.playlist?.creator?.userId}`}
                    >
                      {data?.playlist?.creator?.nickname}
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
            <i className="me-corr"></i>
          </div>
          <NavLink
            to={`/user/home/${item?.fromUser?.userId}`}
            className="cc-img"
          >
            <img src={getSizeImage(item?.fromUser?.avatarUrl, 50)} alt="" />
          </NavLink>
        </div>
      ) : (
        <div className="chat-conent">
          <NavLink
            to={`/user/home/${item?.fromUser?.userId}`}
            className="cc-img"
          >
            <img src={getSizeImage(item?.fromUser?.avatarUrl, 50)} alt="" />
          </NavLink>
          <div className="chat-text">
            {/*
              12 活动
              2  分享专辑
              4  分享歌单
              1  分享单曲
              23 普通的 带图片的通知
              6  普通的文字通知
          */}
            {data?.type === 12 && (
              <p className="s">{data?.promotionUrl?.text}</p>
            )}
            {data?.type === 2 && <p className="s">分享专辑</p>}
            {/* 分享单曲 */}
            {data?.type === 1 && <p className="s">{data.title}</p>}
            {data?.type === 4 && <p className="s">{data.title}</p>}
            <p>{data?.msg}</p>
            {data?.type === 23 && (
              <div className="type23">
                <NavLink to={`/#`} className="img-a">
                  <img
                    className="img23"
                    src={getSizeImage(data?.generalMsg?.cover, 60, 'y')}
                    alt=""
                  />
                  <div className="icon-a sprite_covor"></div>
                </NavLink>
                <NavLink className="a" to={`/#`}>
                  {data?.generalMsg?.title}
                </NavLink>
              </div>
            )}
            {data?.type === 12 && (
              <div className="type23">
                <a href={data?.promotionUrl?.url} className="img-a">
                  <img
                    className="img12"
                    src={`${data?.promotionUrl?.coverUrl}?param=90y60`}
                    alt=""
                  />
                </a>
                <a href={data?.promotionUrl?.url} className="a">
                  {data?.promotionUrl?.title}
                </a>
              </div>
            )}
            {data?.type === 2 && (
              <div className="type23">
                <div className="img-a">
                  <img
                    className="img23"
                    src={`${data?.album?.blurPicUrl}?param=60y60`}
                    alt=""
                  />

                  <NavLink to={`/#`} className="icon-a sprite_covor"></NavLink>

                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlayMusic(data?.album?.id)}
                  ></div>
                </div>

                <div>
                  <NavLink
                    className="a"
                    to={`/discover/albumDetail/${data?.album?.id}`}
                  >
                    {data?.album?.name}
                  </NavLink>
                  <br />
                  <div className="a-name">
                    {data?.album?.artists.map((item) => {
                      return (
                        <NavLink
                          key={item.id}
                          to={`/discover/artist/${item.id}`}
                        >
                          {item.name}
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
            {data?.type === 1 && (
              <div className="type23">
                <div className="img-a">
                  <img
                    className="img23"
                    src={`${data?.song?.album?.blurPicUrl}?param=60y60`}
                    alt=""
                  />

                  <NavLink
                    to={`/discover/playSong/${data?.song?.id}`}
                    className="icon-a sprite_covor"
                  ></NavLink>
                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlayMusicSong(data?.song?.id)}
                  ></div>
                </div>
                <div>
                  <NavLink
                    className="a"
                    to={`/discover/playSong/${data?.song?.id}`}
                  >
                    {data?.song?.name}
                  </NavLink>
                  <br />
                  <div className="a-name text-nowrap">
                    {data?.song?.artists.map((item) => {
                      return (
                        <span key={item.id}>
                          <NavLink to={`/discover/artist/${item.id}`}>
                            {item.name}
                          </NavLink>
                          <span>/</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
            {data?.type === 4 && (
              <div className="type23">
                <div className="img-a">
                  <NavLink
                    to={`/discover/songListDetail/${data?.playlist?.id}`}
                  >
                    <img
                      className="img23"
                      src={`${data?.playlist?.coverImgUrl}?param=60y60`}
                      alt=""
                    />
                  </NavLink>

                  <div className="icon-a sprite_covor"></div>
                  {/* 获取专辑 歌曲id */}
                  <div
                    className="play at_btn"
                    onClick={(e) => changePlaylistMusic(data?.playlist?.id)}
                  ></div>
                </div>

                <div>
                  <NavLink
                    className="a"
                    to={`/discover/songListDetail/${data?.playlist?.id}`}
                  >
                    {data?.playlist?.name}
                  </NavLink>
                  <br />
                  <div className="a-name">
                    by&nbsp;
                    <NavLink
                      to={`/user/home/${data?.playlist?.creator?.userId}`}
                    >
                      {data?.playlist?.creator?.nickname}
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
            <i className="corr"></i>
          </div>
        </div>
      )}
    </ChatCoverWrapper>
  )
})

ChatCover.propTypes = {
  item: PropTypes.object,
  userId: PropTypes.number
}

export default ChatCover
