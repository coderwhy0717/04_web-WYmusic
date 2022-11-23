import React, { memo } from 'react'
import TopBanner from './c-cpns/top-banner'
import WYHotRecommend from './c-cpns/hot-recommend'
import WYNewAlbum from './c-cpns/new-album'
import WYRankingList from './c-cpns/ranking-list'
import WYUserLogin from './c-cpns/right_cpns/user-login'
import WYSettleSinger from './c-cpns/right_cpns/settle-singer'
import WYHotAnchor from './c-cpns/right_cpns/hot-anchor'

import {RecommendWraper,
        Content,
        RecommendLeft,
        RecommendRight
      } from './style'
export default memo(function WYRecommend(props) {

  return (
    <RecommendWraper>
     <TopBanner />
     <Content className="wrap-v2">
      <RecommendLeft>
          <WYHotRecommend/>
          <WYNewAlbum />
          <WYRankingList />
      </RecommendLeft>

      <RecommendRight>
          <WYUserLogin />
          <WYSettleSinger />
          <WYHotAnchor/>
      </RecommendRight>
     </Content>
    </RecommendWraper>
  )
})
