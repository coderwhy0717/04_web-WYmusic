import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getArtistAlbumAction,
  getArtistDetailAction,
  getArtistMvAction,
  getArtistSimiAction,
  getArtistTextAction
} from '../store/actionArtsit'
import { ArtistWrapper } from './style'
import SearchForm from '@/components/search-form'
import ItemSong from './cpn/item-song'
import AlbumCover from '@/components/album-cover'
import WYLabelCover from '@/components/label-cover'
import WYDownloadApp from '../components/download-app'
import WYUser from '../components/user'
import { Pagination, Image } from 'antd'
import MvCover from './cpn/mv-cover'
import { objectChange } from '../../../../utils/format-utils'
import WYErrorCover from '@/pages/error-cover'

import Simi from './cpn/simi'
import { getPlaySongListAction } from '@/pages/player/store/actionCreators'
import { getSingerListAction } from '../../c-pages/recommend/store/acionCreators'
import { NavLink } from 'react-router-dom'

const Artist = memo((props) => {
  const dispatch = useDispatch()
  console.log(props.match.params.id)
  const {
    artistHome,
    artistAlbum,
    artistMv,
    artistText,
    artistList: artistSimi,
    err
  } = useSelector(
    (state) => ({
      artistHome: state.getIn(['otherPages', 'artistHome']),
      artistAlbum: state.getIn(['otherPages', 'artistAlbum']),
      artistMv: state.getIn(['otherPages', 'artistMv']),
      artistText: state.getIn(['otherPages', 'artistText']),
      err: state.getIn(['otherPages', 'err']),
      artistList: state.getIn(['recommend', 'artistList'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getSingerListAction(6))
  }, [dispatch])
  // useEffect(() => {
  //   dispatch(getArtistDetailAction(props.match.params.id))
  // }, [dispatch, props.match.params.id])
  const arr = ['热门作品', '所有专辑', '相关MV', '艺人介绍']
  const [cindex, setIndex] = useState(0)
  const changeIndex = (value) => {
    setIndex(value)
    //根据点击的index 去获取 不同网络请求
  }
  // 进来就必须变
  useEffect(() => {
    dispatch(getArtistDetailAction(props.match.params.id))
  }, [dispatch, props.match.params.id])
  useEffect(() => {
    console.log('变了', cindex)
    switch (cindex) {
      case 2:
        return dispatch(getArtistMvAction(props.match.params.id))
      case 3:
        return dispatch(getArtistTextAction(props.match.params.id))
      default:
        dispatch(getArtistAlbumAction(props.match.params.id))
        // dispatch(getArtistSimiAction(props.match.params.id))
        break
    }
  }, [cindex, dispatch, props.match.params.id])
  //两个分页器
  const onChange = (page, pageSize) => {
    console.log(page, pageSize)
    dispatch(
      getArtistAlbumAction(props.match.params.id, 12, (page - 1) * pageSize)
    )
  }
  const onChangeMv = (page, pageSize) => {
    console.log(page, pageSize)
    dispatch(getArtistMvAction(props.match.params.id, (page - 1) * pageSize))
  }
  // 点击播放全部音乐
  const changeMsuic = () => {
    dispatch(getPlaySongListAction(artistHome.hotSongs))
  }
  return (
    <ArtistWrapper className="wrap-v2" err={err}>
      <div className="left">
        <div className="top-title">
          <h1>{artistHome?.artist?.name}</h1>&nbsp;
          {artistHome?.artist?.alias.map((item, index) => {
            return (
              <div key={index}>
                {item}
                <span>;</span>
              </div>
            )
          })}
        </div>
        {/* 艺人照片 */}
        <div className="img-box">
          {artistHome?.artist?.picUrl && (
            <Image
              width={640}
              height={300}
              src={`${artistHome?.artist?.picUrl}?param=640y300`}
              preview={{
                src: artistHome?.artist?.picUrl
              }}
              fallback={
                'data:image/png;base64,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'
              }
            />
          )}
          {/* <img src={`${artistHome?.artist?.picUrl}?param=640y300`} alt="" /> */}
          <div className="bgc"></div>
          {artistHome?.artist?.accountId && (
            <NavLink
              to={`/user/home/${artistHome?.artist?.accountId}`}
              className="user-home sprite_icon"
            />
          )}
          <div className="collect sprite_icon"></div>
        </div>
        {/* btns 点击切换 */}
        <div className="btns">
          {arr.map((item, index) => {
            return (
              <div
                key={item}
                className={classNames('itemdiv', {
                  activebtn: index === cindex
                })}
                onClick={(e) => changeIndex(index)}
              >
                {item}
              </div>
            )
          })}
          <div className="div"></div>
        </div>
        {cindex === 0 && (
          <div className="hot-song">
            <div className="top-btn">
              <div className="leftb">
                <div className="play">
                  <i
                    className="p-text sprite_btn"
                    title="播放"
                    onClick={changeMsuic}
                  >
                    播放
                  </i>
                  <i className="p-icon sprite_btn" title="添加到播放列表"></i>
                </div>
                <div className="collect sprite_btn">收藏热门50</div>
              </div>
              <div className="righb sprite_btn">热门单曲</div>
            </div>
            <div className="songs">
              <SearchForm
                data={artistHome.hotSongs}
                Cpn={ItemSong}
              ></SearchForm>
            </div>
          </div>
        )}
        {/* 专辑 */}
        {cindex === 1 && (
          <div className="all-album">
            {artistAlbum?.hotAlbums?.map((item) => {
              return (
                <div key={item.id} className="item-album">
                  <AlbumCover info={item} showName={false} />
                </div>
              )
            })}
            <div className="footer-p">
              <Pagination
                hideOnSinglePage={true}
                defaultCurrent={1}
                total={artistAlbum?.artist?.albumSize}
                onChange={onChange}
                pageSize={12}
                showSizeChanger={false}
              />
            </div>
          </div>
        )}
        {/* Mv  */}
        {cindex === 2 && (
          <div className="all-mv">
            <div className="mv-box">
              {objectChange(artistMv) &&
                artistMv.map((item) => {
                  return (
                    <div className="mv-item" key={item.id}>
                      <MvCover item={item} />
                    </div>
                  )
                })}
            </div>
            <div className="footer-p">
              <Pagination
                hideOnSinglePage={true}
                defaultCurrent={1}
                total={artistHome?.artist?.mvSize}
                onChange={onChangeMv}
                pageSize={12}
                showSizeChanger={false}
              />
            </div>
          </div>
        )}
        {cindex === 3 && (
          <div className="artist-info">
            <div className="top-text">
              <div className="title">
                <div className="bgc"></div>
                <div>{artistHome?.artist?.name}简介</div>
              </div>
              <div className="text">{artistText?.briefDesc}</div>
            </div>
            {objectChange(artistText) &&
              artistText?.introduction.map((item) => {
                return (
                  <div className="top-text" key={item.ti}>
                    <h3 className="title">{item.ti}</h3>
                    <div
                      className={classNames('text-i', {
                        pre: item.ti === '主要成就' || item.ti === '演艺经历'
                      })}
                    >
                      {item.txt}
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
      {/* 页面加载 显示 加载中... */}
      <WYErrorCover />
      <div className="right">
        <WYLabelCover title="热门歌手" />
        {objectChange(artistSimi) && <Simi list={artistSimi} />}
        <WYDownloadApp title="网易云音乐多端下载" />
        <WYUser />
      </div>
    </ArtistWrapper>
  )
})

Artist.propTypes = {}

export default Artist
