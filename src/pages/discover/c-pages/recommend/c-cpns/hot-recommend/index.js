import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import WYThemeHeaderRcm from '@/components/theme-header-rcm'
import WYSongsCover from 'components/songs-cover'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

import { HotrecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/acionCreators'
import { useHistory } from 'react-router-dom'

export default memo(function WYHotRecommend() {

  const {hotRecommend,err} = useSelector(state => ({
    hotRecommend: state.getIn(['recommend','hotRecommend']),
    err: state.getIn(['otherPages','err'])
  }),shallowEqual)
  const history = useHistory()
  useEffect(() => {
    if(err === 'ERR_NETWORK') {
      history.push({pathname:'/ERR_NETWORK'})
    }
  },[err,history])
  // 网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  },[dispatch])
  return (
    <HotrecommendWrapper>
        <WYThemeHeaderRcm title="热门推荐" 
                          keywords={['华语','流行','摇滚','民谣','电子']}
                          link="/discover/songs/全部" />
        <div className='recommend-list'>
          {
            hotRecommend?.map((item,index) => {
              return (
                <WYSongsCover key={item.id} info={item}></WYSongsCover>
              )
            })
          }
        </div>

    </HotrecommendWrapper>
  )
})

