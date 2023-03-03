import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getCurrentAlbumDetailAction,
  getHotAlbumsAction
} from '../store/actionCreators'

import WYSongListTitleCover from 'components/song-list-title-cover'
import WYSongListTable from 'components/song-list-table'
import WYSongNameSort from 'components/user-name-sort'
import WYPlayBtn from 'components/play-btn'
import WYLabelCover from 'components/label-cover'
import WYHotAlbums from './c-cpns/hot-albums'
import WYDownloadApp from '../components/download-app'
import WYUser from '../components/user'
import WYErrorCover from '../../../error-cover'
import { getSongdetailCover, columns, images } from './config'
import { formatYearMonthDay, getAlbumText } from '@/utils/format-utils'

import { AlbumDetailWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { getSizeImage } from '../../../../utils/format-utils'
export default memo(function WYAlbumDetail(props) {
  console.log(props)
  const { id } = useParams()
  console.log(id)
  const [isShowAlbumText, setIsShowAlbumText] = useState(false)
  // 网络请求发送
  const { albumDetail, hotAlbumList, err } = useSelector(
    (state) => ({
      albumDetail: state.getIn(['otherPages', 'albumDetail']),
      hotAlbumList: state.getIn(['otherPages', 'hotAlbumList']),
      err: state.getIn(['otherPages', 'err'])
    }),
    shallowEqual
  )
  // 专辑介绍
  const albumtext = getAlbumText(albumDetail?.album?.description)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentAlbumDetailAction(id))
  }, [id, dispatch])
  const ids = albumDetail.album && albumDetail.album.artists[0].id
  useEffect(() => {
    // /artist/album?id=5205&limit=5
    dispatch(getHotAlbumsAction(ids))
  }, [dispatch, ids])

  useEffect(() => {
    if (err === 'ERR_NETWORK') {
      return <Redirect to={'/ERR_NETWORK'} />
      // history.push({pathname:})
    }
  }, [err])
  const changeShowText = () => {
    setIsShowAlbumText(!isShowAlbumText)
  }
  return (
    <AlbumDetailWrapper
      err={err}
      className="wrap-v2"
      isShowAlbumText={isShowAlbumText}
    >
      <div className="album-left">
        <div className="album-title">
          <div className="image">
            <img src={getSizeImage(albumDetail?.album?.picUrl, 209)} alt="" />
            <div className="cover sprite_covor"></div>
          </div>
          <div className="title">
            <div className="title-name">
              <span className="album-icon sprite_icon2"></span>
              <span className="text texts-nowrap">
                {albumDetail?.album?.name}
              </span>
            </div>
            <div className="info">
              <div className="artists">
                歌手：
                <WYSongNameSort artists={albumDetail?.album?.artists} />{' '}
              </div>
              <div>
                发行时间：{formatYearMonthDay(albumDetail?.album?.publishTime)}
              </div>
              {albumDetail?.album?.company ? (
                <div>发行公司：{albumDetail?.album?.company}</div>
              ) : (
                ''
              )}
            </div>
            <WYPlayBtn
              share={`(${albumDetail?.album?.info?.shareCount})`}
              comment={albumDetail?.album?.info?.commentCount}
              tracksOrId={albumDetail?.songs}
            />
          </div>
        </div>
        <div className="album-text">
          <div className="albumtext">专辑介绍：</div>
          {albumtext?.length > 3
            ? albumtext?.slice(0, 3).map((item, index) => {
                return (
                  <div key={index}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}
                  </div>
                )
              })
            : albumtext?.map((item, index) => {
                return (
                  <div key={index}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}
                  </div>
                )
              })}
          {isShowAlbumText
            ? albumtext?.slice(3).map((item, index) => {
                return (
                  <div key={index}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}
                  </div>
                )
              })
            : ''}
          {albumtext?.length > 3 ? (
            <div onClick={(e) => changeShowText()} className="unfold">
              {isShowAlbumText ? '收起' : '展开'}
              <span className="icon sprite_icon2"></span>
            </div>
          ) : (
            ''
          )}
        </div>
        <WYSongListTitleCover
          title={'包含歌曲列表'}
          trackIds={albumDetail?.songs?.length}
          showCount={false}
        />
        <WYSongListTable
          columns={columns}
          tracks={getSongdetailCover(albumDetail?.songs)}
        />
      </div>
      <div className="album-right">
        <WYLabelCover title="喜欢这张专辑的人" />
        <div className="user-img">
          {images.map((item, index) => {
            return (
              <NavLink key={index} to={`/user/home/${110}`}>
                <img className="image" src={item} alt="" />
              </NavLink>
            )
          })}
        </div>
        <WYLabelCover title="Ta的其他热门专辑" all="全部" />
        <WYHotAlbums hotAlbumList={hotAlbumList} />
        <WYDownloadApp />
        <WYUser />
      </div>
      <WYErrorCover />
    </AlbumDetailWrapper>
  )
})
