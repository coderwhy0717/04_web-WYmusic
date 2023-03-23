class LocalCookie {
  setCookie(key, value) {
    window.cookie.setItem(key, JSON.stringify(value))
  }

  getCookie(key) {
    const value = window.cookie.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCookie(key) {
    window.cookie.removeItem(key)
  }
  clearCookie() {
    window.cookie.clear()
  }
}

export default new LocalCookie()
