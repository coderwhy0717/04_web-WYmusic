import {
  getArtistDetail,
  getArtistAlbum,
  getArtistMv,
  getArtistText,
  getArtistSimi
} from '../../../../services/otherPages'
import { changeShowErrorAction } from './actionCreators'
import * as actionType from './constans'

const changeArtist = (obj) => ({
  type: actionType.ARTIST_DETAIL,
  obj
})

const changeAlbum = (obj) => ({
  type: actionType.ARTIST_ALBUM,
  obj
})
const changeMv = (obj) => ({
  type: actionType.ARTIST_MV,
  obj
})
const changeArtistText = (obj) => ({
  type: actionType.ARTIST_TEXT,
  obj
})
const changeSimi = (obj) => ({
  type: actionType.ARTIST_SIMI,
  obj
})

export function getArtistDetailAction(id) {
  return (dispatch) => {
    // dispatch(changeShowErrorAction(false))
    dispatch(changeShowErrorAction(false))

    getArtistDetail(id).then((res) => {
      // console.log(res, 'res')
      dispatch(changeArtist(res))
      dispatch(changeShowErrorAction(true))
    })
  }
}
export function getArtistAlbumAction(id, limit = 12, offset = 0) {
  return (dispatch) => {
    getArtistAlbum(id, limit, offset).then((res) => {
      console.log(res, 'album')
      dispatch(changeAlbum(res))
    })
  }
}
export function getArtistMvAction(id, offset = 0, limit = 12) {
  return (dispatch) => {
    getArtistMv(id, offset, limit).then((res) => {
      console.log(res, 'Mv')
      dispatch(changeMv(res.mvs))
    })
  }
}

export function getArtistTextAction(id) {
  return (dispatch) => {
    getArtistText(id).then((res) => {
      console.log(res, 'info')
      dispatch(changeArtistText(res))
    })
  }
}

export function getArtistSimiAction(id) {
  return (dispatch) => {
    getArtistSimi(id).then((res) => {
      console.log(res, 'simi')
    })
  }
}
