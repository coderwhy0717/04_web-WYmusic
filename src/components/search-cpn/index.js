import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SearchWrapper } from './style'
import { objectChange } from '../../utils/format-utils'
import classNames from 'classnames'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { debounce } from 'underscore'
import {
  changeCurrentType,
  getSeatchMessage,
  changeCurrentName
} from '../../pages/search-view/store/actionCreators'
import { useHistory, useParams } from 'react-router-dom'

const SearchCpn = memo((props) => {
  // 识别是长的输入框
  const { lengthInput = false } = props

  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const params = useParams()
  // console.log(props, params.name)

  const [bgcShow, setBgcShow] = useState(false)
  const { serachMessage } = useSelector(
    (state) => ({
      serachMessage: state.getIn(['search', 'serachMessage'])
    }),
    shallowEqual
  )

  const titlefn = (value) => {
    switch (value) {
      case 'songs':
        return '单曲'
      case 'artists':
        return '歌手'
      case 'albums':
        return '专辑'
      default:
        return '歌单'
    }
  }
  const messageFn = (value, items) => {
    switch (value) {
      case 'songs':
        return items.name + '-' + items.artists[0].name
      case 'artists':
        return items.name
      case 'albums':
        return items.name + '-' + items.artist.name
      default:
        return items.name
    }
  }
  const dispatch = useDispatch()

  // 输入框内容变化时 触发 防抖
  // 变量
  let vars = true
  let showInfo = true
  const ClickChange = debounce((e) => {
    // console.log(e.target.value, !e.target.value.length)
    setSearchValue(e.target.value)
    // 输入框没有的时候 不需要请求 恢复初始化
    if (!e.target.value.length) {
      dispatch(getSeatchMessage({}))
      vars = true
      setBgcShow(false)
      return
    }
    // 变量 控制设置聚焦的次数 优化性能
    if (vars) {
      setBgcShow(true)
      vars = false
    }
    // console.log(serachMessage)
    // console.log(objectChange(serachMessage))
    if (!showInfo) {
      setBgcShow(false)
    }
    // 网络请求新数据
    dispatch(getSeatchMessage(e.target.value))
  }, 500)
  // 回车 跳转到搜索页面
  const ClickPressEnter = (e) => {
    if (!e.target.value.length) return
    showInfo = false
    setBgcShow(false)
    history.push(`/search/view/${e.target.value}`)
  }
  // 点击搜索图标
  const onClickIcon = () => {
    if (!searchValue.length) return
    history.push(`/search/view/${searchValue}`)

    setBgcShow(false)
  }

  // 获取焦点
  const focus = (e) => {
    if (!e.length) return
    // console.log(e)
    setBgcShow(true)
  }
  // 点击 搜索的信息
  // router
  const changeClick = (value, value1) => {
    console.log(value.id, value1, '点击')
    setBgcShow(false)
    switch (value1) {
      case 'songs':
        return history.push(`/discover/playSong/${value.id}`)
      case 'playlists':
        return history.push(`/discover/songListDetail/${value.id}`)
      case 'albums':
        return history.push(`/discover/albumDetail/${value.id}`)
      default:
        return history.push(`/discover/artist/${value.id}`)
    }
  }
  // 点击蒙版 bgc 搜索的信息
  const changeShowbgc = () => {
    setBgcShow(false)
  }
  // // 滚动 取消 搜索的信息
  useEffect(() => {
    let scrollVar = true
    const fn = () => {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop === 0) {
        scrollVar = true
        return
      }
      if (scrollVar) {
        setBgcShow(false)
        scrollVar = false
      }
    }
    // 当搜索信息显示的时候 监听滚动
    if (bgcShow) {
      document.addEventListener('scroll', fn)
    }
    return () => {
      document.removeEventListener('scroll', fn)
    }
  }, [bgcShow])
  // 点击相关搜索标题
  const changeClickT = () => {
    // 修改 rodux 信息 跳转到搜索页面 的用户页面
    dispatch(changeCurrentType(1002))
    dispatch(changeCurrentName('userprofiles'))
    history.push(`/search/view/${searchValue}`)
    setBgcShow(false)
  }
  return (
    <SearchWrapper showbgc={bgcShow} lengthInput={lengthInput}>
      {/* input */}
      {lengthInput ? (
        <div className="lengthInput-box sprite_download">
          <Input
            className="lengthInput"
            onChange={ClickChange}
            onPressEnter={ClickPressEnter}
            onClick={(e) => focus(searchValue)}
            defaultValue={params.name}
          />
          <div
            className="clickbtnbgc sprite_download"
            onClick={onClickIcon}
          ></div>
        </div>
      ) : (
        <Input
          className="search"
          placeholder="音乐/视频/电台/用户"
          onChange={ClickChange}
          onPressEnter={ClickPressEnter}
          prefix={<SearchOutlined />}
          onClick={(e) => focus(searchValue)}
        />
      )}
      {objectChange(serachMessage) && bgcShow && (
        <div className="box-search">
          <div className="top">
            <div className="a-link" onClick={changeClickT}>
              搜"<span className="top-text text-nowrap">{searchValue}</span>
              "相关用户
            </div>
            &nbsp;&gt;
          </div>
          <div className="center">
            {serachMessage?.order.map((item) => {
              return (
                <div className="info1" key={item}>
                  <div className="left-1 ">
                    <span className={`img ${item}  sprite_icon2`} />
                    &nbsp;{titlefn(item)}
                  </div>
                  <div
                    className={classNames('right-1 ', {
                      teshu: item === 'artists' || item === 'playlists'
                    })}
                  >
                    {objectChange(serachMessage[item]) &&
                      serachMessage[item].map((items, index) => {
                        return (
                          <div
                            key={items.id}
                            className="text-nowrap"
                            onClick={(e) => changeClick(items, item)}
                          >
                            {messageFn(item, items)}
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className="search-bg" onClick={changeShowbgc}></div>
    </SearchWrapper>
  )
})
SearchCpn.propTypes = {
  lengthInput: PropTypes.bool
}
export default SearchCpn
