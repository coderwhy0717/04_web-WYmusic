import React, { memo, useEffect } from 'react'
import { ArtistDetailWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getRadioAction,
  getUserInfoAction,
  getUSerPlaylistAction
} from './store/actionCreators'
import { formatYearLater, objectChange } from '../../utils/format-utils'
import SongsRank from './cpn/songs-rank'
import Radio from './cpn/radio'
import NewSongList from './cpn/new-song-list'
import CollectSongList from './cpn/collect-song-list'
import UserInfo from '../../components/user-info'

export default memo(function WYCurrentArtist(props) {
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
  console.log(userInfo)
  console.log(props.match.params.id)

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

  return (
    <ArtistDetailWrapper gender={userInfo?.profile?.gender}>
      <div className="box-user-home wrap-v2">
        {/* userInfo */}
        {objectChange(userInfo) && (
          <UserInfo userInfo={userInfo} id={props.match.params.id} />
        )}
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
