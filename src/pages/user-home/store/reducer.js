import { Map } from 'immutable'

import * as actionType from './constans'
const defaultState = Map({
  userInfo: {},
  radio: {}, //电台
  newSongList: {}, //创建歌单
  collectSongList: {}, //收藏歌单
  userSongs: {}, //user/home页面的用户一周/所有听得歌曲
  showLoading: true, //加载中歌曲... 默认显示
  // 登录 扫 二维码 的image 图片路径
  QRCode: {},
  LoginQRCode:
    'data:image/png;base64,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'
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.USER_INFO:
      return state.set('userInfo', action.info)
    case actionType.USER_SONGS:
      return state.set('userSongs', action.songs)
    case actionType.USER_SONGS_LOADING:
      return state.set('showLoading', action.loading)
    case actionType.USER_RADIO:
      return state.set('radio', action.radio)
    case actionType.USER_NEW_SONG_LIST:
      return state.set('newSongList', action.list)
    case actionType.USER_COLLECT_SONG_LIST:
      return state.set('collectSongList', action.list)
    case actionType.USER_LOGIN_IMAGE:
      return state.set('LoginQRCode', action.image)
    case actionType.USER_QRCODE:
      return state.set('QRCode', action.QRCode)
    default:
      return state
  }
}

export default reducer
