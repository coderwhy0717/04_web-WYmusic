import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Carousel } from 'antd'
import { AppYidMusicCoverWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage } from '@/utils/format-utils'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  changePlayNextSongAndSequenceAction,
  getPlaySongDetailAction
} from '../../../store/actionCreators'
const AppYidMusicCover = memo((props) => {
  const dispatch = useDispatch()

  const onChange = (currentSlide) => {
    console.log(currentSlide, '之后')
    // const id = playList[currentSlide].id
    // dispatch(changePlayNextSongAndSequenceAction(-1))
    // dispatch(getPlaySongDetailAction(id))
    // dispatch(getPlaySongDetailAction(id))
    // dispatch(changePlayNextSongAndSequenceAction(tag))
    // const index = playList.findIndex((item) => item.id === currentSong.id)
    // console.log(index, '之后index')

    // if (currentSlide !== index) {
    //   PlayRef.current.goTo(index, true)
    // }
  }
  const indexcuer = useRef(0)
  // 移动端 左右滑动 切歌
  const onchangebefore = (currentSlide, newt) => {
    console.log(currentSlide, newt, '之前')
    if (currentSlide > newt) {
      dispatch(changePlayNextSongAndSequenceAction(-1))
    } else if (currentSlide < newt) {
      dispatch(changePlayNextSongAndSequenceAction(1))
    }
  }
  const PlayRef = useRef()
  const { playList, currentSong, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
      currentSong: state.getIn(['player', 'currentSong'])
    }),
    shallowEqual
  )
  const onGoTo = useCallback(
    (slideNumber, dontAnimate) => {
      console.log(slideNumber, 'index')
      PlayRef.current.goTo(slideNumber - 1, true)
    },
    [PlayRef]
  )
  const musicPlay = useEffect(() => {
    setTimeout(() => {
      // console.log(currentSong, playList)
      // const index = playList.findIndex((item) => item.id === currentSong.id)
      // indexcuer.current = index
      // console.log(index, 'index')
      // PlayRef.current.goTo(index, true)
      // console.log(currentSong, playList)
      // console.log(PlayRef.current)
    }, 1000)
  }, [playList, PlayRef, currentSong])
  // useEffect(() => {
  //   PlayRef.current.goTo(currentSongIndex, true)
  // }, [currentSongIndex])
  useEffect(() => {
    let carousel = document.querySelector('.carousel')
    let Oicon = document.querySelectorAll('.wrapper i')
    let firstImg = carousel.querySelectorAll('img')[0]
    let isDrageStart = false,
      isDragging = false,
      prevPageX,
      prevScrollLeft,
      positionDiff
    const dragStart = (e) => {
      isDrageStart = true
      prevPageX = e.pageX || e.touches[0].pageX
      prevScrollLeft = carousel.scrollLeft
    }
    const dragging = (e) => {
      if (!isDrageStart) return
      e.preventDefault()
      isDragging = true
      carousel.classList.add('dragging')
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
      carousel.scrollLeft = prevScrollLeft - positionDiff
      showIcon()
    }
    const dragStop = () => {
      isDrageStart = false
      carousel.classList.remove('dragging')
      if (!isDragging) return
      isDragging = false
      autoSlide()
    }

    Oicon.forEach((element) => {
      element.addEventListener('click', () => {
        let firstImageWidth = firstImg.clientWidth + 10 //加10因为图片的margin-left为10
        carousel.scrollLeft +=
          element.id === 'left' ? -firstImageWidth : firstImageWidth
        setTimeout(() => showIcon(), 60)
      })
    })
    // 左右箭头的icon显示隐藏
    const showIcon = () => {
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth
      Oicon[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block'
      Oicon[1].style.display =
        carousel.scrollLeft === scrollWidth ? 'none' : 'block'
    }

    const autoSlide = () => {
      if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth)
        return
      positionDiff = Math.abs(positionDiff)
      let firstImgWidth = firstImg.clientWidth + 200
      let valDifference = firstImgWidth - positionDiff
      if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
          positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff)
      }
      carousel.scrollLeft -=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
    }
    carousel.addEventListener('mousemove', dragging) //当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。
    carousel.addEventListener('touchmove', dragging) //当用户在屏幕上移动手指时会发生 touchmove 事件

    carousel.addEventListener('mousedown', dragStart) //当鼠标指针移动到元素上方，并按下鼠标左键时，会发生 mousedown 事件
    carousel.addEventListener('touchstart', dragStart) //当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发

    carousel.addEventListener('mouseup', dragStop) //当鼠标指针移动到元素上方，并松开鼠标左键时，会发生 mouseup 事件
    carousel.addEventListener('mouseleave', dragStop) //当鼠标指针离开被选元素时，会发生 mouseleave 事件
    carousel.addEventListener('touchend', dragStop) //当手指从屏幕上离开的时候触发
  })
  return (
    <AppYidMusicCoverWrapper>
      <div class="wrapper">
        <div class="carousel">
          <img
            src="https://pics6.baidu.com/feed/b7fd5266d0160924cbe5a630c4a608fde7cd3404.jpeg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://lmg.jj20.com/up/allimg/811/013015115633/150130115633-13-1200.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img1.baidu.com/it/u=3651966868,3530163192&fm=253&fmt=auto&app=138&f=JPEG"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img.zcool.cn/community/018dbb5c769407a801213f26cf080b.jpg@3000w_1l_2o_100sh.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img.zcool.cn/community/018dbb5c769407a801213f26cf080b.jpg@3000w_1l_2o_100sh.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img0.baidu.com/it/u=3299375624,640545767&fm=253&fmt=auto&app=138&f=JPEG"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img.zcool.cn/community/018dbb5c769407a801213f26cf080b.jpg@3000w_1l_2o_100sh.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://netdisk.moyublog.com/free_wallpapers_files/bazr2n55k3t.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img.china.alibaba.com/img/ibank/2015/740/803/2379308047_603932725.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://netdisk.moyublog.com/free_wallpapers_files/yljehh212re.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://img.zcool.cn/community/018dbb5c769407a801213f26cf080b.jpg@3000w_1l_2o_100sh.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://lmg.jj20.com/up/allimg/811/013015115633/150130115633-9-1200.jpg"
            alt="img"
            draggable="false"
          />
          <img
            src="https://lmg.jj20.com/up/allimg/811/013015115633/150130115633-10-1200.jpg"
            alt="img"
            draggable="false"
          />
        </div>
      </div>
    </AppYidMusicCoverWrapper>
  )
})

AppYidMusicCover.propTypes = {}

export default AppYidMusicCover
