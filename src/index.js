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

// const data = [
//   {
//     elements: [
//       {
//         id: 0,
//         name: '0',
//         src: 'imgUrl',
//         type: 'image'
//       }
//     ]
//   },
//   {
//     elements: [
//       {
//         id: 1,
//         name: '1',
//         src: 'imgUrl1',
//         type: 'image1'
//       }
//     ]
//   }
// ]
// const newData = []
// for (let item of data) {
//   for (let items of item.elements) {
//     newData.push({
//       id: items.id,
//       name: items.name,
//       src: items.src,
//       type: items.type
//     })
//   }
// }
// console.log(newData)

//  data.map((item) => {
//
//   fo
//   item.map((items) => {
//
//   })
//   console.log(datas, 'res')
// })
