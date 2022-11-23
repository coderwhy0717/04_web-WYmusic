import { Map } from "immutable";

import * as actionType from './constans'


 const defaultState = Map({
    allSongList:[],//所有榜单id
    songListDetail:[], //榜单详情
    songListTitle:{} //榜单的top-title
})

function reducer(state = defaultState,action) {
    switch(action.type) {
        case actionType.CHANGE_ALL_SONG_LIST:
            return state.set('allSongList',action.list)
        case actionType.CHANGE_SONG_LIST_DETAIL:
            return state.set('songListDetail',action.list)
        case actionType.CHANGE_SONG_LIST_TITLE:
            return state.set('songListTitle',action.list)
        default:
            return state
    }
}

export default reducer