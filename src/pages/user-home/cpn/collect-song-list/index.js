import PropTypes from 'prop-types'
import React, { memo } from 'react'
import PlayListCover from '../new-song-list/cpn/play-list-cover'
import TitleCover from '../title-cover'

import { CollectSongListWrapper } from './style'
const CollectSongList = memo((props) => {
  const { collectSongList = [], name = '' } = props
  return (
    <CollectSongListWrapper>
      <TitleCover title={`${name}收藏的歌单 (${collectSongList.length})`} />
      <PlayListCover data={collectSongList} />
    </CollectSongListWrapper>
  )
})

CollectSongList.propTypes = {
  collectSongList: PropTypes.array,
  name: PropTypes.string
}

export default CollectSongList
