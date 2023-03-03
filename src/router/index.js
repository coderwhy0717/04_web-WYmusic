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
const Artist = React.lazy(() => import('../pages/discover/c-pages/artist'))

const WYPageMine = React.lazy(() => import('@/pages/mine'))

const WYPageFriend = React.lazy(() => import('@/pages/friend'))

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
      {
        path: '/discover/artist/:id',
        component: Artist
      },
      {
        path: '/discover/Album',
        component: Album
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
  {
    path: '/user/home/:id',
    component: React.lazy(() =>
      import('@/pages/discover/other-pages/artist-details')
    )
  },
  {
    path: '/ERR_NETWORK',
    component: React.lazy(() => import('@/pages/error-cover'))
  }
]

export default routes
