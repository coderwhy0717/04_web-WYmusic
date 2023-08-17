import { useEffect, useRef, useState } from 'react'
import { throttle } from 'underscore'

export function useScrollHooksPlus(obj) {
  const distance = useRef(0)

  const el = useRef(window)
  const [isReach, setIsReach] = useState(false)
  const [isLeft, setIsLeft] = useState(false)
  // const [clientHeight, setClientHeight] = useState(0)
  // const [scrollTop, setScrollTop] = useState(0)
  // const [scrollHeight, setScrollHeight] = useState(0)
  //
  // const [clientWidth, setClientWidth] = useState(0)
  // const [scrollLeft, setScrollLeft] = useState(0)
  // const [scrollWidth, setScrollWidth] = useState(0)
  const clientWidth = useRef(0)
  const scrollLeft = useRef(0)
  const scrollWidth = useRef(0)
  const scrollTops = useRef(0)

  const isVar = useRef(true)

  const want = throttle(() => {
    if (el.current === window) {
      console.log('first')

      // setClientHeight(document.documentElement.clientHeight)
      // setScrollTop(document.documentElement.scrollTop)
      // console.dir(document.documentElement)
      scrollTops.current = Math.round(document.documentElement.scrollTop)
      // console.log(document.documentElement.scrollTop, 'hooks')

      // setScrollHeight(document.documentElement.scrollHeight)

      if (
        isVar.current &&
        Math.round(document.documentElement.scrollTop) +
          document.documentElement.clientHeight ===
          document.documentElement.scrollHeight - obj
      ) {
        console.log('到底部')
        isVar.current = false

        setIsReach(true)
      } else if (isReach) {
        // if (isReach) 优化性能
        console.log('来了')
        setIsReach(false)
        isVar.current = true
      }
      return
    } else {
      // console.log('aaa', isReach, el.current.clientWidth)
      // setClientWidth(el.current.clientWidth)
      // setScrollLeft(Math.round(el.current.scrollLeft))
      // setScrollWidth(el.current.scrollWidth)
      clientWidth.current = el.current.clientWidth
      scrollLeft.current = Math.round(el.current.scrollLeft)
      scrollWidth.current = el.current.scrollWidth
      // setScrollTop(Math.round(el.current.scrollTop))
      scrollTops.current = Math.round(el.current.scrollTop)
      // console.log(el.current.scrollTop)
    }
    if (clientWidth.current + scrollLeft.current >= scrollWidth.current) {
      setIsReach(true)
      setIsLeft(true)
      // console.log(
      //   '滚动到最右边了',
      //   isReach,
      //   clientWidth.current,
      //   scrollLeft.current
      // )
    }
    if (scrollLeft.current > 0) {
      setIsLeft(true)
    }
    if (scrollLeft.current === 0) {
      setIsLeft(false)
    }

    if (clientWidth.current + scrollLeft.current < scrollWidth.current) {
      setIsReach(false)
    }
  })
  useEffect(() => {
    if (typeof obj === 'number') {
      // console.log(typeof obj === 'number', '等于')
      distance.current = obj
    } else if (obj) {
      el.current = obj.current
    }
    el.current.addEventListener('scroll', want)
    return () => {
      el.current.removeEventListener('scroll', want)
    }
  }, [obj, want])

  return {
    isLeft,
    isReach
    // scrollHeight,
    // clientHeight,
    // scrollTop,
    // scrollTops,
    // clientWidth,
    // scrollLeft,
    // scrollWidth
  }
}
