import { Map } from 'immutable'

import * as actionType from './constans'
const defaultState = Map({
  serachMessage: {}, //搜索框的信息
  searchPageMessage: {},
  currentType: 1, //当前类型 单曲 歌手 专辑 视频 歌词 歌单...等tabs
  currentName: 'songs' //当前 单曲 歌手 专辑 视频 歌词 歌单...等tabs
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.SERACH_MESSAGE:
      return state.set('serachMessage', action.message)
    case actionType.SERACH_PAGE_MESSAGE:
      return state.set('searchPageMessage', action.message)
    case actionType.SERACH_CURRENT_TYPE:
      return state.set('currentType', action.currentType)
    case actionType.SERACH_CURRENT_NAME:
      return state.set('currentName', action.name)
    default:
      return state
  }
}

export default reducer
