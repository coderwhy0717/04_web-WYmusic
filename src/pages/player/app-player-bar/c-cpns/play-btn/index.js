import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlayBtnWrapper } from './style'
// import { PlayCircleFilled, PlayCircleOutlined } from '@ant-design/icons'
const PlayBtn = memo((props) => {
  const { playNext, playMusic, onplaying, open = false } = props
  return (
    <PlayBtnWrapper isPlaying={onplaying} open={open}>
      <div
        className="rwa prev sprite_player"
        title="上一首(ctrl+<)"
        onClick={(e) => playNext(-1)}
      ></div>
      <div
        className={`play sprite_player`}
        title="播放/暂停(p)"
        onClick={(e) => playMusic()}
      ></div>
      {/* <PlayCircleOutlined style={{ fontSize: '40px' }} /> */}
      {/* sprite_icon  */}
      <div
        className="rwa next sprite_player"
        title="下一首(ctrl+>)"
        onClick={(e) => playNext(1)}
      ></div>
    </PlayBtnWrapper>
  )
})

PlayBtn.propTypes = {
  onplaying: PropTypes.bool,
  open: PropTypes.bool,
  playMusic: PropTypes.func,
  playNext: PropTypes.func
}

export default PlayBtn
