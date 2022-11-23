import React, { memo, useEffect, useState,Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {SongsTitleCoverWrapper,TtitleWrapper} from './style'
export default memo(function WYSongsTitleCover(props) {
  const {title = "全部",onchangeShow,changeCover,showZ ,catlist = {}} = props
  const [isShow,setIsShow] = useState(false)

  const sub = catlist?.sub
  const categories = catlist?.categories
  useEffect(() => {
    setIsShow(showZ)
  },[showZ])
  // 点击选择分类显示影藏
  const changeShow = () => {
    changeCover(!isShow)

    setIsShow(!isShow)
  }
  // 点击内部事件
  const changeAll = () => {
    onchangeShow('全部',0)
    setIsShow(false)
    changeCover(false)
  }
  // 点击每个小的
  const changeItemTitle = title => {
    onchangeShow(0)
    setIsShow(false)
    changeCover(false)
  }
  return (
    <SongsTitleCoverWrapper isShow = {isShow}> 
        <div className='left'>
            <span className='all'>{title}</span>
            <div className='btn'>
             <div className='btns' onClick={e => changeShow()}> 
                选择分类
                <i className='icon sprite_icon2'></i>
              </div>
              <div className='info'>
                <div className='iconw sprite_icon' />
                <div className='info-top'>
                    <button onClick={e => changeAll()}>
                      <NavLink to='/discover/songs/全部'>
                        全部风格
                      </NavLink>
                    </button>
                </div>
                <div className='info-conent'>
                    <div className='xian'></div>
                    {
                     categories ? [0,1,2,3,4].map((item,index) => {
                        return (
                          <div key={item} className='type0'>
                            <TtitleWrapper index={index}>
                                <span className='icona sprite_icon2'></span>
                                <span className='namea'>{categories[index]}</span>
                            </TtitleWrapper>
                            <div className='conentt' >
                              {
                                sub?.map(iten => {
                                  return (
                                    <Fragment key={iten.name} >
                                      {
                                        iten.category === item ? <span className='namesa'>
                                          <NavLink className='textd' to={`${iten.name}`} onClick={e => changeItemTitle()}>{iten.name}</NavLink>
                                          {/* <i  ></i> */}
                                          <i className='iss'></i>
                                        </span> : <Fragment></Fragment>
                                      }
                                    </Fragment>
                                  )
                                })
                              }
                            </div>
                        </div>
                        )
                      }) : ''
                    }
                   
                    
                </div>
              </div>
            </div>
        </div>
        <div className='right sprite_btn2'><a href='/#'>热门</a></div>
    </SongsTitleCoverWrapper>
  )
})
