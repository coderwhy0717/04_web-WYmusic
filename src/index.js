import React from 'react'
import ReactDOM from 'react-dom/client'
//适配屏幕
import 'lib-flexible/flexible.js'

import App from './App'
import '@/assets/css/base.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
