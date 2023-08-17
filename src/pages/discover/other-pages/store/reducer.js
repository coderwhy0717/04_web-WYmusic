import { Map } from 'immutable'

import * as actionType from './constans'
const defaultState = Map({
  songDetail: {}, //歌曲详情
  similarSong: [], //相似歌曲

  albumDetail: {}, //专辑详情
  hotAlbumList: [], //ta的热门专辑

  songListDetail: {}, //歌单详情
  songListUserInfo: {}, //获取歌单用户信息icon

  relatedPlayList: [], //相关歌单
  userInfo: [], //获取相关歌单用户信息为了获取icon

  songs: [], //不是其他页面的网络请求 是全部歌单的
  catlist: [],

  err: true,
  // artist页面
  artistHome: {},
  artistAlbum: {},
  artistMv: {},
  artistText: {},
  artistSimi: {},
  // 我的消息 所有通知 最新消息 getMessageNewCount
  newMessageCount: {},
  MsgIcon: true, // icon 通知-私信-消息 是否显示
  // msg/private页面 通知-私信-消息
  msgMe: {},
  msgPrivate: {},
  //  私信内容
  PrivateConent: [],
  msgComment: {},
  msgInform: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_SONG_DETAILS:
      return state.set('songDetail', action.songDetail)
    case actionType.CHANGE_SIMIAR_SONG:
      return state.set('similarSong', action.simiarSong)
    case actionType.CHANGE_SONG_LIST_DETAIL:
      return state.set('songListDetail', action.songListDetail)
    case actionType.CHANGE_RELATED_PLAY_LIAT:
      return state.set('relatedPlayList', action.related)
    case actionType.CHANGE_USER_INFO:
      return state.set('userInfo', action.list)
    case actionType.CHANGE_SONG_LIST_USER_INFO:
      return state.set('songListUserInfo', action.userInfo)
    case actionType.CHANGE_ALBUM_DETAIL:
      return state.set('albumDetail', action.albumDetail)
    case actionType.CHANGE_HOT_ALBUM_LIST:
      return state.set('hotAlbumList', action.list)
    case actionType.CHANGE_SONGS:
      return state.set('songs', action.playlists)
    case actionType.CHANGE_CATLIST:
      return state.set('catlist', action.list)
    case actionType.CHANGE_ERROR:
      return state.set('err', action.err)
    // artist 页面
    case actionType.ARTIST_DETAIL:
      return state.set('artistHome', action.obj)
    case actionType.ARTIST_ALBUM:
      return state.set('artistAlbum', action.obj)
    case actionType.ARTIST_MV:
      return state.set('artistMv', action.obj)
    case actionType.ARTIST_TEXT:
      return state.set('artistText', action.obj)
    case actionType.ARTIST_SIMI:
      return state.set('artistSimi', action.obj)
    // msg/private页面 通知-私信-消息
    case actionType.MSG_ME:
      return state.set('msgMe', action.obj)
    case actionType.MSG_PRIVATE:
      return state.set('msgPrivate', action.obj)
    case actionType.MSG_COMMENT:
      return state.set('msgComment', action.obj)
    case actionType.MSG_INFORM:
      return state.set('msgInform', action.obj)
    case actionType.MSG_ICON:
      return state.set('MsgIcon', action.value)
    case actionType.MESSAGE_NEW_COUNT:
      return state.set('newMessageCount', action.obj)
    case actionType.MSG_PRIVATE_CONENT:
      return state.set('PrivateConent', action.arr)

    default:
      return state
  }
}

export default reducer
