import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ArtistCover from '../../../../components/artist-cover'
import { SearchArtistWrapper } from './style'

const SearchArtist = memo((props) => {
  const { data = [] } = props
  return (
    <SearchArtistWrapper>
      {data.map((item) => {
        return (
          <div key={item.id} className="item-album">
            <ArtistCover item={item} />
          </div>
        )
      })}
    </SearchArtistWrapper>
  )
})

SearchArtist.propTypes = {
  data: PropTypes.array
}

export default SearchArtist
