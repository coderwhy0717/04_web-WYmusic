import PropTypes from 'prop-types'
import React, { memo } from 'react'
import WYAlbumCover from '@/components/album-cover'
import { SearchAlbumWrapper } from './style'
const SearchAlbum = memo((props) => {
  const { data = [] } = props

  return (
    <SearchAlbumWrapper>
      {data.map((item) => {
        return (
          <div key={item.id} className="item-album">
            <WYAlbumCover info={item} />
          </div>
        )
      })}
    </SearchAlbumWrapper>
  )
})

SearchAlbum.propTypes = {
  data: PropTypes.array
}

export default SearchAlbum
