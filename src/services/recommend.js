import request from './request'
export function getTopBanners() {
    return request({
        url:"/banner"
    })
}

export function getHotRecommend(limit) {
    return request({
        url:'/personalized',
        params: {
            limit
        }
    })
}

export function getNewAlbum(limit) {
    return request({
        url:'/top/album',
        params:{
            limit,
        }
    })
}

export function getRankingMusic() {
    return request({
        url:"/toplist",
    })
}


export function getSingerList(limit,offset = 0) {
    return request({
        url:'/top/artists',
        params: {
            offset,
            limit,
        }
    })
}
// 歌单
export function getSongs(cat = '全部',offset = 0,order = 'hot',limit = 35) {
    return request({
        url:'/top/playlist',
        params:{
            cat,
            limit,
            offset: offset * limit,
            order
        }
        
    })
}
export function getCatlist() {
    return request({
        url:'/playlist/catlist'
    })
}
// 歌单//