import React, { memo, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getSizeImage } from '@/utils/format-utils'
import { Collapse } from 'antd'
import { Image } from 'antd'
import WYUserNameSort from 'components/user-name-sort'
import WYPlayBtn from 'components/play-btn'
import { SongInfoWrapper } from './style'

export default memo(function WYSongInfo(props) {
  const { info = [], pagesLyrics = [] } = props
  const al = (info.al && info.al) || ''
  const alia = info.alia && info.alia[0]
  const tns = info.tns && info.tns[0]
  const { Panel } = Collapse
  // console.log(info)
  // console.log(pagesLyrics)

  const [title, setTitle] = useState('展示')
  const [isTebel, setIsTebel] = useState(0)
  const callback = useCallback((key) => {
    // console.log(key[0],"key")
    if (key[0]) {
      setIsTebel(1)
      setTitle('收起')
    } else {
      setIsTebel(0)
      setTitle('展示')
    }
  }, [])
  const a = () => {
    return pagesLyrics
      .slice(0, 13)
      .map((item, index) => <div key={index}>{item.content}</div>)
  }

  return (
    <SongInfoWrapper isTebel={isTebel}>
      <div className="player-image">
        <div className="image sprite_covor">
          {al.picUrl && (
            <Image
              width={130}
              height={130}
              src={getSizeImage(al.picUrl, 130)}
              preview={{
                src: al.picUrl,
                mask: '预览'
              }}
              fallback={
                'data:image/png;base64,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'
              }
            />
          )}
          {/* <img src={getSizeImage(al.picUrl, 130)} alt=""></img> */}
        </div>
        <div className="link">
          <span className="icon sprite_icon2"></span>
          <a href="/#">生成外链播放器</a>
        </div>
      </div>
      <div className="song-content">
        <div className="top-header">
          <div className="top-label sprite_icon2"></div>
          <div className="text">
            <div className="name">
              {info ? info.name : '未知标题'}
              {info.mv ? (
                <NavLink
                  to={`/discover/mv/${info.mv}`}
                  title="mv"
                  className="mv sprite_icon2"
                >
                  &nbsp;&nbsp;
                </NavLink>
              ) : (
                ''
              )}
            </div>
            {alia ? (
              <div className="name-label">{alia}</div>
            ) : (
              <div className="name-label">{tns}</div>
            )}
          </div>
        </div>
        <div className="song-info">
          <div className="info-name">
            <p>歌手：</p>
            <WYUserNameSort artists={info.ar} noWarp={true} />
          </div>
          <div className="album info-name">
            所属专辑：
            <NavLink to={`/discover/albumDetail/${al.id}`}>{al.name}</NavLink>
            {tns ? <span className="name-label"> - ({tns})</span> : ''}
          </div>
          <WYPlayBtn tracksOrId={info.id} />
          <div className="lyric">
            <Collapse
              bordered={false}
              destroyInactivePanel
              ghost={true}
              onChange={callback}
            >
              <Panel
                className="top-panel"
                collapsible="disabled"
                showArrow={false}
                header={a()}
                key="0"
              ></Panel>
              <Panel
                className="panel"
                showArrow={false}
                header={
                  pagesLyrics.length > 13 ? (
                    <div>
                      {title}
                      <i className="tebel sprite_icon2"></i>
                    </div>
                  ) : (
                    ''
                  )
                }
                key="1"
              >
                {pagesLyrics.slice(13).map((item, index) => {
                  return <div key={index}>{item.content}</div>
                })}
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className="error">
          <div className="err-a">
            <a href="/#">翻译歌词</a>
            <a href="/#">报错</a>
          </div>
          <div className="err-b">
            <span>
              暂时没有翻译，
              <a href="/#" className="err-b-a">
                求翻译
              </a>
            </span>
          </div>
        </div>
      </div>
    </SongInfoWrapper>
  )
})
