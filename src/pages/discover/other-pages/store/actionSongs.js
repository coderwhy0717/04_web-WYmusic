import * as actionType from './constans'

import { getSongs, getCatlist } from '@/services/recommend'
import { changeShowErrorAction } from './actionCreators'
// 全部歌单网络请求 不是其他页面的请求

const changeSongsAction = (playlists) => ({
  type: actionType.CHANGE_SONGS,
  playlists
})

const changeCatlistAction = (list) => ({
  type: actionType.CHANGE_CATLIST,
  list
})

export function getSongsAction(all, offsets, hot, limit = 35) {
  //cat = '全部',offset = 0,order = 'hot',limit = 35
  return (dispatch) => {
    getSongs(all, offsets, hot, limit).then((res) => {
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      console.log(res, 'res')
      if (!res.playlists) return
      dispatch(changeSongsAction(res))
    })
  }
}

export function getCatlistAction() {
  return (dispatch) => {
    getCatlist().then((res) => {
      // console.log(res)
      if (!res) return
      dispatch(changeCatlistAction(res))
    })
  }
}
