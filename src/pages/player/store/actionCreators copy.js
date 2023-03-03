import { getPlaySongDetail, ifCheckMusic } from '../../../services/player'
import * as actionType from './constants'

const changePlaySongDetailAction = (songs) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  songs
})
const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList
})
export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})
export const changeSequenceAction = (sequence) => ({
  type: actionType.CHANGE_SEQUENCE,
  sequence
})

export const changePlayNextSongAndSequenceAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence'])
    const playList = getState().getIn(['player', 'playList'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    switch (sequence) {
      case 1:
        let songIndex = Math.floor(Math.random() * playList.length)
        if (songIndex === currentSongIndex) {
          songIndex = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = songIndex
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex > playList.length - 1) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
    }
    const song = playList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changePlaySongDetailAction(song))
  }
}

export function getPlaySongDetailAction(ids) {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const songIndex = playList.findIndex((song) => song.id === ids)
    let index = currentSongIndex + 1

    if (songIndex !== -1) {
      //有歌曲

      const currentSong = playList[songIndex]
      const newPlayList = [...playList]
      newPlayList.splice(songIndex, 1)
      if (songIndex > currentSongIndex) {
        newPlayList.splice(index, 0, currentSong)
        dispatch(changeCurrentSongIndexAction(index))
      } else {
        newPlayList.splice(currentSongIndex, 0, currentSong)
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
      }
      dispatch(changePlayListAction(newPlayList))
      dispatch(changePlaySongDetailAction(currentSong))
    } else {
      //没有歌曲
      getPlaySongDetail(ids).then((res) => {
        console.log(res, 'resssss')

        const song = res.songs && res.songs[0]
        if (!song) return
        const newPlayeList = [...playList]
        newPlayeList.splice(index, 0, song)
        dispatch(changePlayListAction(newPlayeList))
        dispatch(changeCurrentSongIndexAction(index))
        dispatch(changePlaySongDetailAction(song))
      })
    }
  }
}
