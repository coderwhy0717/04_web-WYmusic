import PropTypes from 'prop-types'
import React, { memo } from 'react'
import WYSongsCover from 'components/songs-cover'
import { PlayListCoverWrapper } from './style'
const PlayListCover = memo((props) => {
  const { data = [] } = props
  return (
    <PlayListCoverWrapper className="playlist-count">
      {data.map((item) => {
        return (
          <div key={item.id} className="item-play">
            <WYSongsCover info={item} types={false} showBy={true} />
          </div>
        )
      })}
    </PlayListCoverWrapper>
  )
})

PlayListCover.propTypes = {
  data: PropTypes.array
}

export default PlayListCover
