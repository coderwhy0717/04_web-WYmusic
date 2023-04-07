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
import { Image } from 'antd'

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
  console.log(albumDetail, '专辑')

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
            {albumDetail?.album?.picUrl && (
              <Image
                width={209}
                height={209}
                src={getSizeImage(albumDetail?.album?.picUrl, 177, 'y')}
                preview={{
                  src: albumDetail?.album?.picUrl
                }}
                fallback={
                  'data:image/png;base64,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'
                }
                alt=""
              />
            )}
            {/* <img src={getSizeImage(albumDetail?.album?.picUrl, 209)} alt="" /> */}
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
