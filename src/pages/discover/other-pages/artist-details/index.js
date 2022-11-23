import React, { memo } from 'react'
import {ArtistDetailWrapper} from './style'
export default memo(function WYCurrentArtist() {
  return (
    <ArtistDetailWrapper className='wrap-v2'>
      <div className='user-info'>
        <div className='image-div'>
          <img className='image' src='http://p1.music.126.net/rJ5TaAKG2FqXEA5ipPelew==/109951166673772150.jpg?param=180y180' alt='' />
        </div>
        <div className='user-title'>
          <div className='title'>
            <span className='name'>冬瓜公主_ts</span>
            <img src='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872333/eb74/6e09/3b0f/fd6e21661e1d32e1c52658173ffd42b6.png?param=94x32' alt='' />

            <span className='Lv'>LV.5</span>
            <button className='btn btna'>
              <span className=''></span>
              发私信
            </button>
            <button className='btn btnb'>
              <span>+</span>
              关注
            </button>
          </div>
        </div>
      </div>
    </ArtistDetailWrapper>
  )
})
