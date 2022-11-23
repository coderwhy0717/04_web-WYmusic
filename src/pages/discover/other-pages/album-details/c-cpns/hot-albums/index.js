import React, { memo } from 'react'

import {getSizeImage,formatYearMonthDay} from '@/utils/format-utils'
import {HotAlbumsWrapper} from './style'
import { NavLink } from 'react-router-dom'
export default memo(function WYHotAlbums(props) {
    const {hotAlbumList} = props
  return (
    <HotAlbumsWrapper>
       {
          hotAlbumList.map((item,index) => {
              return (
              <div key={item.id} className='item'>
                <NavLink to={`/discover/albumDetail/${item.id}`}>
                  <img src={getSizeImage(item.picUrl,50)} alt=''></img>
                </NavLink>
                  <div className='content'>
                      <div className='title text-nowrap'>
                        <NavLink to={`/discover/albumDetail/${item.id}`}>{item.name}</NavLink>
                      </div>
                      <div className='by'>
                        {
                          formatYearMonthDay(item.publishTime) 
                        }
                      </div>
                  </div>
              </div>
              )
          })
      }
    </HotAlbumsWrapper>
  )
})
