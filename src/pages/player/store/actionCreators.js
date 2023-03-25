import { getLyrics, getPlaySongDetail, ifCheckMusic } from '@/services/player'
import { getSongLyrics } from '@/utils/format-lyrics'
import * as actionType from './constants'
import { changeShowErrorAction } from '@/pages/discover/other-pages/store/actionCreators'

const changePlayCurrentSongDetailAction = (songs) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  songs
})
const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList
})

export const changePlayLyricsAction = (lyrics) => ({
  type: actionType.CHANGE_PLAY_LYRICS,
  lyrics
})
const changePagesLyricsAction = (lyrics) => ({
  type: actionType.CHANGE_PAGES_LYRICS,
  lyrics
})

const changeMaskCoverAction = (show) => ({
  type: actionType.CHANGE_MASK_COVER,
  show
})

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

export const changeSequenceAction = (sequence) => ({
  type: actionType.CHANGE_SEQUENCE,
  sequence
})
// 歌词
export const changePlayLyrics = (index) => ({
  type: actionType.CHANGE_LYRICS_INDEX,
  index
})
// 播放一样的歌曲
export const changePlayingAction = (playing) => ({
  type: actionType.CHANGE_ONPLAYING,
  playing
})

export function changePlayNextSongAndSequenceAction(tag) {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence'])
    let playSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const playList = getState().getIn(['player', 'playList'])
    switch (sequence) {
      case 1: //随机播放
        let randomIndex = Math.floor(Math.random() * playList.length)
        if (randomIndex === playSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        playSongIndex = randomIndex
        break
      default: //顺序播放
        playSongIndex += tag
        if (playSongIndex > playList.length - 1) playSongIndex = 0
        if (playSongIndex < 0) playSongIndex = playList.length - 1
    }
    const song = playList[playSongIndex]
    dispatch(changeCurrentSongIndexAction(playSongIndex))
    console.log('first song', song)

    dispatch(changePlayCurrentSongDetailAction(song))

    //
    dispatch(getLyricsAction(song.id))
  }
}

export function getPlaySongDetailAction(ids, LinkedHashSet = true) {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const songIndex = playList.findIndex((song) => song.id === ids)
    let index = currentSongIndex + 1

    if (songIndex !== -1) {
      console.log('ID一样s')
      //有这首歌
      const song = playList[songIndex]
      const newPlayeList = [...playList]
      newPlayeList.splice(songIndex, 1)
      if (songIndex > currentSongIndex) {
        newPlayeList.splice(index, 0, song)
        dispatch(changeCurrentSongIndexAction(index))
      } else {
        newPlayeList.splice(currentSongIndex, 0, song)
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
      }

      //
      if (LinkedHashSet) {
        dispatch(changePlayListAction(newPlayeList))
      } else {
        dispatch(changePlayListAction(playList))
      }
      dispatch(changePlayCurrentSongDetailAction(song))
      // 播放按钮显示/隐藏
      dispatch(changePlayingAction(true))
      //获取歌词
      // console.log(song.id, '歌曲id')
      dispatch(getLyricsAction(song.id))
    } else {
      //没有这首歌
      getPlaySongDetail(ids).then((res) => {
        // if(!res.songs) return
        const song = res.songs && res.songs[0]

        if (!song) return
        const newPlayeList = [...playList]
        newPlayeList.splice(index, 0, song)
        dispatch(changeCurrentSongIndexAction(index))
        dispatch(changePlayListAction(newPlayeList))
        dispatch(changePlayCurrentSongDetailAction(song))

        // 获取歌词
        dispatch(getLyricsAction(ids))
      })
    }
  }
}

// 获取歌词
export function getLyricsAction(id, isShow = true) {
  return (dispatch, getState) => {
    // 显示pages歌的详情页面 如果是和正在播放的歌曲相同的话 就不需要从重复请求歌词
    if (!isShow) {
      const currentSong = getState().getIn(['player', 'currentSong'])
      const pagesLyrics = getState().getIn(['player', 'playLyrics'])
      // console.log(currentSong,"当前歌啊啊啊")
      // 页面的歌曲和当前播放歌曲id相等 直接拿当前的歌词赋值进去
      if (currentSong.id === id) {
        dispatch(changePagesLyricsAction(pagesLyrics))
        return
      }
    }

    getLyrics(id).then((res) => {
      if (res.code === 'ERR_NETWORK') {
        dispatch(changeShowErrorAction('ERR_NETWORK'))
        return
      }
      console.log(res, 'geci')

      // if(!res.lrc) return
      const ly = res.lrc && res.lrc.lyric

      if (!ly) {
        dispatch(
          changePlayLyricsAction([{ time: 0, content: '这首歌曲没有歌词' }])
        )

        return
      }

      const lyrics = getSongLyrics(ly)
      if (isShow) {
        // console.log(lyrics,"播放歌词")
        dispatch(changePlayLyricsAction(lyrics))
      } else {
        // console.log(lyrics,"页面歌词")
        dispatch(changePagesLyricsAction(lyrics))
      }
    })
    // ifCheckMusic(id).then((res) => {
    //   if (res.success) return
    //   // console.log(res.response.data, '检查播放')
    //   const info = res.response.data
    //   console.log(res, info, 'datra')
    //   dispatch(
    //     changePlayLyricsAction([{ time: 0, content: '亲爱的,暂无版权' }])
    //   )
    // })
  }
}
// songdetail 默认播放 一首单曲
// songlistdetail 播放歌单详情 所有歌曲
// rankingdetail 播放排行榜 所有歌曲
// albumdetail 播放专辑 所有歌曲
export function getPlaySongListAction(tracksOrId) {
  return (dispatch) => {
    const currentSong = tracksOrId[0]
    // 通过tracks类型鉴别 如果不是id数字 类型就是播放所有歌曲
    if (typeof tracksOrId === 'object') {
      // 当前歌曲
      dispatch(changePlayCurrentSongDetailAction(currentSong))
      dispatch(getLyricsAction(currentSong.id))
      // 当前歌曲index
      dispatch(changeCurrentSongIndexAction(0))
      // 当前播放列表
      dispatch(changePlayListAction(tracksOrId))
    } else {
      // 通过id
      dispatch(getPlaySongDetailAction(tracksOrId))
    }
  }
}

// 处理遮罩层
export function getMaskCoverAction(show) {
  return (dispatch) => {
    dispatch(changeMaskCoverAction(show))
  }
}
