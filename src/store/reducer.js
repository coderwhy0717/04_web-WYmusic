import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReduxcer } from '../pages/player/store'
import { reducer as otherPagesReduxcer } from '../pages/discover/other-pages/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as SearchReducer } from '../pages/search-view/store'
// 模块结合
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReduxcer,
  otherPages: otherPagesReduxcer,
  ranking: rankingReducer,
  search: SearchReducer
})
export default cReducer
