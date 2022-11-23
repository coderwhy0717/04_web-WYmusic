import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {getSizeImage} from '@/utils/format-utils'
import { FeaturesRankingWrapper } from './style'
export default memo(function FeaturesRanking(props) {
  const {allSongList = [] ,title = '云音乐特色榜' } = props
  return (
    <FeaturesRankingWrapper>
      <div className='title'>{title}</div>
        {
            allSongList?.map((item) => {
              return (
                <div  key={item.id}  className='item'>
                  <NavLink to={`/discover/ranking/${item.id}`} >
                    <img src={getSizeImage(item.coverImgUrl,40)} alt='' />
                    <div className='right'>
                      <div className='titleb text-nowrap'>{item.name}</div>
                      <div className='text-nowrap'>{item.updateFrequency}</div>
                    </div>
                  </NavLink>
                </div>
              )
            })
          }
    </FeaturesRankingWrapper>
  )
})
