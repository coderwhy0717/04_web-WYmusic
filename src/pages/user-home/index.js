import React, { memo, useEffect } from 'react'
import { ArtistDetailWrapper } from './style'
import { Image } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getRadioAction,
  getUserInfoAction,
  getUSerPlaylistAction,
  getUserSongsAction
} from './store/actionCreators'
import {
  formatYearLater,
  getCity,
  getSizeImage,
  objectChange
} from '../../utils/format-utils'
import { NavLink } from 'react-router-dom'
import SongsRank from './cpn/songs-rank'
import classNames from 'classnames'
import Radio from './cpn/radio'
import NewSongList from './cpn/new-song-list'
import CollectSongList from './cpn/collect-song-list'

export default memo(function WYCurrentArtist(props) {
  const errimage =
    'data:image/png;base64,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'

  const dispatch = useDispatch()
  const { userInfo, radio, newSongList, collectSongList } = useSelector(
    (state) => ({
      userInfo: state.getIn(['userHome', 'userInfo']),
      radio: state.getIn(['userHome', 'radio']),
      newSongList: state.getIn(['userHome', 'newSongList']),
      collectSongList: state.getIn(['userHome', 'collectSongList'])
    }),
    shallowEqual
  )
  useEffect(() => {
    // 用户信息
    dispatch(getUserInfoAction(props.match.params.id))
    // 用户电台 /user/audio?uid=439967172
    dispatch(getRadioAction(props.match.params.id))
  }, [dispatch, props.match.params.id])
  // 需要用到userinfo里的信息 用户 歌单 请求
  useEffect(() => {
    // 用户歌单 getUSerPlaylistAction
    dispatch(
      getUSerPlaylistAction(
        props.match.params.id,
        userInfo?.profile?.playlistCount
      )
    )
  }, [dispatch, props.match.params.id, userInfo])
  console.log(formatYearLater(userInfo?.profile?.birthday, 'yy'), '后')
  //
  const socialFn = () => {
    return (
      objectChange(userInfo?.bindings) &&
      userInfo?.bindings.filter((item) => item.url !== '')
    )
  }

  return (
    <ArtistDetailWrapper gender={userInfo?.profile?.gender}>
      <div className="box-user-home wrap-v2">
        <div className="user-info ">
          <div className="image-div">
            {userInfo?.profile?.avatarUrl && (
              <Image
                rootClassName="image"
                width={180}
                height={180}
                src={getSizeImage(userInfo?.profile?.avatarUrl, 180)}
                preview={{
                  src: userInfo?.profile?.avatarUrl
                }}
                fallback={errimage}
                alt=""
              />
            )}
          </div>
          <div className="user-title">
            <div className="box">
              <div className="title">
                <span className="name">{userInfo?.profile?.nickname}</span>
                {/* <img
                src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872333/eb74/6e09/3b0f/fd6e21661e1d32e1c52658173ffd42b6.png?param=94x32"
                alt=""
              /> */}

                <span className="Lv sprite_titleicon2">
                  {userInfo.level}
                  <i className="lvf sprite_titleicon2"></i>
                </span>
                {/* 男女性别 */}
                {userInfo?.profile?.privacyItemUnlimit?.gender && (
                  <span className="biao sprite_icon2"></span>
                )}
                <button className="btn btna sprite_btn2">发私信</button>
                <button className="btn btnb sprite_btn2">关&nbsp;注</button>
                {/* btn点击跳转到artist页面 */}
                {userInfo?.profile?.artistId && (
                  <NavLink
                    to={`/discover/artist/${userInfo?.profile?.artistId}`}
                    className="navto sprite_btn"
                  >
                    查看歌手页
                  </NavLink>
                )}
              </div>
              {userInfo?.profile?.mainAuthType && (
                <div className="rz">
                  {/* 认证 type === 2 */}
                  {userInfo?.profile?.mainAuthType.type === 2 && (
                    <span className="icon icon2 sprite_titleicon2" />
                  )}
                  {/* 音乐人 type === 4 */}
                  {userInfo?.profile?.mainAuthType.type === 4 && (
                    <span className="icon icon4 sprite_titleicon2" />
                  )}
                  {/* 达人 type ===  */}
                  {userInfo?.profile?.mainAuthType.type === 207 && (
                    <span className="icon icon207 sprite_titleicon2" />
                  )}
                  {/* 标签后的文字 */}
                  {userInfo?.profile?.mainAuthType?.tags && (
                    <div className="title-rz">
                      <span>{userInfo?.profile?.mainAuthType?.desc}</span>
                      {/* 主要的标签 */}
                      {objectChange(userInfo?.profile?.mainAuthType?.tags) &&
                        userInfo?.profile?.mainAuthType?.tags.map(
                          (item, index) => {
                            return (
                              <i key={index} className="i-tabel">
                                {item}
                              </i>
                            )
                          }
                        )}
                    </div>
                  )}
                </div>
              )}
              {/* 第二个 */}
              {objectChange(userInfo?.profile?.allAuthTypes) &&
              userInfo?.profile?.allAuthTypes.length >= 2 &&
              userInfo?.profile?.allAuthTypes[1]?.desc !== '' ? (
                <div className="rz ">
                  {/* 认证 type === 2 */}
                  {userInfo?.profile?.allAuthTypes[1]?.type === 2 && (
                    <span className="icon icon2 sprite_titleicon2" />
                  )}
                  {/* 音乐人 type === 4 */}
                  {userInfo?.profile?.allAuthTypes[1]?.type === 4 && (
                    <span className="icon icon4 sprite_titleicon2" />
                  )}
                  {/* 达人 type ===  */}
                  {200 <= userInfo?.profile?.allAuthTypes[1]?.type &&
                    userInfo?.profile?.allAuthTypes[1]?.type < 300 && (
                      <span className="icon icon207 sprite_titleicon2" />
                    )}
                  <span className="text-title">
                    {objectChange(userInfo?.profile?.allAuthTypes) &&
                      (userInfo?.profile?.mainAuthType?.tags
                        ? userInfo?.profile?.allAuthTypes.slice(1)
                        : userInfo?.profile?.allAuthTypes
                      ).map((item) => {
                        return (
                          <span key={item.type}>
                            {item.desc}
                            {item.desc !== '' && <i>、</i>}
                          </span>
                        )
                      })}
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="count">
              <div>
                {/* 获取动态消息 api */}
                <NavLink to={'/#'}>
                  <div className="numb">{userInfo?.profile?.eventCount}</div>
                  <span>动态</span>
                </NavLink>
              </div>
              <div>
                <NavLink to={'/#'}>
                  <div>{userInfo?.profile?.follows}</div>
                  <span>关注</span>
                </NavLink>
              </div>
              <div>
                <NavLink to={'/#'}>
                  <div>{userInfo?.profile?.followeds}</div>
                  <span>粉丝</span>
                </NavLink>
              </div>
            </div>
            <ul className="info">
              {userInfo?.profile?.signature && (
                <li>
                  <span>个人介绍：{userInfo.profile.signature}</span>
                </li>
              )}
              <li>
                {userInfo?.profile?.privacyItemUnlimit.area && (
                  <span>
                    所在地区：{getCity(userInfo?.profile?.province)?.name}
                    {
                      <span>
                        &nbsp;-&nbsp;{getCity(userInfo?.profile?.city)?.name}
                      </span>
                    }
                  </span>
                )}
                {userInfo?.profile?.birthday > 0 && (
                  <span>
                    <span className="age">年龄：</span>
                    <span>
                      {formatYearLater(userInfo?.profile?.birthday, 'yy')}后
                    </span>
                  </span>
                )}
              </li>
            </ul>
            {/* 社交 */}
            {objectChange(socialFn()) && (
              <ul className="social">
                <li>社交网络：</li>
                {socialFn().map((item) => {
                  return (
                    <a
                      href={item.url}
                      key={item.id}
                      className={classNames('logo_icon', {
                        wb: item.type === 2
                      })}
                    >
                      {' '}
                    </a>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        {/* 创建的专栏 */}
        {/* 创建的电台 */}
        {radio?.count > 0 && (
          <Radio list={radio?.djRadios} name={userInfo?.profile?.nickname} />
        )}
        {/* 歌曲排行 */}
        <SongsRank urlId={props.match.params.id} />
        {/* 用户名 创建的歌单 */}
        {objectChange(newSongList) && (
          <NewSongList
            newSongList={newSongList}
            name={userInfo?.profile?.nickname}
          />
        )}
        {/* 用户名 收藏的歌单 */}
        {objectChange(collectSongList) && (
          <CollectSongList
            collectSongList={collectSongList}
            name={userInfo?.profile?.nickname}
          />
        )}
      </div>
    </ArtistDetailWrapper>
  )
})
