import { getSearchPageMessage, SearchSuggest } from '../../../services/search'
import * as actionType from './constans'

const changeSeatchMessage = (message) => ({
  type: actionType.SERACH_MESSAGE,
  message
})

const changeSeatchPageMessage = (message) => ({
  type: actionType.SERACH_PAGE_MESSAGE,
  message
})
export const changeCurrentType = (currentType) => ({
  type: actionType.SERACH_CURRENT_TYPE,
  currentType
})
export const changeCurrentName = (name) => ({
  type: actionType.SERACH_CURRENT_NAME,
  name
})
// head search input
export function getSeatchMessage(name) {
  return (dispatch) => {
    SearchSuggest(name).then((res) => {
      // if(res.result)
      dispatch(changeSeatchMessage(res.result))
    })
  }
}
// search page input
export function dSerachPageMessage(name, type = 1, limit = 20) {
  return (dispatch) => {
    getSearchPageMessage(name, type, limit).then((res) => {
      // console.log(res, 'res')
      if (type === 2000) {
        dispatch(changeSeatchPageMessage(res.data))
        return
      }
      dispatch(changeSeatchPageMessage(res.result))
    })
  }
}
