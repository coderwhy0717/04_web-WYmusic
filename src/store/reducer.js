import { combineReducers } from 'redux-immutable'
import { reducer as  recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReduxcer} from '../pages/player/store'
import { reducer as otherPagesReduxcer } from '../pages/discover/other-pages/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
// 模块结合
const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReduxcer,
    otherPages: otherPagesReduxcer,
    ranking: rankingReducer
})
export default cReducer