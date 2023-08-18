import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlayMusicBtnWrapper } from './style'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import RepeatOneOutlinedIcon from '@mui/icons-material/RepeatOneOutlined'
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
const PlayMusicBtn = memo((props) => {
  const {
    sequence = 0,
    onplaying = false,
    playNext,
    playMusic,
    changeCycle
  } = props
  return (
    <PlayMusicBtnWrapper>
      {sequence === 0 && (
        <RepeatOutlinedIcon className="btn" onClick={(e) => changeCycle()} />
      )}
      {sequence === 2 && (
        <RepeatOneOutlinedIcon className="btn" onClick={(e) => changeCycle()} />
      )}
      {sequence === 1 && (
        <ShuffleOutlinedIcon className="btn" onClick={(e) => changeCycle()} />
      )}
      <SkipPreviousRoundedIcon className="btn" onClick={(e) => playNext(-1)} />
      <div>
        {onplaying ? (
          <PauseOutlinedIcon className="plays" onClick={(e) => playMusic()} />
        ) : (
          <PlayArrowRoundedIcon
            className="plays"
            onClick={(e) => playMusic()}
          />
        )}
      </div>
      <SkipNextRoundedIcon className="btn" onClick={(e) => playNext(1)} />

      <QueueMusicRoundedIcon className="btn" />
    </PlayMusicBtnWrapper>
  )
})

PlayMusicBtn.propTypes = {
  sequence: PropTypes.number,
  onplaying: PropTypes.bool,
  playNext: PropTypes.func,
  playMusic: PropTypes.func,
  changeCycle: PropTypes.func
}

export default PlayMusicBtn
