
import {Map} from 'immutable'


import * as actionType from './constans'

const defaultState = Map({
    topBanner:[],
    hotRecommend: [],
    newAlbum:[],

    topRanking: {},
    newRanking: {},
    originRanking: {},

    artistList:[],
})

function reducer(state = defaultState , action) {
    switch(action.type) {
        case actionType.CHANGE_TOP_BANNERS: 
            return state.set('topBanner',action.banners)
        case actionType.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend',action.result)
        case actionType.CHANGE_NEW_ALBUM:
            return state.set('newAlbum',action.newAlbum)
        case actionType.CHANGE_TOP_RANKING:
            return state.set('topRanking',action.topRanking)
        case actionType.CHANGE_NEW_RANKING:
            return state.set('newRanking',action.newRanking)
        case actionType.CHANGE_ORIGIN_RANKING:
            return state.set('originRanking',action.originRanking)
        case actionType.CHANGE_ARTIST_LIST:
            return state.set('artistList',action.artists)
        default:
            return state
    }
}

export default reducer