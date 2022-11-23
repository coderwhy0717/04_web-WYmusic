// import React, { memo, useEffect } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { getPlaySongDetailAction } from '@/pages/player/store/actionCreators'
// // local-data里的播放每一个歌曲
// export default memo(function WYSongListPlay(props) {
//     const {changeSong = {}}  = props
//     const dispatch = useDispatch()
//     const {currentSong} = useSelector(state => ({
//         currentSong: state.getIn(['player','currentSong'])
//     }),shallowEqual)
//     useEffect(() => {
//         console.log(currentSong?.id,"ac")
//         console.log(changeSong,"acb")
//     },[currentSong,changeSong])
//     function changePlayMusic(id) {
//         dispatch(getPlaySongDetailAction(id))
//     }
//   return (
//     <div className="sortIndex">
//     <span>{changeSong?.index}</span>
//     <span className={"table sprite_table "+(changeSong.id === currentSong.id ? 'active' : '')} onClick={e => changePlayMusic(changeSong?.id)}></span>
//   </div>
//   )
// })
