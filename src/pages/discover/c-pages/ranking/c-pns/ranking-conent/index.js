import React, { memo, useEffect } from 'react'
import { columns, getSongData } from './song-config'
import WYRankingTopTitle from '../comps/ranking-top-title'
import { RankingConentWrapper } from './style'
import { useParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getSongListDetailAction,
  getSongListTitle
} from '../../store/actionCreators'
import WYSongListTitleCover from 'components/song-list-title-cover'
import WYSongListTable from '@/components/song-list-table'
import WYErrorCover from '@/pages/error-cover'

export default memo(function WYRaningConent() {
  const { id = 0 } = useParams()
  // console.log(id,"limina")
  // 获取数据
  const { songListDetail, err } = useSelector(
    (state) => ({
      songListDetail: state.getIn(['ranking', 'songListDetail']),
      err: state.getIn(['otherPages', 'err'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongListDetailAction(id))
    dispatch(getSongListTitle(id))
  }, [dispatch, id])
  return (
    <RankingConentWrapper err={err}>
      {/* 飙升榜的top title */}
      <WYRankingTopTitle item={songListDetail} />
      {/* 歌曲数据 */}
      <WYSongListTitleCover
        showPlay={false}
        trackIds={songListDetail?.tracks?.length}
        playCount={songListDetail?.playCount}
      />
      <div className="songList">
        <WYSongListTable
          columns={columns}
          tracks={getSongData(songListDetail?.tracks)}
        />
      </div>
      <WYErrorCover />
    </RankingConentWrapper>
  )
})
