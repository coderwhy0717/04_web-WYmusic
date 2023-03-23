import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchFormWrapper } from './style'

const SearchForm = memo((props) => {
  const { data = [], Cpn = 'div' } = props
  console.log(Cpn, 'cpn')

  return (
    <SearchFormWrapper>
      {data.map((item, index) => {
        return (
          <div
            className={classNames('item', { oushu: index % 2 !== 0 })}
            key={item.id ?? item.userId}
          >
            <Cpn item={item} indexx={index + 1}></Cpn>
          </div>
        )
      })}
    </SearchFormWrapper>
  )
})

SearchForm.propTypes = {
  data: PropTypes.array,
  type: PropTypes.number,
  Cpn: PropTypes.object
}

export default SearchForm
