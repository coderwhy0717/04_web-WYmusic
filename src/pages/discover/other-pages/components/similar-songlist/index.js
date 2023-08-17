import React, { memo } from 'react'

import WYLabelCover from 'components/label-cover'

import { getSizeImage } from '@/utils/format-utils'
// import {getUserInfoAction} from '../../store/actionCreators'

import { SimilarSongListWrapper } from './style'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
export default memo(function WYSimilarSongList(props) {
  const { songList = [], userInfo = [] } = props
  // console.log(songList,"song")
  return (
    <SimilarSongListWrapper>
      <WYLabelCover title="热门歌单" />
      {songList.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <NavLink to={`/discover/songListDetail/${item.id}`}>
              <img src={getSizeImage(item.coverImgUrl, 50)} alt=""></img>
            </NavLink>
            <div className="content">
              <div className="title text-nowrap">
                <NavLink to={`/discover/songListDetail/${item.id}`}>
                  {item.name}
                </NavLink>
              </div>
              <div className="by">
                <span>by</span>
                <NavLink to={`/user/home/${item.creator.userId}`}>
                  <span className="hot-songList text-nowrap">
                    {item.creator.nickname}
                  </span>
                  {userInfo[index]?.profile?.avatarDetail?.identityIconUrl ? (
                    <img
                      src={getSizeImage(
                        userInfo[index]?.profile?.avatarDetail?.identityIconUrl,
                        13
                      )}
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        )
      })}
    </SimilarSongListWrapper>
  )
})
