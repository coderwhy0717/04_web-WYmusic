import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ItemMv from './cpn/item-mv'
import { SearchMvWrapper } from './style'

const SearchMv = memo((props) => {
  const { data = [] } = props
  return (
    <SearchMvWrapper>
      {data.map((item) => {
        return (
          <div key={item.vid} className="item">
            <ItemMv item={item} />
          </div>
        )
      })}
    </SearchMvWrapper>
  )
})

SearchMv.propTypes = {
  data: PropTypes.array
}

export default SearchMv
