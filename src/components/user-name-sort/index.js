import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { UserNameSortWrapper } from './style'

export default memo(function WYUserNameSort(props) {
  const { artists = [], noWarp = false } = props

  return (
    <UserNameSortWrapper noWarp className={noWarp ? '' : 'text-nowrap'}>
      {artists.map((iten) => {
        return (
          <span className="artists" key={iten.id}>
            <NavLink to={`/discover/artist/${iten.id}`}>{iten.name}</NavLink>
            {iten?.tns?.length > 0 ? <i> - ({iten.tns[0]})</i> : ''}
            {artists.length > 1 ? <span>&nbsp;/&nbsp;</span> : ''}
          </span>
        )
      })}
    </UserNameSortWrapper>
  )
})
