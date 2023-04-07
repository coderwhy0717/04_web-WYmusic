import request from './request'

// 搜索 建议
export function SearchSuggest(keywords) {
  return request({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}
// 搜索页面的 信息
export function getSearchPageMessage(keywords, type, limit) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      type
    }
  })
}
