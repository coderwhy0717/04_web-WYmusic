import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SongsRank from '../cpn/songs-rank'
import { UserSongsRankWrapper } from './style'

const UserSongsRank = memo((props) => {
  return (
    <UserSongsRankWrapper>
      <div className="user-songs-ranks wrap-v2">
        <SongsRank urlId={props.match.params.id} showLook={false} />
      </div>
    </UserSongsRankWrapper>
  )
})

UserSongsRank.propTypes = {}

export default UserSongsRank
