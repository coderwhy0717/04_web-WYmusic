import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '../../../../utils/format-utils'
import { SearchUserWrapper } from './style'

const SearchUser = memo((props) => {
  const { item = {} } = props
  return (
    <SearchUserWrapper gender={item.gender}>
      <NavLink to={`/user/home/${item.userId}`} className="user-img">
        <img
          src={getSizeImage(item.avatarUrl, 50)}
          alt=""
          title={item.nickname}
        ></img>
        <div className="bgc sprite_covor"></div>
      </NavLink>
      <div className="user-name ">
        <div className="name " title={item.nickname}>
          <NavLink
            to={`/user/home/${item.userId}`}
            className="namet text-nowrap"
          >
            {item.nickname}
          </NavLink>
          {item?.avatarDetail && (
            <img
              className="img-icon"
              src={getSizeImage(item?.avatarDetail?.identityIconUrl, 15)}
              alt=""
            />
          )}
          <span className="biao sprite_icon2"></span>
        </div>
        <div className="text-nowrap" title={item.signature}>
          {item.signature}
        </div>
      </div>
      <div className="gz">关注</div>
      <div className="songlist">歌单：{item.playlistCount ?? '请登录'} </div>
      <div className="fans">粉丝：{item.followeds ?? '请登录'}</div>
    </SearchUserWrapper>
  )
})

SearchUser.propTypes = {
  item: PropTypes.object
}

export default SearchUser
