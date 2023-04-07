import React from 'react'
import ReactDOM from 'react-dom/client'
//适配屏幕
import 'lib-flexible/flexible.js'
import App from './App'
import 'antd/dist/reset.css'
import '@/assets/css/base.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import calendar from 'dayjs/plugin/calendar'
import relativeTime from 'dayjs/plugin/relativeTime'

// 全局使用简体中文
dayjs.extend(utc)
dayjs.extend(calendar)
dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
