import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {Carousel} from 'antd'

import {BannerWrapper,
        BannerLeft,
        BannerRight,
        BannerControl } from './style'
import { getTopBannersAction } from '../../store/acionCreators'

const TopBanner = memo(() => {
    // state
    const [currentIndex, setcurrentIndex] = useState(0)

    // Ref
    const bannerRef = useRef()
    // redux数据获取
    const {banners} = useSelector(state => ({
        banners: state.getIn(['recommend','topBanner'])
    }),shallowEqual)

    // 网络请求
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopBannersAction())
    },[dispatch])
    // 其他hooks
    const bannerChange = useCallback((from,to) => {
        setcurrentIndex(to)
    },[])
    // 其他业务逻辑 热门推荐
    const bgImage = banners[currentIndex] && (`${banners[currentIndex]?.imageUrl}?imageView&blur=40x20`)
  return (
    <BannerWrapper bgImage={bgImage}>
        <div className='banner wrap-v2'>
            <BannerLeft>
            <Carousel effect="fade" easing autoplay  ref={bannerRef} beforeChange={bannerChange}>
               {
                   banners.map((item,index) => {
                       return (
                           <div className='banner-item' key={item.imageUrl}>
                               <img className='image' src={item.imageUrl} alt={item.typeTitle}></img>
                           </div>
                       )
                   })
               }
            </Carousel>
            </BannerLeft>
            <BannerRight>
                <a href="https://music.163.com/#/download" target="_blank" rel="noopener noreferrer" className='hover download_01'>下载客户端</a>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </BannerRight>
            <BannerControl>
                <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                <button className="btn right" onClick={e => bannerRef.current.next()}></button>
            </BannerControl>
          
        </div>
    </BannerWrapper>
  )
})

export default TopBanner