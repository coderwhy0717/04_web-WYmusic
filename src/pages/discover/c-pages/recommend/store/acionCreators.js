import * as actionTypes from './constans'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getRankingMusic,
  getSingerList
} from '@/services/recommend'
import { getSongListDetail } from '@/services/otherPages'
import { changeShowErrorAction } from '@/pages/discover/other-pages/store/actionCreators'
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  banners: res.banners
})

const changeHotRecommendAtion = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  result: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res
})

const changeTopRankingAction = (res) => ({
  type: actionTypes.CHANGE_TOP_RANKING,
  topRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

const changeArtistListAction = (res) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artists: res.artists
})

export function getTopBannersAction() {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res)
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 热门推荐网络请求数据
export function getHotRecommendAction(limit) {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      dispatch(changeHotRecommendAtion(res))
    })
  }
}
// 新碟上新
export function getNewAlbumAction(limit) {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      if (res.albums) {
        dispatch(changeNewAlbumAction(res.albums))
        return
      }
      const monthData = res.monthData && res.monthData.slice(0, 10)
      if (monthData[0]) {
        dispatch(changeNewAlbumAction(monthData))
        return
      }
      const weekData = res.weekData && res.weekData.slice(0, 10)
      if (weekData) {
        dispatch(changeNewAlbumAction(weekData))
        return
      }
    })
  }
}

// 排行榜歌曲
// export function getRankingMusicAction(idx) {
//     return dispatch => {
//         getRankingMusic(idx).then(res => {
//             switch (idx) {
//                 case 0:
//                     dispatch(changeNewRankingAction(res))
//                     break;
//                 case 2:
//                     dispatch(changeOriginRankingAction(res))
//                     break;
//                 case 3:
//                     dispatch(changeTopRankingAction(res))
//                     break;
//                 default:
//             }
//         })
//     }
// }
export function getRankingMusicAction() {
  return (dispatch) => {
    getRankingMusic().then((res) => {
      if (!res.list) return
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      const songrankinglist = res.list && res.list.slice(0, 3)
      console.log(songrankinglist)
      songrankinglist.forEach((item) => {
        getSongListDetail(item.id).then((res) => {
          console.log(res)
          const id = res.playlist && res.playlist.id
          for (let i = 0; i < songrankinglist.length; i++) {
            switch (id) {
              case songrankinglist[0].id:
                dispatch(changeTopRankingAction(res))
                break
              case songrankinglist[1].id:
                dispatch(changeNewRankingAction(res))
                break
              default:
                dispatch(changeOriginRankingAction(res))
            }
          }
        })
      })
    })
  }
}
// 推荐歌手
export function getSingerListAction(limit, offset) {
  return (dispatch) => {
    getSingerList(limit, offset).then((res) => {
      console.log(res, 'res')

      dispatch(changeArtistListAction(res))
    })
  }
}
