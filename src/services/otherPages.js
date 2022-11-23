import request from './request'
export function getSongDetail(ids) {
    return request({
        url:'/song/detail',
        params:{
            ids,
        }
    })
}

export function getAlbumDetail(id) {
    return request({
        url:'/album',
        params:{
            id,
        }
    })
}
export function getHotAlbums(id,limit = 5) {
    return request({
        url:'/artist/album',
        params:{
            id,
            limit
        }
    })
}
// 相似 歌曲
export function getSimiarSong(id) {
    return request({
        url:'/simi/song',
        params:{
            id,
        }
    })
}
// 歌单
export function getSongListDetail(id) {
    return request({
        url:'/playlist/detail',
        params:{
            id,
        }
    })
}
// 歌单
// 相关歌单
export function getRelatedPlayList (id) {
    return request({
        url:'/related/playlist',
        params: {
            id,
        }
    })
}
// 获取用户信息
export function getUserInfo(uid) {
    return request({
        url:'/user/detail',
        params:{
            uid,
        }
    })
}

