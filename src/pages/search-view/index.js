import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SearchCpn from '../../components/search-cpn'
import SearchForm from '../../components/search-form'
import SearchAlbum from './cpn/search-album'
import SearchArtist from './cpn/search-artist'
import SearchSongs from './cpn/search-songs'
import {
  changeCurrentType,
  changeCurrentName,
  dSerachPageMessage
} from './store/actionCreators'
import { SearchViewWrapper } from './style'

const SearchView = memo((props) => {
  console.log(props.match)
  const arrHead = [
    {
      title: '单曲',
      type: 1,
      name: 'songs'
    },
    {
      title: '歌手',
      type: 100,
      name: 'artists'
    },
    {
      title: '专辑',
      type: 10,
      name: 'albums'
    },
    {
      title: '视频',
      type: 1014,
      name: 'videos'
    },
    {
      title: '歌词',
      type: 1006,
      name: 'songs'
    },
    {
      title: '歌单',
      type: 1000,
      name: 'playlists'
    },
    {
      title: '声音主播',
      type: 2000,
      name: 'resources'
    },
    {
      title: '用户',
      type: 1002,
      name: 'userprofiles'
    }
  ]
  const text = {
    1: '首单曲',
    100: '个歌手',
    10: '张专辑',
    1014: '个视频',
    1006: '个歌词',
    1000: '个歌单',
    2000: '个节目',
    1002: '个用户'
  }
  const dispatch = useDispatch()
  // const [currentType, setCurrentType] = useState(1)
  // const [currentName, setCurrentName] = useState('songs')

  const { searchPageMessage, currentType, currentName } = useSelector(
    (state) => ({
      searchPageMessage: state.getIn(['search', 'searchPageMessage']),
      currentType: state.getIn(['search', 'currentType']),
      currentName: state.getIn(['search', 'currentName'])
    }),
    shallowEqual
  )
  // 点击btns 类型
  const changeBtn = (type, name) => {
    // setCurrentType(type)
    dispatch(changeCurrentType(type))
    dispatch(changeCurrentName(name))
    // setCurrentName(name)
    // dispatch(dSerachPageMessage(props.match.params.name, type))
  }
  // 监听搜索 的改变 去请求 当前类型的数据
  useEffect(() => {
    console.log(props.match.params.name, 'currentType', currentType)
    dispatch(dSerachPageMessage(props.match.params.name, currentType))
    console.log('请求数据67')
  }, [props.match.params.name, dispatch, currentType])
  //调试
  useEffect(() => {
    console.log(searchPageMessage[currentName])
  }, [searchPageMessage, currentName])
  return (
    <SearchViewWrapper>
      <div className="box wrap-v2">
        <SearchCpn lengthInput={true} />
        <div className="search-title">
          <span>搜索</span>
          <span className="name">"{props.match.params.name}"</span>, 找到
          <span className="number">
            {searchPageMessage[currentName]?.length ?? 0}
          </span>
          {text[currentType]}
        </div>
        <div className="form">
          <div className="form-head">
            {arrHead.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={classNames('text-btn', {
                    active: item.type === currentType
                  })}
                  onClick={(e) => changeBtn(item.type, item.name)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          {/* 歌曲 */}
          {currentType === 1 && (
            <SearchForm data={searchPageMessage[currentName]}>
              {/* <SearchSongs /> */}
            </SearchForm>
          )}
          {/* 歌手 */}
          {currentType === 100 && (
            <SearchArtist data={searchPageMessage[currentName]} />
          )}
          {/* 专辑 */}
          {currentType === 10 && (
            <SearchAlbum data={searchPageMessage[currentName]} />
          )}
          {/* 视频 */}
          {currentType === 1014 && <SearchForm></SearchForm>}
          {/* 歌词 */}
          {currentType === 1006 && <SearchForm type={currentType}></SearchForm>}
          {/* 歌单 */}
          {currentType === 1000 && <SearchForm type={currentType}></SearchForm>}
          {/* 声音主播 */}
          {currentType === 2000 && <SearchForm></SearchForm>}
          {/* 用户 */}
          {currentType === 1002 && <SearchForm type={currentType}></SearchForm>}

          <div className="songs-message"></div>
        </div>
      </div>
    </SearchViewWrapper>
  )
})

SearchView.propTypes = {}

export default SearchView
