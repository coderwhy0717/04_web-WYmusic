import request from './request'

// 获取 音乐的url链接
export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getPlaySongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 音乐是否可用
export function ifCheckMusic(id) {
  console.log(id, 'fn id')

  return request({
    url: '/check/music',
    params: {
      id
    }
  })
}

export function getLyrics(id) {
  return request({
    url: '/lyric',
    params: {
      id
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
