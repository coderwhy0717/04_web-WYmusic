import request from './request'
export function getPlaySongDetail(ids) {
    return request({
        url:'/song/detail',
        params: {
            ids,
        }
    })
}

export function getLyrics(id) {
    return request({
        url:'/lyric',
        params:{
            id,
        }
    })
}
// export function getPlayUrl(id) {
//     console.log(id,"id")
//     return request({
//         url:'/song/url',
//         params:{
//             id,
//             realIp
//         }
//     })
// }