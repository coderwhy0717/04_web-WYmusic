import * as actionType from './constans'

import {getRankingMusic } from '@/services/recommend'
import {getSongListDetail} from '@/services/otherPages'
import { changeShowErrorAction } from "@/pages/discover/other-pages/store/actionCreators";
const changeAllSongListAction = list => ({
    type: actionType.CHANGE_ALL_SONG_LIST,
    list
})

const changeSongListDetail = list => ({
    type: actionType.CHANGE_SONG_LIST_DETAIL,
    list
})
const changeSongListTitle = list => ({
    type: actionType.CHANGE_SONG_LIST_TITLE,
    list
})


export function getAllSongListAction(id) {
    return dispatch => {
        getRankingMusic().then(res => {
            if(res.code === 'ERR_NETWORK') {
                dispatch(changeShowErrorAction('ERR_NETWORK'))
                return
            }
            if(!res.list) return
            // 一开始初始化根据url的id 去初始化 
            // 直接调用的话数据没有过去 获取不到res.list  getSongListTitle()
            const index =  res.list.findIndex(item => item.id === id*1)
            if(index !== -1) {
                const songListdetail = res.list[index]
                dispatch(changeSongListTitle(songListdetail))
            }
            dispatch(changeAllSongListAction(res.list))
        })
    }
}

export function getSongListDetailAction(id) {
    return dispatch => {
        dispatch(changeShowErrorAction(false))
        getSongListDetail(id).then(res => {
            if(res.code === 'ERR_NETWORK') {
                dispatch(changeShowErrorAction('ERR_NETWORK'))
                return
            }
            console.log(res,"gggg")
            if(!res.playlist) return
            dispatch(changeShowErrorAction(true))
            dispatch(changeSongListDetail(res.playlist))
        })
    }
}
export function getSongListTitle(id) {
    return (dispatch,getState) => {
        const allSongList = getState().getIn(['ranking','allSongList'])
        console.log(allSongList)
        const index =  allSongList.findIndex(item => item.id === id*1)
        if(index !== -1) {
            const songListdetail = allSongList[index]
            dispatch(changeSongListTitle(songListdetail))
        }
    }
}