import React, { memo,Suspense, useEffect, useRef } from 'react'

import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {discoverNum} from '@/common/local.data'
// import { useParams } from 'react-router-dom';
// 发现页面
export default memo(function WYPageDiscover(props) {
  const {route} = props
  // const { id } = useParams();

  return (
    <DiscoverWrapper>
      <div className='tup'>
        <TopMenu className='wrap-v1'>
          {
            discoverNum.map((item,index) => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <Suspense fallback={<div>page loading</div>}>
      {renderRoutes(route.routes)}
      </Suspense>
    </DiscoverWrapper>
  )
})
