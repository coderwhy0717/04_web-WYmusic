import React, { memo } from 'react'

import { HotAnchorWrapper } from './style'

import {hotRadios} from '@/common/local.data'
import {getSizeImage} from '@/utils/format-utils'
export default memo(function WYHotAnchor() {
  return (
    <HotAnchorWrapper>
        <h3 className='top-title'> 
              <span>热门主播</span>
        </h3>
        <div className='artists'>
          {
            hotRadios.map((item,index) => {
              return (
                <div className='item' key={item.picUrl}>
                    <img src={getSizeImage(item.picUrl,40)} alt={item.name}></img>
                    <div className='right'>
                      <a href={item.url} className='title text-nowrap'>{item.name}</a>
                      <div className='name text-nowrap'>{item.position}</div>
                    </div>
                </div>
              )
            })
          }
        </div>
       
    </HotAnchorWrapper>
  )
})
