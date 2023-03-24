// npm i js-cookie
import Cookies from 'js-cookie'
// 插件方式
const Cookie = {
  set: (name, value, expires, path) => {
    let exp = {}
    if (expires && !path) {
      exp = { expires } //有效期
    }
    if (expires && path) {
      exp = { expires, path } //地址
    }
    Cookies.set(name, value, exp)
  },
  get: (name) => {
    if (name) {
      // 取指定
      return Cookies.get(name)
    } else {
      // 取全部
      return Cookies.get()
    }
  },
  remove: (name, path) => {
    if (path) {
      Cookies.remove(name, { path })
    } else {
      Cookies.remove(name)
    }
  }
}

export default Cookie
