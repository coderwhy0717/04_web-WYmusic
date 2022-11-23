import React, { memo, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getSongsAction,getCatlistAction} from '../../other-pages/store/actionSongs'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'
import WYSongsTitleCover from 'components/songs-title-cover'
import WYSongsCover from 'components/songs-cover'
import WYErrorCover from '../../../error-cover'
import { SongSWrapper } from './style'
import { useHistory } from 'react-router-dom'
export default memo(function WYSongs() {
  const {cat} = useParams()
  const [offsets,setOffsets] = useState(0)
  const [hot] = useState('hot')
  const [showZ,isShowZ] = useState(false)
  // 从其他other-pages页面中获取请求的数据
  const {songs,err,catlist} = useSelector(state => ({
    songs: state.getIn(['otherPages','songs']),
    catlist: state.getIn(['otherPages','catlist']),
    err: state.getIn(['otherPages','err'])
  }),shallowEqual)
  const history =  useHistory()
  useEffect(() => {
    if(err === 'ERR_NETWORK') {
      history.push({pathname:'/ERR_NETWORK'})
    }
  },[err,history])
  const songsplay = songs?.playlists 
  const dispatch = useDispatch()
  // 网络请求
  useEffect(() => {
    // cat = '全部',offset = 0,order = 'hot',limit = 35
    console.log(cat,"cat")
    dispatch(getSongsAction(cat,offsets,hot))
  },[dispatch,cat,hot,offsets])
  // 获取all
  useEffect(() => {
    dispatch(getCatlistAction())
  },[dispatch])
  // 第三方组件事件
  const changePage = useCallback((current,size) => {
    setOffsets(current-1)
  },[setOffsets])
  // 子组件的事件
  const onchangeShow = useCallback((off) => {
      setOffsets(off)
  },[])
  // 遮罩层
  const changeCover = (show) => {
    console.log(show,"show")
    isShowZ(show)
  }
  return (
    <SongSWrapper className="wrap-v2" showZ={showZ} err={err}>
      <div className='div'>
          <WYSongsTitleCover  title = {cat}
                              catlist = {catlist}
                              onchangeShow ={onchangeShow} 
                              changeCover = {changeCover}
                              showZ={showZ} />
        <div className='conent'>
            {
                songsplay?.map(item => {
                  return (
                    <WYSongsCover key={item.id} info = {item} types={false}/>
                  )
                })
            }
        </div>
        <div className='pagin'>
            <Pagination current={offsets+1} 
                        total={songs?.total} 
                        defaultPageSize={35}
                        showSizeChanger={false}
                        onChange={changePage} />
        </div>
          {/* 遮罩层 */}
          <div className='allcover' onClick={e => changeCover(false)} />
      </div>
      <WYErrorCover />
    </SongSWrapper>
  )
})
