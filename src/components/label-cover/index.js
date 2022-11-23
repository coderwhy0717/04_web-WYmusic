import React, { memo } from 'react'
import {LabelCoverWrapper} from './style'
export default memo(function WYLabelCover(props) {
    const { title = '入驻歌手', all = '' } = props
  return (
    <LabelCoverWrapper>
      <h3 className='top-title'> 
          <span>{title}</span>
          {
              all ? <a href='/#'>{all}&gt;</a> : ''
          }
        </h3>
    </LabelCoverWrapper>
  )
})
