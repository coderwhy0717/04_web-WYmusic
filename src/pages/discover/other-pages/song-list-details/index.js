import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongListDetailAction,getRelatedPlayListAction} from '../store/actionCreators'

import WYLabelCover from 'components/label-cover'

import WYSongListTitleCover from 'components/song-list-title-cover'
import WYPlayBtn from 'components/play-btn'
import WYSongListTable from 'components/song-list-table'
import WYComment from '../components/comment'
import WYSimilarSongList from '../components/similar-songlist'
import WYDownloadApp from '../components/download-app'
import WYErrorCover from '../../../error-cover'

import {columns,getSongdetailCover} from '../components/song-type/local-data'

import { SongListDetailsWrapper,
         SongListLeft,
         SongListRight } from './style'
import { getSizeImage,
         getdescription,
         subscribedCount,
         formatYearMonthDay } from '@/utils/format-utils'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
export default memo(function WYSongListDetails(props) {
  const id = props.match.params.id
  const [isShowText,setIsShowText] = useState(false)

  const {sld,related,userinfo,songListUserInfo,err} = useSelector(state => ({
    sld: state.getIn(['otherPages','songListDetail']),
    related: state.getIn(['otherPages','relatedPlayList']),
    userinfo: state.getIn(['otherPages','userInfo']),
    songListUserInfo: state.getIn(['otherPages','songListUserInfo']),
    err: state.getIn(['otherPages','err'])
  }),shallowEqual)
 

  const avatarUrl = sld.creator && sld.creator.avatarUrl
  const nickname =  sld.creator && sld.creator.nickname
  const infoCion = songListUserInfo.identify && songListUserInfo.identify.imageUrl
  // 喜欢这个歌单的用户
  const subs = sld.subscribers ?? []
  const tracks = sld.tracks ?? []
  // console.log(subs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongListDetailAction(id))
    dispatch(getRelatedPlayListAction(id))
  },[dispatch,id])
  const history = useHistory()
  useEffect(() => {
    if(err === 'ERR_NETWORK') {
      history.push({pathname:'/ERR_NETWORK'})
    }
  },[err,history])
   const changeIsShow = () => {
    setIsShowText(!isShowText)
  }

  return (
    <SongListDetailsWrapper className='wrap-v2' err= {err} >
          <SongListLeft err= {err} isShowText={isShowText} highQuality={sld.highQuality}>
        <div className='info-top'>
            <div className='image'>
                <img src={getSizeImage(sld.coverImgUrl,200)} alt='' />
                <div className='cover sprite_covor'></div>
                <i className={sld.highQuality ? 'crown sprite_titleicon2' : ''}></i>
            </div>
            <div className='info'>
                <div className='info-title'>
                  <div className={`icon ${sld.highQuality ? 'sprite_titleicon2' :'sprite_icon2'}`}></div>
                  <div className='title'>{sld.name}</div>
                </div>
                <div className='user-detail'>
                    <NavLink to={`/discover/artistDetail/${sld.userId}`}><img src={avatarUrl} alt='' /></NavLink>
                    <NavLink to={`/discover/artistDetail/${sld.userId}`}>{nickname}</NavLink>
                    {
                      infoCion ? 
                      <img className='user-icon' src={getSizeImage(infoCion,13)} alt='' /> : ''
                    }
                    
                    <div className='create'>{formatYearMonthDay(sld.createTime)} 创建</div>
                </div>
                <WYPlayBtn  tracksOrId={sld.tracks} 
                            collect={`(${subscribedCount(sld.subscribedCount)})`} 
                            share={`(${subscribedCount(sld.shareCount)})`} 
                            comment={subscribedCount(sld.commentCount)}/>
                <div className='label'> 
                  标签：
                  <div className='btns'>
                    {
                      sld.tags ? sld.tags.map((item,index) => {
                        return (
                          <button key={index}>{item}</button>
                        )
                      }):''
                    }
                  </div>
                </div>
                <div className='text'>
                  {
                    getdescription(sld.description) ? getdescription(sld.description).slice(0,5).map((item,index) => {
                      return (
                        <p key={index}>
                          {
                            item === '' ? <br /> : <i>{index === 0 ? <span>介绍：</span>: '' } {item}</i>
                          }
                        </p>
                      )
                    }):''
                  }
                  {
                    isShowText ? getdescription(sld.description) ? getdescription(sld.description).slice(5).map((item,index) => {
                      return (
                        <div key={index}>
                          {
                            item === '' ? <br /> : <i> {item}</i>
                          }
                        </div>
                      )
                    }):'': '' 
                  }
                  {
                   getdescription(sld.description) ?getdescription(sld.description).length > 5 ? <div className='show' onClick={e => changeIsShow()}>
                    {isShowText?'收起':'展示'}
                    <i className='icon sprite_icon2'></i>
                </div>: '':''
                  }
                </div>
            </div>
        </div>
        <WYSongListTitleCover trackIds={sld?.trackIds?.length}
                         playCount={sld?.playCount}  />
      <WYSongListTable columns={columns} tracks={getSongdetailCover(tracks)} />
     <div className='playList-footer'>
       <div className='text'>查看更多内容，请下载客户端</div>
       <button className="download">立即下载</button>
     </div>

     <WYComment />

          </SongListLeft> 
           <SongListRight err= {err}>
       <div className='like-songList'>
         <WYLabelCover title='喜欢这个歌单的人'/>
         <div className='user-img'>
           {
             subs.map(item => {
               return (
                 <NavLink to={`/discover/artistDetail/${item.userId}`} key={item.userId}>
                   <img className='image' src={getSizeImage(item.avatarUrl,40)} alt='' />  
                 </NavLink>
               )
             })
           }
         </div>
       </div>
       <WYSimilarSongList  songList={related} userInfo={userinfo}/>
       <WYDownloadApp title="网易云音乐多端下载" />
          </SongListRight>
            <WYErrorCover />
    </SongListDetailsWrapper>
  )
})
