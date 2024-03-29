import React from 'react'
import { Redirect } from 'react-router-dom'

// const WYPageDiscover = React.lazy(() => import("@/pages/discover"))
const Recommend = React.lazy(() =>
  import('../pages/discover/c-pages/recommend')
)
const Album = React.lazy(() => import('../pages/discover/c-pages/album'))
const Djradio = React.lazy(() => import('../pages/discover/c-pages/djradio'))
const Ranking = React.lazy(() => import('../pages/discover/c-pages/ranking'))
const Songs = React.lazy(() => import('../pages/discover/c-pages/songs'))
const Singer = React.lazy(() => import('../pages/discover/c-pages/singer'))
const Artist = React.lazy(() => import('../pages/discover/other-pages/artist'))

const WYPageMine = React.lazy(() => import('@/pages/mine'))

const WYPageFriend = React.lazy(() => import('@/pages/friend'))
const Mv = React.lazy(() => import('../pages/discover/other-pages/mv'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: React.lazy(() => import('@/pages/discover')),
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/Ranking',
        exact: true,
        render: () => <Redirect to="/discover/Ranking/19723756" />
      },
      {
        path: '/discover/Ranking/:id',
        component: Ranking
      },
      {
        path: '/discover/Songs',
        exact: true,
        render: () => <Redirect to="/discover/Songs/全部" />
      },
      {
        path: '/discover/Songs/:cat',
        component: Songs
      },
      {
        path: '/discover/Djradio',
        component: Djradio
      },
      // 歌手
      {
        path: '/discover/singer',
        component: Singer
      },
      // 艺人
      {
        path: '/discover/artist/:id',
        component: Artist
      },
      {
        path: '/discover/Album',
        component: Album
      },
      {
        path: '/discover/mv/:id',
        component: Mv
      },
      {
        path: '/discover/songListDetail/:id',
        component: React.lazy(() =>
          import('@/pages/discover/other-pages/song-list-details')
        )
      },
      {
        path: '/discover/playSong/:id',
        component: React.lazy(() =>
          import('@/pages/discover/other-pages/song-details')
        )
      },

      {
        path: '/discover/albumDetail/:id',
        component: React.lazy(() =>
          import('@/pages/discover/other-pages/album-details')
        )
      },
      {
        path: '/discover/mv/:id',
        component: React.lazy(() =>
          import('@/pages/discover/other-pages/mv-detail')
        )
      },
      // 用户事件 动态 关注 粉丝
      {
        path: '/discover/user/event/:id',
        component: React.lazy(() =>
          import('@/pages/discover/c-pages/user-action/user-event')
        )
      },
      // 关注
      {
        path: '/discover/user/follows/:id',
        component: React.lazy(() =>
          import('@/pages/discover/c-pages/user-action/user-follows')
        )
      },
      // 粉丝
      {
        path: '/discover/user/fans/:id',
        component: React.lazy(() =>
          import('@/pages/discover/c-pages/user-action/user-fans')
        )
      }
    ]
  },
  {
    path: '/mine',
    component: WYPageMine
  },
  {
    path: '/friend',
    component: WYPageFriend
  },
  {
    path: '/search/view/:name',
    component: React.lazy(() => import('@/pages/search-view'))
  },
  // login 登录 页面
  {
    path: '/login',
    component: React.lazy(() => import('@/pages/login'))
  },
  // 用户页面 信息
  {
    path: '/user/home/:id',
    component: React.lazy(() => import('@/pages/user-home'))
  },
  // user/home 用户听得一周/所有时间 里的所有歌曲
  {
    path: '/user/songs/rank/:id',
    component: React.lazy(() => import('@/pages/user-home/user-song-rank-page'))
  },
  // msg/private 通知-私信
  {
    path: '/msg',
    component: React.lazy(() => import('@/pages/msg-private')),
    routes: [
      {
        path: '/msg',
        exact: true,
        render: () => <Redirect to="/msg/me" />
      },
      {
        path: '/msg/me',
        component: React.lazy(() => import('@/pages/msg-private/cpn/me'))
      },
      {
        path: '/msg/private',
        component: React.lazy(() => import('@/pages/msg-private/cpn/private')),
        routes: [
          {
            path: '/msg/private/detail/:data',
            component: React.lazy(() =>
              import('@/pages/msg-private/cpn/private/cpn/private-detail')
            )
          }
        ]
      },
      {
        path: '/msg/comment',
        component: React.lazy(() => import('@/pages/msg-private/cpn/comment'))
      },
      {
        path: '/msg/inform',
        component: React.lazy(() => import('@/pages/msg-private/cpn/inform'))
      }
    ]
  },
  {
    path: '/err404',
    component: React.lazy(() => import('@/pages/error-cover'))
  },
  {
    path: '/ERR_NETWORK',
    component: React.lazy(() => import('@/pages/error-cover'))
  }
]

// router.beforeEach((to, from, next) => {
//   console.log(to,from,"路由器");
// })

export default routes
