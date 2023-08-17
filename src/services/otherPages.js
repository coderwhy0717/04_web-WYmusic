import request from './request'
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getAlbumDetail(id) {
  return request({
    url: '/album',
    params: {
      id
    }
  })
}
export function getHotAlbums(id, limit = 5) {
  return request({
    url: '/artist/album',
    params: {
      id,
      limit
    }
  })
}
// 相似 歌曲
export function getSimiarSong(id) {
  return request({
    url: '/simi/song',
    params: {
      id
    }
  })
}
// 歌单
export function getSongListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
// 歌单
// 相关歌单
export function getRelatedPlayList(id) {
  return request({
    url: '/related/playlist',
    params: {
      id
    }
  })
}
// 获取用户信息
export function getUserInfo(uid, timestamp = new Date().getTime()) {
  return request({
    url: '/user/detail',
    params: {
      uid,
      timestamp
    }
  })
}
// artist 艺人页面信息 /discover/artist/5781
export function getArtistDetail(id) {
  return request({
    url: '/artists',
    params: {
      id
    }
  })
}

export function getArtistAlbum(id, limit = 12, offset = 0) {
  return request({
    url: '/artist/album',
    params: {
      id,
      limit,
      offset
    }
  })
}
export function getArtistMv(id, offset = 0, limit = 12) {
  return request({
    url: '/artist/mv',
    params: {
      id,
      offset,
      limit
    }
  })
}

export function getArtistText(id) {
  return request({
    url: '/artist/desc',
    params: {
      id
    }
  })
}

export function getArtistSimi(id) {
  return request({
    url: '/simi/artist',
    params: {
      id
    }
  })
}

// user/home页面的用户一周/所有听得歌曲
export function getUserSongs(uid, type = 1) {
  return request({
    url: '/user/record',
    params: {
      uid,
      type
    }
  })
}
// user/home 页面的 用户创建的 电台
export function getRadio(uid) {
  return request({
    url: '/user/audio',
    params: {
      uid
    }
  })
}

// user/home 页面的 用户创建的 歌单
export function getUSerPlaylist(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}

// user/home 页面的 点击动态 关注 粉丝  /user/event?uid=122969642

export function getUserEventList(uid, limit = 30, lasttime) {
  return request({
    url: '/user/event',
    params: {
      uid,
      limit,
      lasttime
    }
  })
}

export function getConcern(uid, limit = 30, offset = 0) {
  return request({
    url: '/user/follows',
    params: {
      uid,
      limit,
      offset
    }
  })
}
