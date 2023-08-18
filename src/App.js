import React, { memo, Suspense, useEffect, useRef } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { FloatButton } from 'antd'

import routes from './router'
import store from './store'

import WYAppHeader from 'components/app-header'
import WYAppFooter from 'components/app-footer'
import WYAppPlayerBar from '@/pages/player/app-player-bar'
import ErrorCover from './pages/error-cover'
import AppYidSearch from './components/app-yid-search'

// import newstore from './newstore'
export default memo(function App() {
  //   window.addEventListener('resize', () => {
  //     //    判断后的操作
  //     if (isMobile()) {
  //       console.log('手机端')

  //       // 判断true跳转到这个主页
  //     } else {
  //       console.log('pc端')

  //       // 判断false跳转到这个主页
  //     }
  //   })

  const app = document.getElementById('root')

  useEffect(() => {
    const ob = new ResizeObserver((en) => {
      for (const entry of en) {
        console.log(entry, 'en')
        console.log(entry.borderBoxSize[0].inlineSize, '宽')
        console.log(entry.borderBoxSize[0].blockSize, '高')
      }
    })

    ob.observe(app)
    return () => {
      ob.unobserve(app)
    }
  })
  return (
    // <Provider store={newstore}>
    <Provider store={store}>
      <HashRouter>
        <WYAppHeader />
        {/* 手机端 */}
        <AppYidSearch />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>

        {/* <ErrorCover /> */}
        <WYAppFooter />
        <FloatButton.BackTop />
        {/* 手机端 */}
        <WYAppPlayerBar />
      </HashRouter>
    </Provider>
    // </Provider>
  )
})
