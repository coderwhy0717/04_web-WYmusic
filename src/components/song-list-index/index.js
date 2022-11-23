import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
import { SongListIndexWrapper } from './style'
// local-data里的播放每一个歌曲
export default memo(function WYSongListIndex(props) {
    const {changeSong = {},newShow = false}  = props
    const dispatch = useDispatch()
    const {currentSong} = useSelector(state => ({
        currentSong: state.getIn(['player','currentSong'])
    }),shallowEqual)

    function changePlayMusic(id) {
        // 播放单曲
        dispatch(getPlaySongDetailAction(id))
    }
    const showIcon = changeSong?.id === currentSong?.id
  return (
    <SongListIndexWrapper showIcon = {showIcon}>
        <span>{changeSong?.index}</span>
        {
            newShow ? <span className='new sprite_icon2'></span> : 
                    <span className={"table sprite_table "+(showIcon ? 'active' : '')} 
                    onClick={e => changePlayMusic(changeSong?.id)}></span>
        }
    </SongListIndexWrapper>
  )
})
