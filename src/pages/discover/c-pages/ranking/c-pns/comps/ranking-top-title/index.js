import React, { memo } from 'react'
import { RankingTopTitleWrapper } from './style'
import WYPlayBtn from 'components/play-btn'
import { getSizeImage,formatMonthDay } from '@/utils/format-utils'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function WYRankingTopTitle(props) {
    const {item ={} } = props
    // songListTitle cover数据
    // item歌曲数据
    const {songListTitle} = useSelector(state => ({
        songListTitle: state.getIn(['ranking','songListTitle'])
    }),shallowEqual)
  return (
    <RankingTopTitleWrapper>
        <div className='image'>
            <img src={getSizeImage(songListTitle.coverImgUrl,150)} alt=''></img>
            <div className='cover sprite_covor'></div>
        </div>
        <div className='right'>
            <div className='title-top'>
                <div className='title'>{songListTitle.name}</div>
                <div className='time'>
                  <span className='spana sprite_icon2'></span>  最近更新：{formatMonthDay(songListTitle.trackNumberUpdateTime)} <span className='update'>（{songListTitle.updateFrequency}）</span>
                </div>
            </div>
            <WYPlayBtn  
                        collect={`(${item.subscribedCount})`}
                        share={`(${item.shareCount})`}
                        comment={item.commentCount}
                        tracksOrId = {item.tracks} />
        </div>
    </RankingTopTitleWrapper>
  )
})
