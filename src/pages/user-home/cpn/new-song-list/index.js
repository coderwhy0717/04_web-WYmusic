import PropTypes from 'prop-types'
import React, { memo } from 'react'
import TitleCover from '../title-cover'
import PlayListCover from './cpn/play-list-cover'
import { NewSongListWrapper } from './style'
const NewSongList = memo((props) => {
  const { newSongList = [], name = '' } = props
  return (
    <NewSongListWrapper>
      <TitleCover title={`${name}创建的歌单 (${newSongList.length})`} />
      <PlayListCover data={newSongList} />
    </NewSongListWrapper>
  )
})

NewSongList.propTypes = {
  newSongList: PropTypes.array,
  name: PropTypes.string
}

export default NewSongList
