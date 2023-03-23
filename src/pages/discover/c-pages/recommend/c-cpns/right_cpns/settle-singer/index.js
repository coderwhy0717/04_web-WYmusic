import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SETTLE_SINGER } from '@/common/contants'
import { getSingerListAction } from '../../../store/acionCreators'
import { SettleSingerWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import { useHistory } from 'react-router-dom'
export default memo(function WYSettleSinger() {
  const { artistList } = useSelector((state) => ({
    artistList: state.getIn(['recommend', 'artistList'])
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerListAction(SETTLE_SINGER))
  }, [dispatch])
  const history = useHistory()
  const changeClick = (id) => {
    if (id === null) {
      console.log(id, 'userHome id是空的,这个傻逼没有用户主页!!!')
      return
    }
    history.push(`/user/home/${id}`)
  }
  return (
    <SettleSingerWrapper>
      <h3 className="top-title">
        <span>入驻歌手</span>
        <a href="/#">查看全部&gt;</a>
      </h3>
      <div className="artists">
        {artistList?.map((item, index) => {
          return (
            <div
              className="item"
              key={item.id}
              onClick={(e) => changeClick(item.accountId)}
            >
              <img src={getSizeImage(item.img1v1Url, 62)} alt={item.name}></img>
              <div className="right">
                <div className="title text-nowrap">
                  {item.alias.join('') || item.name}
                </div>
                <div className="name text-nowrap">{item.name}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="btm-link ">
        <a href="/#" className="link sprite_btn">
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </SettleSingerWrapper>
  )
})
