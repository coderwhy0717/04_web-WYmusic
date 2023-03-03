import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import WYLabelCover from '@/components/label-cover'
import { SimilarSongWrapper } from './style'
import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
export default memo(function WYSimilarSong(props) {
  const { similarSong = [] } = props
  const dispatch = useDispatch()
  const playMusic = (id) => {
    dispatch(getPlaySongDetailAction(id))
  }
  return (
    <SimilarSongWrapper>
      <WYLabelCover title="相似歌曲" />
      {similarSong.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <div className="left text-nowrap">
              <NavLink className="title " to={`/discover/playSong/${item.id}`}>
                {item.name}
              </NavLink>
              <div className="name text-nowrap">
                {item.artists.map((iten, inden) => {
                  return (
                    <span className="artists" key={iten.id}>
                      <NavLink to={`/discover/artist/${iten.id}`}>
                        {iten.name}
                      </NavLink>
                      {item.artists.length > 1 ? <span>/</span> : ''}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="right">
              <button
                className="play sprite_titleicon2"
                onClick={(e) => playMusic(item.id)}
              >
                {' '}
              </button>
              <button className="join sprite_titleicon2"> </button>
            </div>
          </div>
        )
      })}
    </SimilarSongWrapper>
  )
})
