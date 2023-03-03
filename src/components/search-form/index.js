import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import FormDetail from './cpn/form-detail'
import { SearchFormWrapper } from './style'

const SearchForm = memo((props) => {
  const { data = [], type = 1, Cpn } = props
  return (
    <SearchFormWrapper>
      {data.map((item, index) => {
        return (
          <div
            className={classNames('item', { oushu: index % 2 !== 0 })}
            key={item.id}
          >
            {type === 1 && <FormDetail item={item} />}
            {/* <Cpn item={item} /> */}
          </div>
        )
      })}
    </SearchFormWrapper>
  )
})

SearchForm.propTypes = {
  data: PropTypes.array,
  type: PropTypes.number,
  Cpn: PropTypes.element
}

export default SearchForm
