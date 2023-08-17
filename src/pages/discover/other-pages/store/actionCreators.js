import * as actionType from './constans'
import {
  getAlbumDetail,
  getSongDetail,
  getSimiarSong,
  getRelatedPlayList,
  getSongListDetail,
  getUserInfo,
  getHotAlbums
} from '@/services/otherPages'
import { getLyricsAction } from '../../../player/store/actionCreators'
// 歌曲
const changeSongDetailAction = (songDetail) => ({
  type: actionType.CHANGE_SONG_DETAILS,
  songDetail
})

const changeSimiarSongAction = (simiarSong) => ({
  type: actionType.CHANGE_SIMIAR_SONG,
  simiarSong
})
// 歌单
const changeSongListDetailAction = (songListDetail) => ({
  type: actionType.CHANGE_SONG_LIST_DETAIL,
  songListDetail
})
// 相关歌单
const changeRelatedPlayListAction = (related) => ({
  type: actionType.CHANGE_RELATED_PLAY_LIAT,
  related
})
//
const changeUserInfoAction = (list) => ({
  type: actionType.CHANGE_USER_INFO,
  list
})
const changeSongListUserInfoAction = (userInfo) => ({
  type: actionType.CHANGE_SONG_LIST_USER_INFO,
  userInfo
})
// 专辑
const changeCurrentAlbumDetailAction = (albumDetail) => ({
  type: actionType.CHANGE_ALBUM_DETAIL,
  albumDetail
})
//
const changeHotAlbumList = (list) => ({
  type: actionType.CHANGE_HOT_ALBUM_LIST,
  list
})
//网络请求页面的显示隐藏
export const changeShowErrorAction = (err) => ({
  type: actionType.CHANGE_ERROR,
  err
})
// 歌曲详情
export function getSongDetailAction(ids) {
  return (dispatch, getState) => {
    dispatch(changeShowErrorAction(false))
    const id = ids * 1
    // console.log(id,"action里")
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex((song) => song.id === id)
    if (songIndex !== -1) {
      //有
      const songDetail = playList[songIndex]
      dispatch(changeShowErrorAction(true))
      dispatch(changeSongDetailAction(songDetail))
      // 获取歌词
      dispatch(getLyricsAction(songDetail.id, false))
    } else {
      //没有

      getSongDetail(ids).then((res) => {
        if (res.code === 'ERR_NETWORK') {
          dispatch(changeShowErrorAction('ERR_NETWORK'))
          return
        }
        console.log(res, '歌曲详情')
        const songDetail = res?.songs[0]
        if (!songDetail) return
        dispatch(changeShowErrorAction(true))
        dispatch(changeSongDetailAction(songDetail))
        // 获取歌词
        dispatch(getLyricsAction(ids, false))
      })
    }
  }
}

export function getSimiarSongAction(id) {
  return (dispatch) => {
    getSimiarSong(id).then((res) => {
      // console.log(res,"simi")
      dispatch(changeSimiarSongAction(res.songs))
    })
  }
}
// 歌单详情
export function getSongListDetailAction(id) {
  return async (dispatch) => {
    dispatch(changeShowErrorAction(false))
    const res = await getSongListDetail(id)
    // console.log(res, 'res')

    const songListDetail = res.playlist
    if (res.code === 'ERR_NETWORK') {
      dispatch(changeShowErrorAction('ERR_NETWORK'))
      return
    }
    if (!songListDetail) return

    dispatch(changeShowErrorAction(true))
    // console.log(songListDetail)
    dispatch(getSongListUserInfoAction(songListDetail.creator.userId))
    dispatch(changeSongListDetailAction(songListDetail))

    return songListDetail
  }
}
// 相关歌单
export function getRelatedPlayListAction(id) {
  return (dispatch) => {
    getRelatedPlayList(id).then((res) => {
      const related = res.playlists
      if (!related) return
      // console.log(related)
      dispatch(changeRelatedPlayListAction(related))
      // 获取歌单用户信息icon
      // 获取相关歌单用户信息为了获取icon
      const list = []
      for (let item of related) {
        list.push(item.creator.userId)
      }
      //
      dispatch(getUserInfoAction(list))
    })
  }
}
// 获取相关歌单用户信息为了获取icon
export function getUserInfoAction(ids) {
  return (dispatch, getState) => {
    const userInfo = getState().getIn(['otherPages', 'userInfo'])

    // console.log(ids,"id")
    let list = []
    const userlist = []

    for (let item of userInfo) {
      userlist.push(item?.userPoint?.userId)
    }
    for (let i = 0; i < ids.length; i++) {
      const isshow = userlist.findIndex((id) => id === ids[i] * 1)
      //    console.log(userlist,"userlist")
      //    console.log(isshow,"isshow")
      if (isshow !== -1) continue
      // console.log("aaaaaa")

      getUserInfo(ids[i]).then((res) => {
        list.push(res)
        //    console.log(typeof list.length )
        if (list.length === 5) {
          dispatch(changeUserInfoAction(list))
        }
      })
    }
  }
}
// 获取歌单用户信息icon
export function getSongListUserInfoAction(id) {
  return (dispatch, getState) => {
    const userInfo = getState().getIn(['otherPages', 'songListDetail'])
    if (id === userInfo.userId) return
    getUserInfo(id).then((res) => {
      dispatch(changeSongListUserInfoAction(res))
    })
  }
}
// 专辑页面
export function getCurrentAlbumDetailAction(id) {
  return async (dispatch) => {
    dispatch(changeShowErrorAction(false))
    //
    console.log(id, '专辑id')

    const res = await getAlbumDetail(id)
    if (res.code === 'ERR_NETWORK') {
      dispatch(changeShowErrorAction('ERR_NETWORK'))
      return
    }
    if (!res) return
    console.log(res, 'resss')

    dispatch(changeShowErrorAction(true))
    dispatch(changeCurrentAlbumDetailAction(res))
    return res
  }
}
// ta的热门专辑
export function getHotAlbumsAction(id) {
  return (dispatch) => {
    getHotAlbums(id).then((res) => {
      // console.log(res,"ta的热门专辑")
      if (!res.hotAlbums) return
      dispatch(changeHotAlbumList(res.hotAlbums))
    })
  }
}
