import { province, city, county } from 'china-region-data'

// ?imageView&blur=40x20 照片模糊拼接
export function getSizeImage(imgUrl, size, type = 'x') {
  return `${imgUrl}?param=${size}${type}${size}`
}

// 对播放量的处理
export function formatNumber(num) {
  if (num === 0 || num < 10000) {
    return num + ''
  } else if (num > 1 && num < 10000) {
    return num + ''
  } else if (num >= 100000000) {
    return (num / 100000000).toFixed(2) + '亿'
  } else {
    return (num / 10000).toFixed(2) + '万'
  }
}
// 对歌曲的时间格式化
export function formatDate(time, fmt) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function formatMonthDay(time) {
  return formatDate(time, 'MM月dd日')
}
// 根据年限 获取几几后
export function formatYearLater(time) {
  if (time === undefined) return
  if (time < 0) return
  const year = formatDate(time, 'yy') * 1
  if (year < 10) {
    return '00'
  } else if (year < 20) {
    return '10'
  } else if (year < 30) {
    return '20'
  } else if (year < 40) {
    return '30'
  } else if (year < 50) {
    return '40'
  } else if (year < 60) {
    return '50'
  } else if (year < 70) {
    return '60'
  } else if (year < 80) {
    return '70'
  } else if (year < 85) {
    return '80'
  } else if (year < 90) {
    return '85'
  } else if (year < 95) {
    return '90'
  } else {
    return '95'
  }
}

// 获取城市地区
export function getCity(id) {
  if (id === undefined) return
  let provinceId = id.toString().slice(0, 2).padEnd(12, 0)
  let cityId = id.toString().padEnd(12, 0)
  // 省 '130000000000'
  // console.log(province.filter((el) => el.id === provinceId)[0])
  // 根据省'130000000000'  获取城市'130400000000'
  // console.log(
  //   city[provinceId].filter((el) => el.id === cityId),
  //   '4'
  // )
  // 判断传进来的是乱的 获取不到 就出去
  if (city[provinceId] === undefined)
    return province.filter((el) => el.id === provinceId)[0]
  return (
    // 返回的形式是数组
    city[provinceId].filter((el) => el.id === cityId)[0] ||
    province.filter((el) => el.id === provinceId)[0]
  )
  // return province.filter((el) => el.id === id)[0]
}
export function formatYearMonthDay(time, style = '-') {
  return formatDate(time, `yyyy${style}MM${style}dd`)
}
export function formatMinuteSecond(time) {
  return formatDate(time, 'mm:ss')
}
//以上-- 对歌曲的时间格式化

export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function getdescription(srting) {
  if (!srting) return
  const dsp = srting.split('\n')
  return dsp
}
export function subscribedCount(sub) {
  // console.log(sub)
  if (sub < 99999) return sub
  if (9999 < sub && sub > 99999) return (sub / 10000).toFixed(0) + '万'
  if (sub > 99999999) return (sub / 100000000).toFixed(0) + '亿'
}

// export function formatterDate(val,lay='-') {
//       // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
//       let newDateObj = new Date(val)
//       let year = newDateObj.getFullYear()
//       let month = newDateObj.getMonth() + 1
//       let day = newDateObj.getDate()
//       // let hh = newDateObj.getHours()
//       // let mm = newDateObj.getMinutes()
//       // let ss = newDateObj.getSeconds()
//       month = month > 9 ? month : '0' + month
//       day = day > 9 ? day : '0' + day
//       // 发送时间
//       return `${year}${lay}${month}${lay}${day}`
//   }

// 处理Album详情页的专辑介绍：
export function getAlbumText(description) {
  const des = description?.split('\n')
  return des
}

// object 转化 判断是否有数据
export function objectChange(obj) {
  // console.log(!!Object.keys({ a: 'key', b: 'a' } ?? {}).length, 'nihao')

  return !!Object.keys(obj ?? {}).length
}
