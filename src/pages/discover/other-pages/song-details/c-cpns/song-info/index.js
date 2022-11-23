import React, { memo, useCallback, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {getSizeImage} from '@/utils/format-utils'
import { Collapse} from 'antd'

import WYUserNameSort from 'components/user-name-sort'
import WYPlayBtn from 'components/play-btn'
import { SongInfoWrapper } from './style'


export default memo(function WYSongInfo(props) {
  const {info = [],pagesLyrics = []} = props
  const al = (info.al && info.al) || ''
  const alia = info.alia && info.alia[0]
  const tns = info.tns && info.tns[0]
  const { Panel } = Collapse
  // console.log(info)
  // console.log(pagesLyrics)

  const [title,setTitle] = useState('展示')
  const [isTebel,setIsTebel] = useState(0)
  const callback = useCallback((key) => {
      // console.log(key[0],"key")
      if(key[0]) {
        setIsTebel(1)
        setTitle('收起')
      }else {
        setIsTebel(0)
        setTitle('展示')
      }
  },[])
  const a = () => {
    return ( 
      pagesLyrics.slice(0,13).map((item,index) => {
        return (
            <div key={index}>{item.content}</div>
        )
      })
    )
  }

  return (
    <SongInfoWrapper isTebel={isTebel}>
       <div className='player-image'>
              <div className='image sprite_covor'>
                <img src={getSizeImage(al.picUrl,130)} alt=''></img>
              </div>
             <div className='link'>
                <span className='icon sprite_icon2'></span> 
                <a href='/#'>生成外链播放器</a>
             </div>
       </div>
          <div className='song-content'>
            <div className='top-header'>
              <div className='top-label sprite_icon2'></div>
              <div className='text'>
                <div className='name'>{info ? info.name :'未知标题'}
                  {info.mv ? <a href='/#'  className='mv sprite_icon2'>&nbsp;&nbsp;</a> : ''}
                </div>
                {
                  alia ? <div className='name-label'>{alia}</div> : 
                              <div className='name-label'>{tns}</div>
                }
              </div>
            </div>
            <div className='song-info'>
              <div className='info-name'>歌手：
                <WYUserNameSort artists={info.ar} />
              </div>
              <div className='album info-name'>所属专辑：
                  <NavLink to={`/discover/albumDetail/${al.id}`}>{al.name}</NavLink>
                  {
                    tns ? <span className='name-label'> - ({tns})</span> : ''
                  }
              </div>
              <WYPlayBtn tracksOrId={info.id} />
              <div className='lyric'>
              <Collapse bordered={false} destroyInactivePanel ghost={true} onChange={callback}>
                  <Panel className='top-panel'  collapsible="disabled" showArrow={false} header={a()} key="0"></Panel>
                  <Panel className='panel'  showArrow={false} header={
                    pagesLyrics.length > 13 ? <div>{title}<i className='tebel sprite_icon2'></i></div> : "" 
                  } key="1">
                    {
                      pagesLyrics.slice(13).map((item,index) => {
                        return (
                            <div key={index}>{item.content}</div>
                        )
                      })
                    }
                  </Panel>
              </Collapse>
                
              </div>
            </div>
            <div className='error'>
              <div className='err-a'>
                <a href='/#' >翻译歌词</a>
                <a href='/#' >报错</a>
              </div>
              <div className='err-b'>
                  <span>暂时没有翻译，<a href='/#' className='err-b-a'>求翻译</a></span>
              </div>
            </div>
          </div>
    </SongInfoWrapper>
  )
})
