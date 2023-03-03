import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Carousel } from 'antd'

import WYThemeHeaderRcm from 'components/theme-header-rcm'
import WYAlbumCover from 'components/album-cover'
import { getNewAlbumAction } from '../../store/acionCreators'
import { NEW_ALBUM, SETTINGS } from '@/common/contants'

import { NewAlbumWrapper } from './style'

export default memo(function WYNewAlbum() {
  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }))
  const pageRef = useRef()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM))
  }, [dispatch])
  return (
    <NewAlbumWrapper>
      <WYThemeHeaderRcm title="新碟上架" link="/discover/album" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef} {...SETTINGS}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum
                    ? newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                        return (
                          <WYAlbumCover
                            key={iten.id}
                            info={iten}
                            size={100}
                            width={118}
                            bgp="-570px"
                          />
                        )
                      })
                    : ''}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
})
