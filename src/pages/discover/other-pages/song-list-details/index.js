import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getSongListDetailAction,
  getRelatedPlayListAction
} from '../store/actionCreators'

import WYLabelCover from 'components/label-cover'

import WYSongListTitleCover from 'components/song-list-title-cover'
import WYPlayBtn from 'components/play-btn'
import WYSongListTable from 'components/song-list-table'
import WYComment from '../components/comment'
import WYSimilarSongList from '../components/similar-songlist'
import WYDownloadApp from '../components/download-app'
import WYErrorCover from '../../../error-cover'
import { Image, Pagination } from 'antd'
import { columns, getSongdetailCover } from '../components/song-type/local-data'

import { SongListDetailsWrapper, SongListLeft, SongListRight } from './style'
import {
  getSizeImage,
  getdescription,
  subscribedCount,
  formatYearMonthDay
} from '@/utils/format-utils'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { objectChange } from '../../../../utils/format-utils'
export default memo(function WYSongListDetails(props) {
  const id = props.match.params.id
  const [isShowText, setIsShowText] = useState(false)

  const { sld, related, userinfo, songListUserInfo, err } = useSelector(
    (state) => ({
      sld: state.getIn(['otherPages', 'songListDetail']),
      related: state.getIn(['otherPages', 'relatedPlayList']),
      userinfo: state.getIn(['otherPages', 'userInfo']),
      songListUserInfo: state.getIn(['otherPages', 'songListUserInfo']),
      err: state.getIn(['otherPages', 'err'])
    }),
    shallowEqual
  )

  const avatarUrl = sld.creator && sld.creator.avatarUrl
  const nickname = sld.creator && sld.creator.nickname
  const infoCion =
    songListUserInfo.identify && songListUserInfo.identify.imageUrl
  // 喜欢这个歌单的用户
  const subs = sld.subscribers ?? []
  // 判断是否登录了
  // const cookie =
  // if()
  const tracks = sld.tracks ?? []
  // console.log(subs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongListDetailAction(id))
    dispatch(getRelatedPlayListAction(id))
  }, [dispatch, id])
  const history = useHistory()
  useEffect(() => {
    if (err === 'ERR_NETWORK') {
      history.push({ pathname: '/ERR_NETWORK' })
    }
  }, [err, history])
  const changeIsShow = () => {
    setIsShowText(!isShowText)
  }
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize)
  }

  return (
    <SongListDetailsWrapper className="wrap-v2" err={err}>
      <SongListLeft
        err={err}
        isShowText={isShowText}
        highQuality={sld.highQuality}
      >
        <div className="info-top">
          <div className="image">
            {sld.coverImgUrl && (
              <Image
                width={200}
                height={200}
                src={getSizeImage(sld.coverImgUrl, 200)}
                preview={{
                  src: sld?.coverImgUrl
                }}
                fallback={
                  'data:image/png;base64,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'
                }
                alt=""
              />
            )}
            <div className="cover sprite_covor"></div>
            <i className={sld.highQuality ? 'crown sprite_titleicon2' : ''}></i>
          </div>
          <div className="info">
            <div className="info-title">
              <div
                className={`icon ${
                  sld.highQuality ? 'sprite_titleicon2' : 'sprite_icon2'
                }`}
              ></div>
              <div className="title">{sld.name}</div>
            </div>
            <div className="user-detail">
              <NavLink to={`/user/home/${sld.userId}`}>
                <img src={avatarUrl} alt="" />
              </NavLink>
              <NavLink to={`/user/home/${sld.userId}`}>{nickname}</NavLink>
              {infoCion ? (
                <img
                  className="user-icon"
                  src={getSizeImage(infoCion, 13)}
                  alt=""
                />
              ) : (
                ''
              )}

              <div className="create">
                {formatYearMonthDay(sld.createTime)} 创建
              </div>
            </div>
            <WYPlayBtn
              tracksOrId={sld.tracks}
              collect={`(${subscribedCount(sld.subscribedCount)})`}
              share={`(${subscribedCount(sld.shareCount)})`}
              comment={subscribedCount(sld.commentCount)}
            />
            {objectChange(sld.tags) && (
              <div className="label">
                标签：
                <div className="btns">
                  {sld.tags.map((item, index) => {
                    return <button key={index}>{item}</button>
                  })}
                </div>
              </div>
            )}

            <div className="text">
              {getdescription(sld.description)
                ? getdescription(sld.description)
                    .slice(0, 5)
                    .map((item, index) => {
                      return (
                        <p key={index}>
                          {item === '' ? (
                            <br />
                          ) : (
                            <i>
                              {index === 0 ? <span>介绍：</span> : ''} {item}
                            </i>
                          )}
                        </p>
                      )
                    })
                : ''}
              {isShowText
                ? getdescription(sld.description)
                  ? getdescription(sld.description)
                      .slice(5)
                      .map((item, index) => {
                        return (
                          <div key={index}>
                            {item === '' ? <br /> : <i> {item}</i>}
                          </div>
                        )
                      })
                  : ''
                : ''}
              {getdescription(sld.description) ? (
                getdescription(sld.description).length > 5 ? (
                  <div className="show" onClick={(e) => changeIsShow()}>
                    {isShowText ? '收起' : '展示'}
                    <i className="icon sprite_icon2"></i>
                  </div>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <WYSongListTitleCover
          trackIds={sld?.trackIds?.length}
          playCount={sld?.playCount}
        />
        <WYSongListTable
          columns={columns}
          tracks={getSongdetailCover(tracks)}
        />
        <div className="playList-footer">
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            hideOnSinglePage
            pageSizeOptions={[10, 20, 30]}
            // pageSize={20}
            total={40}
          />

          <div className="text">查看更多内容，请下载客户端</div>
          <button className="download">立即下载</button>
        </div>

        <WYComment />
      </SongListLeft>
      <SongListRight err={err}>
        {objectChange(subs) && (
          <div className="like-songList">
            <WYLabelCover title="喜欢这个歌单的人" />
            <div className="user-img">
              {subs.map((item) => {
                return (
                  <NavLink to={`/user/home/${item.userId}`} key={item.userId}>
                    <img
                      className="image"
                      src={getSizeImage(item.avatarUrl, 40)}
                      alt=""
                    />
                  </NavLink>
                )
              })}
            </div>
          </div>
        )}

        {<WYSimilarSongList songList={related} userInfo={userinfo} />}
        <WYDownloadApp title="网易云音乐多端下载" />
      </SongListRight>
      <WYErrorCover />
    </SongListDetailsWrapper>
  )
})
