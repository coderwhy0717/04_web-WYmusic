import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import PropType from 'prop-types'
import { NavLink } from 'react-router-dom'
 const WYThemeHeaderRcm =  memo(function(props) {
  const {title,keywords,link} = props
  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <NavLink to={link}><h3 className='title'>{title}</h3></NavLink>
        <div className='keyword'>
          {
            keywords.map((item,index) => {
              return (
                <div key={item} className="item">
                  <NavLink to={`/discover/Songs/${item}`}>{item}</NavLink>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <NavLink to={link}>更多</NavLink>
          <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})
WYThemeHeaderRcm.protoType = {
  title: PropType.string.isRequired,
  keywords: PropType.array

}
WYThemeHeaderRcm.defaultProps = {
  keywords:[]
}
export default WYThemeHeaderRcm