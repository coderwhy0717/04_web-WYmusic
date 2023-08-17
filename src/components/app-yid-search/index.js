import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchCpn from 'components/search-cpn'
import {
  MenuOutlined,
  ScanOutlined,
  AudioOutlined,
  WechatOutlined
} from '@ant-design/icons'
import { AppYidSearchWarrper } from './style'
const AppYidSearch = memo((props) => {
  return (
    <AppYidSearchWarrper>
      {/* 移动端 */}
      <div className="yi-home">
        <MenuOutlined />
      </div>
      <div className="yi-top-search">
        <SearchCpn />
      </div>
      <ScanOutlined />
      <WechatOutlined />
      <AudioOutlined />
    </AppYidSearchWarrper>
  )
})

AppYidSearch.propTypes = {}

export default AppYidSearch
