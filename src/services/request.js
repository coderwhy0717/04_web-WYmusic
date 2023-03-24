import axios from 'axios'
import Cookie from '../utils/cookie'
import { BASE_URL, TIME_OUT } from './config'
axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

instance.interceptors.request.use(
  (config) => {
    // console.log('全局请求成功')
    // console.log(config.params, '总播放')
    // if(config.url === '/banner') return config
    // if(config.url === '/toplist') return config
    // if(config.url === '/song/detail') return config
    // 请求如果config.url有params就添加cookie
    // 'MUSIC_A=8aae43f148f990410b9a2af38324af24e87ab9227c9265627ddd10145db744295fcd8701dc45b1ab8985e142f491516295dd965bae848761274a577a62b0fdc54a50284d1e434dcc04ca6d1a52333c9a'
    // if (config.params) {
    const token = Cookie.get('_token')
    console.log(token)
    if (token) {
      config.headers.cookie = token
    }
    // }

    return config
  },
  (err) => {
    console.log('全局请求失败')
    return err
  }
)

instance.interceptors.response.use(
  (res) => {
    // console.log('全局响应成功', res)
    return res.data
  },
  (err) => {
    console.log('全局响应失败', err.response.data)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        case 404:
          console.log('404')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err
  }
)

export default instance
