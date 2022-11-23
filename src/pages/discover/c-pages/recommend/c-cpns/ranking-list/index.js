import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RankingListWrapper } from './style'

import WYThemeHeaderRcm from 'components/theme-header-rcm'
import WYMusicRanking from 'components/music-ranking'

import { getRankingMusicAction } from '../../store/acionCreators'
export default memo(function WYRankingList() {

  const {topRanking,newRanking,originRanking} = useSelector(state => ({
      topRanking: state.getIn(['recommend','topRanking']),
      newRanking: state.getIn(['recommend','newRanking']),
      originRanking: state.getIn(['recommend','originRanking'])

  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankingMusicAction())
  },[dispatch])
  return (
    <RankingListWrapper>
      <WYThemeHeaderRcm title="榜单"
                        link="/discover/ranking"/>
      <div className='bilst '>
        <WYMusicRanking info={topRanking} link="/discover/ranking"/>
        <WYMusicRanking info={newRanking} link="/discover/ranking/3779629"/>
        <WYMusicRanking info={originRanking} link="/discover/ranking/2884035"/>
      </div>
    </RankingListWrapper>
  )
})

