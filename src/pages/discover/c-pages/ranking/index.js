import React, { memo, useEffect } from 'react'
import FeaturesRanking from './c-pns/features-ranking'
import { LeftLink, RankingWrapper, RightConent } from './style'
import WYRankingConent from './c-pns/ranking-conent'

import { useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getAllSongListAction} from './store/actionCreators'
import { useHistory } from 'react-router-dom';
export default memo(function WYRanking(props) {
  const {id} = useParams()
  useEffect(() => {
      console.log(id)
  },[id])
  // 获取数据
  const {allSongList,err} = useSelector(state => ({
    allSongList: state.getIn(['ranking','allSongList']),
    err: state.getIn(['otherPages','err'])
  }),shallowEqual)
 const allThree = allSongList.slice(0,4)
 const all = allSongList.slice(4)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSongListAction(id))
  },[dispatch,id])
  const history = useHistory()
  useEffect(() => {
    if(err === 'ERR_NETWORK') {
      history.push({pathname:'/ERR_NETWORK'})
    }
  },[err,history])
  return (
    <RankingWrapper>
      <div className='conent wrap-v2'>
        <LeftLink>
          <FeaturesRanking allSongList = {allThree} />
          <FeaturesRanking allSongList = {all} title='全球媒体榜'/>
        </LeftLink>
        <RightConent>
          <WYRankingConent />
        </RightConent>
      </div>
    </RankingWrapper>
  )
})
