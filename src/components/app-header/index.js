import React, { memo } from 'react'

import { headerLinks } from '@/common/local.data'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import SearchCpn from '../search-cpn'

// import axios from 'axios'

export default memo(function WYAppHeader() {
  // useEffect(() =>{
  //   console.log("first")
  //   axios.request({
  //     url:'http://123.207.32.32:9001/banner',
  //     method:"get",

  //   }).then(res => {
  //     console.log(res)
  //   })
  // },[])
  // 页面代码

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1 ">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          {/* 封装的搜索 组件 */}
          <SearchCpn />

          <div className="creation">创作者中心</div>
          <div className="login">
            <NavLink to={'/login'}>登录</NavLink>
          </div>
        </HeaderRight>
      </div>
      {/* 推荐 排行榜 歌单 主播电台 .... 的红色背景 */}
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
