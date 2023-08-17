import {
  getRadio,
  getUserEventList,
  getUserInfo,
  getUSerPlaylist,
  getUserSongs,
  getConcern
} from '../../../services/otherPages'
import * as actionType from './constans'

const changeUserInfoAction = (info) => ({
  type: actionType.USER_INFO,
  info
})
const changeUserSongsAction = (songs) => ({
  type: actionType.USER_SONGS,
  songs
})

export const changeShowLoadingAction = (loading) => ({
  type: actionType.USER_SONGS_LOADING,
  loading
})

const changeRadioAction = (radio) => ({
  type: actionType.USER_RADIO,
  radio
})
const changeNewSongList = (list) => ({
  type: actionType.USER_NEW_SONG_LIST,
  list
})
const changeCollectSongList = (list) => ({
  type: actionType.USER_COLLECT_SONG_LIST,
  list
})
// 登录 扫 二维码 的image 图片路径
export const changeLoginImageAction = (image) => ({
  type: actionType.USER_LOGIN_IMAGE,
  image
})
export const changeQRCodeAction = (QRCode) => ({
  type: actionType.USER_QRCODE,
  QRCode
})
// 登录 是否显示 登录 窗口 action
export const changeLoginShowAction = (data) => ({
  type: actionType.LOGIN_SHOW_WINDOW,
  data
})

const changeUserEventAction = (list) => ({
  type: actionType.USER_EVENT_LIST,
  list
})
// 关注
const changeUserFollows = (list) => ({
  type: actionType.USER_FOLLOWS_LIST,
  list
})
// 粉丝
const changeUserFansList = (list) => ({
  type: actionType.USER_FANS_LIST,
  list
})

const changeConcernAction = (six) => ({
  type: actionType.USER_CONCER_SIX,
  six
})

// user/home 用户的信息
export function getUserInfoAction(id) {
  return (dispatch) => {
    getUserInfo(id).then((res) => {
      console.log(res, 'userInfo')
      dispatch(changeUserInfoAction(res))
    })
  }
}
// 用户创建的电台
export function getRadioAction(uid) {
  return (dispatch) => {
    getRadio(uid).then((res) => {
      console.log(res, '创建电台')
      dispatch(changeRadioAction(res))
    })
  }
}
// changeShowErrorAction
// user/home页面的用户一周/所有听得歌曲 //1是一周 0是所有
export function getUserSongsAction(uid, type = 1) {
  return (dispatch) => {
    getUserSongs(uid, type).then((res) => {
      console.log(res, 'UserSongs')
      if (res.code === 'ERR_BAD_REQUEST') {
        dispatch(changeShowLoadingAction(false))
        dispatch(changeUserSongsAction(res.response.data))
        return
      }
      if (type === 1) {
        dispatch(changeShowLoadingAction(false))
        dispatch(changeUserSongsAction({ code: res.code, data: res.weekData }))
      } else {
        dispatch(changeShowLoadingAction(false))
        dispatch(changeUserSongsAction({ code: res.code, data: res.allData }))
      }
    })
  }
}
// getUSerPlaylist
// 用户创建的 歌单 和收藏的歌单 是一起的
export function getUSerPlaylistAction(uid, list) {
  return (dispatch, getState) => {
    if (!list) return
    getUSerPlaylist(uid).then((res) => {
      console.log(res, 'res歌单')
      if (res.code !== 200) return
      console.log(res.playlist.slice(0, list))
      console.log(res.playlist.slice(list))
      // 用户创建 歌单
      dispatch(changeNewSongList(res.playlist.slice(0, list)))
      // 用户收藏 歌单
      dispatch(changeCollectSongList(res.playlist.slice(list)))
    })
  }
}

// user/home 页面的 点击动态 关注 粉丝  /user/event?uid=122969642
export function getUserEventListAction(uid, limit = 30, lasttime) {
  return async (dispatch, getState) => {
    if (lasttime) {
      const arr = getState().getIn(['userHome', 'EventList'])
      const newArr = { ...arr }
      const res = await getUserEventList(uid, limit, lasttime)

      newArr.events.push(...res.events)
      newArr.lasttime = res.lasttime
      dispatch(changeUserEventAction(newArr))
      console.log(newArr, '加载更多')
    } else {
      const res = await getUserEventList(uid, limit)
      console.log(res)
      dispatch(changeUserEventAction(res))
    }
  }
}

// user/home 页面的 点击动态 里的 6个关注 /user/event?uid=122969642
export function getConcernAction(uid, limit = 30, offset) {
  return async (dispatch) => {
    const res = await getConcern(uid, limit, offset)
    console.log(res, '关注')
    if (!res) return
    dispatch(changeUserFollows(res))
  }
}
// export function getUserEventListArrAction(uid, limit = 30) {
//   return async (getState, dispatch) => {
//     const arr = getState().getIn(['userHome', 'EventList'])
//     console.log(arr)

//     // const res = await getUserEventList(uid, limit)
//   }
// }
