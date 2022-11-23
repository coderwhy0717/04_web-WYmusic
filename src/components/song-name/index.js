import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
import { getSizeImage} from '@/utils/format-utils'
import { SongNameWrapper } from './style'
export default memo(function WYSongName(props) {
    const {item = {},showname = false  } = props
    const {currentSong} = useSelector(state =>({
      currentSong: state.getIn(['player','currentSong'])
    }),shallowEqual)
    const dispatch = useDispatch()
    const changePlayMusic = (id) => {
      dispatch(getPlaySongDetailAction(id))
    }
    const showIcon = item?.id === currentSong?.id
  return (
    <SongNameWrapper showname= {showname} showIcon = {showIcon}>
            {
              [0,1,2].map(iten => {
                return (
                    <div key={iten}>
                      {item.three === iten  ? 
                      <div className='images'>
                        <NavLink to={`/discover/playSong/${item.id}`} ></NavLink>
                        <img className='image' src={getSizeImage(item.al.picUrl,50)} alt="" />
                      </div> : ''}
                    </div>
                )
              })
            }
             <span className="item text-nowrap">
               {/* 播放 icon */}
                {
                 showname ? <span className={"table sprite_table "+(showIcon ? 'active' : '')} 
                  onClick={e => changePlayMusic(item?.id)}></span> : ''
                }
                {/* name */}
                <NavLink to={`/discover/playSong/${item.id}`}> {item.name} </NavLink>
                  {
                  item.alia[0] ? <span>- ({item.alia[0]})</span> : ''
                  }
                  {
                   item.al?.tns && item.al?.tns[0] ? <span>- ({item.al?.tns[0]})</span> : ''
                  }
                  {
                    item.tns ? <span>- ({item.tns[0]})</span> : ''
                  }
             </span>
             {
                item.mv ? <button className="mv sprite_table"></button> : ''
              }
    </SongNameWrapper>
  )
})
