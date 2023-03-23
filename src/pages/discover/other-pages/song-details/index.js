import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import WYSongInfo from './c-cpns/song-info'

// import WYSimilarSongList from './c-cpns/right-cpns/similar-songlist'
import WYSimilarSong from './c-cpns/right-cpns/similar-song'
import WYDownloadApp from '../components/download-app'
import WYUser from '../components/user'
import WYErrorCover from '../../../error-cover'
import {
  getSongDetailAction,
  getSimiarSongAction
} from '../store/actionCreators'
import { SongDetailsWrapper, SongLeft, SongRight } from './style'
import { useHistory } from 'react-router-dom'
import { objectChange } from '../../../../utils/format-utils'

export default memo(function WYPlaySongDetails(props) {
  console.log(props.match.params.id)
  //
  const id = props.match.params.id
  const dispatch = useDispatch()

  const { songDetail, similarSong, pagesLyrics, err } = useSelector(
    (state) => ({
      songDetail: state.getIn(['otherPages', 'songDetail']),
      similarSong: state.getIn(['otherPages', 'similarSong']),
      pagesLyrics: state.getIn(['player', 'pagesLyrics']),
      err: state.getIn(['otherPages', 'err'])
    }),
    shallowEqual
  )
  const history = useHistory()
  useEffect(() => {
    if (err === 'ERR_NETWORK') {
      history.push({ pathname: '/ERR_NETWORK' })
    }
  }, [err, history])
  useEffect(() => {
    // 歌曲信息
    dispatch(getSongDetailAction(id))
    dispatch(getSimiarSongAction(id))
    // 歌曲评论
  }, [dispatch, id])
  return (
    <SongDetailsWrapper className="wrap-v2">
      <SongLeft err={err}>
        <WYSongInfo info={songDetail} pagesLyrics={pagesLyrics} />
        <h1>写评论</h1>
        <h1>评论</h1>
      </SongLeft>
      <SongRight err={err}>
        {/* <WYSimilarSongList /> */}
        {objectChange(similarSong) && (
          <WYSimilarSong similarSong={similarSong} />
        )}

        <WYDownloadApp />
        <WYUser />
      </SongRight>
      <WYErrorCover />
    </SongDetailsWrapper>
  )
})
