import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SongsRankWrapper } from './style'
import {
  getUserSongsAction,
  getUserInfoAction,
  changeShowLoadingAction
} from '../../store/actionCreators'
import { objectChange } from '../../../../utils/format-utils'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import ItemSongCover from '../item-song-cover'
import { Spin } from 'antd'

//需要做 判断 登录后是否进入 自己的主页 给出详细信息 听歌 排行榜 歌曲次数
const SongsRank = memo((props) => {
  const { urlId = 0, showLook = true } = props
  const [tindex, setTindex] = useState(1)
  const dispatch = useDispatch()
  // 点击网络请求所有时间歌曲
  useEffect(() => {
    console.log('执行1')
    // 歌曲s网络请求
    dispatch(getUserSongsAction(urlId, tindex))
    // 加载中...
    dispatch(changeShowLoadingAction(true))
  }, [dispatch, urlId, tindex])
  // 用户信息请求
  useEffect(() => {
    console.log('执行2')
    dispatch(getUserInfoAction(urlId))
  }, [dispatch, urlId])

  const { userSongs, userInfo, showLoading } = useSelector(
    (state) => ({
      userSongs: state.getIn(['userHome', 'userSongs']),
      userInfo: state.getIn(['userHome', 'userInfo']),
      showLoading: state.getIn(['userHome', 'showLoading'])
    }),
    shallowEqual
  )
  const changeTindex = (index) => {
    setTindex(index)
  }

  let data = objectChange(userSongs?.data) && userSongs.data.slice(0, 10)
  if (!showLook) {
    data = objectChange(userSongs?.data) && userSongs.data
  }
  return (
    <SongsRankWrapper>
      {userSongs?.code === 200 && (
        <div className="songs-box">
          <div className="songs-title">
            <div className="left">
              <p>听歌排行</p>
              <span>累计听歌{userInfo?.listenSongs}首</span>
              <i
                className="icon-i"
                title="实际播放时间过短的歌曲将不纳入计算。"
              >
                i
              </i>
            </div>
            <div className="right">
              <span
                className={classNames({ week: tindex === 1 })}
                onClick={(e) => changeTindex(1)}
              >
                最近一周
              </span>
              <i>|</i>
              <span
                className={classNames({ week: tindex === 0 })}
                onClick={(e) => changeTindex(0)}
              >
                所有时间
              </span>
            </div>
          </div>
          {/* 歌曲加载中... */}
          {showLoading && (
            <div className="example">
              <Spin />
              &nbsp;&nbsp;加载中...
            </div>
          )}
          {!showLoading && (
            <div>
              {objectChange(data) ? (
                <div className="songs">
                  {data.map((item, index) => {
                    return (
                      <ItemSongCover
                        key={index}
                        index={index + 1}
                        item={item}
                      />
                    )
                  })}
                </div>
              ) : (
                <div className="null-rank">
                  <span className="null-img-text sprite_icon2"></span>
                  <span>暂无听歌记录</span>
                </div>
              )}
              {showLook && (
                <div className="look">
                  {userSongs?.data.length > 10 && (
                    <NavLink to={`/user/songs/rank/${urlId}`}>
                      查看更多&gt;
                    </NavLink>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </SongsRankWrapper>
  )
})

SongsRank.propTypes = {
  urlId: PropTypes.any,
  showLook: PropTypes.bool
}

export default SongsRank
