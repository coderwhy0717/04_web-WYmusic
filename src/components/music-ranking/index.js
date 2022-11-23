import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../utils/format-utils'
import { MusicRankingWrapper } from './style'
import { getPlaySongDetailAction,getPlaySongListAction } from '../../pages/player/store/actionCreators'
import { useDispatch } from 'react-redux'
export default memo(function WYMusicRanking(props) {
  const { info = {},link = '' } = props
  const { tracks = [] } = info
  const dispatch = useDispatch()
  const playMusic = (item) => {
    dispatch(getPlaySongDetailAction(item.id))
  }
  const changePlayMusic = () => {
    dispatch(getPlaySongListAction(tracks))
  }

  return (
    <MusicRankingWrapper>
      <div className='top'>
        <div className='image'>
          <img  src={getSizeImage(info.coverImgUrl,80)} alt=""></img>
          <NavLink to={link} className='image_cover'></NavLink>
        </div>
        <div className='top-right'>
          <NavLink to={link}>{info.name}</NavLink>
          <div>
            <i className='aorrw play sprite_02' onClick={e => changePlayMusic()}></i>
            <i className='aorrw store sprite_02'></i>
          </div>
        </div>
      </div>
      <div className='list'>
        {
          tracks.slice(0,10).map((item,index) => {
            return (
              <div key={item.id} className="info">
                <div className='rank'>{index + 1}</div>
                <div className='item'>
                  <NavLink to={`/discover/playSong/${item.id}`} className='name text-nowrap'>{item.name}</NavLink>
                  <div className='btn'>
                    <button className='aorrw play sprite_02' onClick={e => playMusic(item)}></button>
                    <button className='aorrw play-store sprite_icon2'></button>
                    <button className='aorrw store sprite_02'></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
       <NavLink to={link}>查看全部 &gt;</NavLink>
      </div>
    </MusicRankingWrapper>
  )
})
